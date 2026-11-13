# Página: Inicio

**Ruta:** `/` · **Prioridad:** P1

## Objetivo

En pocos segundos, transmitir **quiénes son** (bicicletería con taller Shimano en Santa Rosa), **qué ofrecen** y llevar al visitante al **catálogo**, al **taller** o a **WhatsApp**.

## Estructura (de arriba hacia abajo)

### 1. Hero — P1
- Foto o video a pantalla completa (≥ 80vh): el frente del local, alguien rodando o una bici destacada. Overlay oscuro.
- **Eyebrow:** `BIKE STORE · SANTA ROSA, LA PAMPA`
- **Título (Oswald, mayúsculas):** "Tu próxima aventura empieza acá" **[SUPUESTO, texto a validar]**
- **Bajada:** "Bicicletas, repuestos, indumentaria y taller oficial Shimano Service Center."
- **CTAs:** `Ver catálogo` (primario, rojo) · `Pedir turno en el taller` (secundario).
- Opcional P2: carrusel de 2–3 slides administrables desde el panel (`heroSlides`).

### 2. Franja de beneficios — P1
Cuatro ítems con ícono, en una fila (2×2 en mobile):

| Ícono | Título | Texto |
| --- | --- | --- |
| 🔧 | Shimano Service Center | Diagnóstico, mantenimiento y puesta a punto |
| 🚚 | Envíos a todo el país | Coordinamos por WhatsApp |
| 💬 | Asesoramiento | Te ayudamos a elegir talle y modelo |
| 💳 | Facilidades de pago | **[SUPUESTO]** Confirmar medios y cuotas |

### 3. Categorías destacadas — P1
- 4 tarjetas grandes con foto a sangre: **Bicicletas · Repuestos · Accesorios · Indumentaria**.
- Cada una lleva a `/catalogo/<categoria>`.
- Layout tipo mosaico: una grande y tres medianas en desktop.

### 4. Productos destacados — P1
- Título: "Destacados" con link "Ver todo el catálogo →".
- 8 productos con `destacado = true` (carrusel horizontal en mobile y grilla de 4 en desktop).
- Usa `ProductCard`.

### 5. Bloque Taller — P1
- Sección **oscura**, con foto del taller de un lado y texto del otro.
- Título: "Taller oficial Shimano Service Center".
- 3–4 servicios destacados con "desde $".
- CTAs: `Ver servicios y precios` · `Pedir turno` (WhatsApp en fase 1).

### 6. Marcas — P1
- `BrandStrip` con los logos: Scott, Orbea, Shimano, Titan, Leader, Teknial **[validar lista]**.
- Logos en escala de grises, a color al pasar el mouse.

### 7. Novedades / Instagram — P2
- Últimos posts de Instagram (embed o grilla de imágenes linkeadas al perfil).
- Alternativa simple: banner "Seguinos en @ciclismozonal".

### 8. Quiénes somos (teaser) — P2
- Foto del equipo o del local, dos líneas de historia y link a `/quienes-somos`.

### 9. Visitanos — P1
- Dirección, horarios con indicador "Abierto ahora" y mapa.
- CTAs: `Cómo llegar` (Google Maps) · `Escribinos por WhatsApp`.

## SEO
- `title`: "Ciclismo Zonal | Bicicletería y taller Shimano en Santa Rosa, La Pampa"
- `description`: "Bicicletas, repuestos, accesorios e indumentaria. Taller oficial Shimano Service Center. Envíos a todo el país. Alvear 216, Santa Rosa."
- Datos estructurados `BikeStore` / `LocalBusiness` (ver `06-seo-rendimiento-accesibilidad.md`).

## Criterios de aceptación
- [ ] El hero carga con la imagen optimizada (LCP < 2,5 s en 4G).
- [ ] Todos los CTAs llevan al destino correcto; los de WhatsApp abren `wa.me` con el mensaje armado.
- [ ] Los destacados salen del backend y se actualizan al editarlos en el panel.
- [ ] El indicador "Abierto ahora" usa la hora de Argentina.
- [ ] Se ve correcto en 375 px, 768 px y 1440 px.
