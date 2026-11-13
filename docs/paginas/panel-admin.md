# Página: Panel de administración

**Ruta:** `/admin` (privado, `noindex`) · **Prioridad:** P1

## Objetivo

Que el personal del local **cargue y actualice productos, precios, stock, servicios y turnos sin ayuda técnica**, desde la compu o el celular.

> Principio de diseño: **simple antes que completo**. Los usuarios no son técnicos; las tareas frecuentes (cambiar precio o stock) tienen que resolverse en dos clics.

## Usuarios y roles
| Rol | Puede |
| --- | --- |
| `ADMIN` | Todo, incluida la gestión de usuarios y la configuración |
| `EDITOR` | Productos, categorías, marcas, servicios y turnos. No usuarios ni configuración. |

## Pantallas

### 1. Login — `/admin/login`
- Email + contraseña. "Recordarme" mantiene la sesión con refresh token.
- Bloqueo temporal después de 5 intentos fallidos.
- Recuperación de contraseña: P2 (por email). Mientras tanto la resetea un ADMIN.

### 2. Dashboard — `/admin`
- Accesos rápidos: `+ Nuevo producto`, `Turnos de hoy` (fase 2), `Actualizar precios`.
- Indicadores: productos activos, sin stock y sin imagen; turnos pendientes (fase 2).
- Alertas: "Hay 12 productos sin imagen".

### 3. Productos — `/admin/productos`
**Listado**
- Tabla: miniatura, nombre, categoría, marca, precio, stock y activo.
- Buscador + filtros (categoría, marca, stock, activo).
- **Edición en línea** de precio y stock directamente en la tabla (la tarea más frecuente).
- Acciones: editar, duplicar (útil para modelos parecidos), activar/desactivar, eliminar (con confirmación).
- Acciones masivas: activar o desactivar, cambiar categoría.

**Crear o editar** — `/admin/productos/nuevo`, `/admin/productos/[id]`
- Secciones: Datos básicos (nombre, marca, categoría, descripción) · Precio y stock · Variantes · Especificaciones · Imágenes · Visibilidad (activo, destacado, nuevo) · SEO (slug, autogenerado y editable).
- **Imágenes:** arrastrar y soltar varias; reordenar arrastrando; la primera es la principal; `alt` obligatorio (se sugiere el nombre del producto).
- **Especificaciones:** filas clave/valor agrupables, con plantillas por categoría (p. ej. Bicicletas: Cuadro, Horquilla, Transmisión, Frenos, Ruedas, Rodado, Peso).
- Vista previa: botón "Ver en el sitio".
- Avisar si se intenta salir con cambios sin guardar.

### 4. Actualización masiva de precios — `/admin/precios`
- Pensado para la inflación: aplicar **+X %** a una categoría, una marca o una selección.
- Vista previa del antes y después; confirmación explícita.
- Redondeo configurable (p. ej. a $ 100 o $ 1.000).
- Registro de cambios: quién, cuándo y qué porcentaje.

### 5. Categorías — `/admin/categorias`
- Árbol con arrastrar para reordenar y anidar.
- Campos: nombre, slug, descripción, imagen de banner, activa.

### 6. Marcas — `/admin/marcas`
- Nombre, logo y destacada (franja de marcas de Inicio).

### 7. Taller — `/admin/taller`
- **Servicios:** CRUD con precio, "desde", qué incluye, demora y orden.
- **Turnos (fase 2):**
  - Vista de agenda (día o semana) y vista de lista con filtros por estado.
  - Cambiar estado: Pendiente → Confirmado → En taller → Listo → Entregado (o Cancelado).
  - Botón "Avisar por WhatsApp" que abre un mensaje armado para el cliente: "¡Hola Juan! Tu bici ya está lista para retirar 🚲".
- **Cupos (fase 2):** cupo por día y franja; días bloqueados (feriados, vacaciones).

### 8. Configuración del sitio — `/admin/configuracion` (solo ADMIN)
- Contacto: WhatsApp, teléfono, email, dirección, link de Maps, redes.
- Horarios (editor visual por día).
- Barra de aviso superior (texto + activa).
- Slides del hero de Inicio (imagen, título, bajada, botón y link).

### 9. Usuarios — `/admin/usuarios` (solo ADMIN)
- Alta, baja, rol, reseteo de contraseña.

## Requisitos generales
- Responsive: se tiene que poder actualizar precio y stock desde el celular.
- Feedback claro: toasts de "Guardado", errores en lenguaje simple.
- Toda acción destructiva pide confirmación.
- Cada guardado revalida las páginas públicas afectadas (ver `02-arquitectura.md`).
- **Carga inicial:** importación de productos desde **CSV/Excel** (P2), muy útil si el local ya tiene una planilla.

## Criterios de aceptación
- [ ] Sin sesión, cualquier ruta `/admin/*` redirige al login.
- [ ] Un EDITOR no ve Usuarios ni Configuración, y la API se lo impide aunque intente acceder.
- [ ] Cambiar un precio en la tabla se refleja en el sitio público en menos de un minuto.
- [ ] Subir 5 imágenes a la vez funciona y quedan en el orden elegido.
- [ ] El aumento masivo muestra la vista previa y no aplica nada sin confirmación.
