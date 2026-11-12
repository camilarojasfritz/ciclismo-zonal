# 06 — SEO, rendimiento y accesibilidad

## 1. SEO

### SEO local (lo más importante para una bicicletería)
- **Google Business Profile** del local actualizado, con el link al nuevo sitio. Nombre, dirección y teléfono (NAP) **idénticos** en el sitio, Google, Instagram y Facebook.
- Palabras clave objetivo: "bicicletería Santa Rosa", "bicicletas La Pampa", "taller de bicicletas Santa Rosa", "service bicicleta Shimano La Pampa", "Scott Santa Rosa", "repuestos bicicleta Santa Rosa".
- Mencionar "Santa Rosa, La Pampa" de forma natural en títulos y textos clave.

### Datos estructurados (JSON-LD)
| Página | Schema |
| --- | --- |
| Todas (layout) | `BikeStore` (subtipo de `LocalBusiness`): nombre, dirección, geo, teléfono, horarios (`openingHoursSpecification`), redes (`sameAs`), logo |
| Catálogo | `BreadcrumbList`, `ItemList` |
| Producto | `Product` + `Offer` (precio, `ARS`, `availability`) + `Brand` |
| Taller | `Service`, `FAQPage` |

### Técnico
- `metadata` y `generateMetadata` de Next.js en cada página (title, description, canonical, Open Graph, Twitter).
- `sitemap.ts` dinámico (incluye productos y categorías) y `robots.ts` (bloquea `/admin` y `/carrito`).
- URLs limpias en español: `/catalogo/mountain-bike`, `/producto/scott-aspect-960`.
- Imagen Open Graph por defecto con el logo y la foto del local; en productos, la imagen del producto.
- Redirecciones 301 desde las URLs del sitio actual, si estaban indexadas **[PENDIENTE: relevar URLs actuales]**.

## 2. Rendimiento

Objetivos (Core Web Vitals, mobile 4G):

| Métrica | Objetivo |
| --- | --- |
| LCP | < 2,5 s |
| INP | < 200 ms |
| CLS | < 0,1 |
| Lighthouse Performance | ≥ 90 |

Prácticas:
- `next/image` siempre: tamaños responsive, WebP/AVIF, `priority` solo en la imagen del hero.
- `next/font` para Oswald e Inter (sin saltos de layout).
- ISR y caché para catálogo y fichas (ver `02-arquitectura.md`).
- Server Components por defecto; Client Components solo donde haya interacción (carrito, filtros, galería).
- Mapas, embeds de Instagram y videos con lazy load.
- Video del hero: MP4/WebM liviano (< 3 MB), `muted autoplay playsinline`, con poster.

## 3. Accesibilidad (WCAG 2.1 AA)

- Contraste ≥ 4.5:1 en texto (ojo con gris sobre negro y blanco sobre rojo).
- Todo usable con teclado: foco visible (anillo rojo o blanco), orden lógico, menús y modales con trampa de foco y cierre con `Esc`.
- `alt` en todas las imágenes de producto (obligatorio en el panel).
- Formularios con `<label>`, mensajes de error asociados (`aria-describedby`) y sin depender solo del color.
- Jerarquía de headings correcta (un solo H1 por página).
- `lang="es"` en `<html>`.
- Respetar `prefers-reduced-motion` en animaciones y carruseles.
- Tamaño táctil mínimo de 44×44 px en mobile.
- Los íconos que son botones tienen `aria-label` ("Abrir carrito", "Buscar").

## 4. Analítica y medición

Eventos a registrar (sin datos personales):

| Evento | Cuándo |
| --- | --- |
| `click_whatsapp` | Cualquier botón de WhatsApp (con `origen`: header, flotante, producto, taller, contacto) |
| `agregar_carrito` | Producto agregado |
| `pedido_whatsapp` | Envío del pedido desde el carrito |
| `turno_whatsapp` / `turno_creado` | Solicitud de turno (fase 1 / fase 2) |
| `busqueda` | Término buscado (para saber qué buscan y no encuentran) |

- Banner de cookies solo si se usa analítica con cookies (GA4). Vercel Analytics no usa cookies.

## 5. Calidad de código y pruebas

- ESLint + Prettier; TypeScript en modo `strict`.
- **Frontend:** tests de componentes clave (carrito, armado de mensajes de WhatsApp) con Vitest + Testing Library; un flujo E2E con Playwright (catálogo → producto → carrito → link de WhatsApp).
- **Backend:** tests unitarios de servicios (cupos de turnos, aumento masivo de precios) y e2e de endpoints con Jest + Supertest.
- CI con GitHub Actions: lint, typecheck, tests y build en cada PR.
