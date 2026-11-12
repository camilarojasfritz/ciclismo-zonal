# 04 — API (backend Nest.js)

Base: `https://api.<dominio>/v1` · Formato JSON · Fechas ISO 8601 · Precios como string decimal (`"1250000.00"`).

## 1. Convenciones

- **Públicos**: sin autenticación, solo lectura (salvo crear un turno).
- **Admin**: requieren `Authorization: Bearer <accessToken>`.
- Listados paginados: `?page=1&limit=24` → respuesta `{ data: [...], meta: { page, limit, total, totalPages } }`.
- Errores: `{ statusCode, message, error }` (formato estándar de Nest).
- Documentación automática con **Swagger** en `/docs` (solo en desarrollo y staging).

## 2. Endpoints públicos

### Catálogo
| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/productos` | Listado con filtros |
| GET | `/productos/:slug` | Ficha completa (imágenes, variantes, especificaciones) |
| GET | `/productos/:slug/relacionados` | Hasta 4 productos de la misma categoría |
| GET | `/productos/destacados` | Para Inicio |
| GET | `/categorias` | Árbol de categorías activas |
| GET | `/categorias/:slug` | Categoría con sus subcategorías |
| GET | `/marcas` | Marcas (con `?destacadas=true`) |

Filtros de `GET /productos`:

| Parámetro | Ejemplo | Nota |
| --- | --- | --- |
| `categoria` | `mountain-bike` | Incluye subcategorías |
| `marca` | `scott,orbea` | Varias separadas por coma |
| `precioMin` / `precioMax` | `200000` | |
| `stock` | `disponible` | Oculta sin stock |
| `q` | `casco` | Búsqueda por nombre, marca o descripción |
| `orden` | `precio-asc`, `precio-desc`, `nuevos`, `nombre` | Default: `destacados` |
| `page`, `limit` | | |

### Taller
| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/taller/servicios` | Servicios activos con precios |
| GET | `/turnos/disponibilidad?desde=&hasta=&servicio=` | **Fase 2.** Días y franjas con cupo libre |
| POST | `/turnos` | **Fase 2.** Crea un turno `PENDIENTE` y devuelve `codigo` |
| GET | `/turnos/:codigo` | **Fase 2.** Estado del turno (para el cliente) |
| PATCH | `/turnos/:codigo/cancelar` | **Fase 2.** Cancela si faltan más de 24 h |

### Sitio
| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/configuracion` | Datos del local: horarios, contacto, redes, hero, aviso |

## 3. Endpoints de administración

### Autenticación
| Método | Ruta | Descripción |
| --- | --- | --- |
| POST | `/auth/login` | `{ email, password }` → `{ accessToken, refreshToken, usuario }` |
| POST | `/auth/refresh` | Renueva el access token |
| POST | `/auth/logout` | Invalida el refresh token |
| GET | `/auth/me` | Usuario actual |

### CRUDs (todos bajo `/admin`)
| Recurso | Rutas |
| --- | --- |
| Productos | `GET/POST /admin/productos`, `GET/PATCH/DELETE /admin/productos/:id`, `PATCH /admin/productos/:id/stock`, `PATCH /admin/productos/precios` (actualización masiva por % y categoría/marca) |
| Imágenes | `POST /admin/productos/:id/imagenes` (multipart), `PATCH /admin/imagenes/:id` (alt, orden), `DELETE /admin/imagenes/:id` |
| Categorías | `GET/POST /admin/categorias`, `PATCH/DELETE /admin/categorias/:id` |
| Marcas | `GET/POST /admin/marcas`, `PATCH/DELETE /admin/marcas/:id` |
| Servicios taller | `GET/POST /admin/servicios`, `PATCH/DELETE /admin/servicios/:id` |
| Turnos (fase 2) | `GET /admin/turnos?fecha=&estado=`, `PATCH /admin/turnos/:id/estado` |
| Cupos (fase 2) | `GET/PUT /admin/cupos`, `GET/POST/DELETE /admin/dias-bloqueados` |
| Configuración | `GET/PUT /admin/configuracion` |
| Usuarios (solo ADMIN) | `GET/POST /admin/usuarios`, `PATCH/DELETE /admin/usuarios/:id` |

Cada escritura que afecte al sitio público dispara la **revalidación** del frontend (ver `02-arquitectura.md`, sección 4).

## 4. Ejemplo de respuesta: producto

```json
{
  "id": "6f1c...",
  "nombre": "Scott Aspect 960",
  "slug": "scott-aspect-960",
  "precio": "1250000.00",
  "precioAnterior": null,
  "stock": "DISPONIBLE",
  "nuevo": true,
  "marca": { "nombre": "Scott", "slug": "scott" },
  "categoria": { "nombre": "Mountain Bike", "slug": "mountain-bike" },
  "imagenes": [{ "url": "https://res.cloudinary.com/...", "alt": "Scott Aspect 960 negra, vista lateral" }],
  "variantes": [{ "id": "a1", "nombre": "Talle M", "tipo": "TALLE", "stock": "DISPONIBLE" }],
  "especificaciones": [{ "grupo": "Cuadro", "clave": "Material", "valor": "Aluminio" }]
}
```

## 5. Ejemplo: crear turno (fase 2)

```http
POST /v1/turnos
{
  "servicioId": "s1",
  "fecha": "2026-12-03",
  "franja": "MANANA",
  "nombre": "Juan Pérez",
  "telefono": "+5492954123456",
  "bicicleta": "MTB rodado 29",
  "comentario": "Hacen ruido los cambios"
}
```

Respuesta `201`: `{ "codigo": "CZ-7K3P", "estado": "PENDIENTE" }`.

Validaciones: la fecha debe ser futura, no estar bloqueada y tener cupo libre en esa franja; teléfono obligatorio; rate limit de 5 solicitudes por hora por IP.
