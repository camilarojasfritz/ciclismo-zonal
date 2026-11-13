# Documentación — Sitio web Ciclismo Zonal

Documentación funcional y técnica para construir el nuevo sitio web de **Ciclismo Zonal Bike Store** (Marcelo T. de Alvear 216, Santa Rosa, La Pampa).

> Referencia de partida: el sitio actual [ciclismozonal.com.ar](https://ciclismozonal.com.ar/). Lo tomamos como **guía de estructura**, con el objetivo de hacerlo **más estético, deportivo y elegante**.

## Índice

### Generales
| Archivo | Contenido |
| --- | --- |
| [00-vision-general.md](./00-vision-general.md) | Objetivo, alcance, públicos, decisiones y supuestos |
| [01-identidad-visual.md](./01-identidad-visual.md) | Paleta, tipografías, logo, estilo de fotos y componentes |
| [02-arquitectura.md](./02-arquitectura.md) | Stack (Next.js + Nest.js), estructura, deploy |
| [03-modelo-de-datos.md](./03-modelo-de-datos.md) | Entidades, atributos y relaciones |
| [04-api.md](./04-api.md) | Endpoints del backend (Nest.js) |
| [05-navegacion-y-componentes.md](./05-navegacion-y-componentes.md) | Mapa del sitio, header, footer y componentes comunes |
| [06-seo-rendimiento-accesibilidad.md](./06-seo-rendimiento-accesibilidad.md) | Requisitos no funcionales |
| [07-roadmap.md](./07-roadmap.md) | Fases y orden de trabajo |
| [08-pendientes-a-confirmar.md](./08-pendientes-a-confirmar.md) | Datos y decisiones a validar con el negocio |

### Páginas
| Archivo | Ruta |
| --- | --- |
| [paginas/inicio.md](./paginas/inicio.md) | `/` |
| [paginas/quienes-somos.md](./paginas/quienes-somos.md) | `/quienes-somos` |
| [paginas/catalogo.md](./paginas/catalogo.md) | `/catalogo`, `/catalogo/[categoria]` |
| [paginas/producto.md](./paginas/producto.md) | `/producto/[slug]` |
| [paginas/carrito-y-pedido.md](./paginas/carrito-y-pedido.md) | `/carrito` |
| [paginas/taller.md](./paginas/taller.md) | `/taller` |
| [paginas/contacto.md](./paginas/contacto.md) | `/contacto` |
| [paginas/panel-admin.md](./paginas/panel-admin.md) | `/admin` |
| [paginas/legales-y-errores.md](./paginas/legales-y-errores.md) | `/terminos`, `/privacidad`, 404 |

## Convenciones de estos documentos

- **[DECISIÓN]**: algo ya definido.
- **[SUPUESTO]**: lo asumimos para avanzar; hay que confirmarlo (ver `08-pendientes-a-confirmar.md`).
- **Prioridad** de cada requisito: **P1** (imprescindible para lanzar), **P2** (importante, puede ir después), **P3** (deseable).
