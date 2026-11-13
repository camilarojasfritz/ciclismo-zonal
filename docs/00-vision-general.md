# 00 — Visión general

## 1. Contexto

**Ciclismo Zonal Bike Store** es una bicicletería de Santa Rosa, La Pampa (Marcelo T. de Alvear 216). Vende bicicletas, repuestos, accesorios e indumentaria, y tiene taller propio como **Shimano Service Center**.

Hoy tiene un sitio ([ciclismozonal.com.ar](https://ciclismozonal.com.ar/)) con tienda, taller y pedidos por WhatsApp, pero está incompleto: el catálogo no carga y los precios y el stock son de demo. El nuevo sitio lo reemplaza.

## 2. Objetivo

Construir un sitio que:

1. **Muestre el catálogo real** con precios y stock actualizados por el propio negocio.
2. **Convierta visitas en pedidos y consultas por WhatsApp**, el canal de venta que ya usa el local.
3. **Posicione al taller** (Shimano Service Center) y facilite pedir turnos.
4. **Transmita la identidad de la marca**: deportiva, elegante y coherente con el frente del local.
5. **Aparezca bien en Google** en búsquedas locales ("bicicletería Santa Rosa", "service bicicletas La Pampa").

## 3. Públicos

| Público | Qué busca | Qué le damos |
| --- | --- | --- |
| Ciclista que quiere comprar bici | Modelos, precios, talles, asesoramiento | Catálogo con filtros, ficha completa, botón de consulta |
| Ciclista habitual | Repuestos, accesorios, indumentaria | Búsqueda rápida, categorías, stock visible |
| Dueño de bici con problemas | Service, reparación, precios, turno | Página de taller con servicios, precios y turnos |
| Cliente de otra localidad | Saber si envían y cómo | Info de envíos a todo el país vía WhatsApp |
| Personal del local (admin) | Cargar productos, precios, stock, turnos | Panel de administración |

## 4. Alcance

### Incluido
- Sitio público: Inicio, Quiénes somos, Catálogo, Ficha de producto, Carrito y pedido por WhatsApp, Taller, Contacto, legales y 404.
- **Backend propio (Nest.js)** con base de datos y **panel de administración** para productos, categorías, marcas, servicios del taller, turnos y contenido básico.
- Taller **fase 1**: solicitud de turno armada desde un formulario y enviada por WhatsApp.
- Taller **fase 2**: turnero online con agenda y cupos.

### Fuera de alcance (por ahora)
- Pago online (Mercado Pago). Queda previsto como mejora futura (ver `07-roadmap.md`).
- Cuentas de clientes, login de compradores e historial de pedidos.
- Cálculo automático de envíos.
- Blog o noticias. Queda como P3.

## 5. Decisiones tomadas

| # | Decisión | Motivo |
| --- | --- | --- |
| D1 | **[DECISIÓN]** Las compras se cierran **por WhatsApp**: el carrito arma el mensaje con los productos. | Es como vende hoy el local; no hace falta integrar pagos ni logística. |
| D2 | **[DECISIÓN]** **Frontend en Next.js** (App Router + TypeScript + Tailwind), desplegado en **Vercel**. | Stack conocido por quien desarrolla; Vercel es nativo para Next.js. |
| D3 | **[DECISIÓN]** **Backend en Nest.js** con base de datos relacional y panel de administración. | El negocio debe poder actualizar precios y stock sin tocar código. |
| D4 | **[DECISIÓN]** Taller en dos fases: primero WhatsApp, después turnero online. | Lanzar rápido y definir las reglas de la agenda con el taller antes de construirla. |
| D5 | **[DECISIÓN]** Es un proyecto para un **cliente real**: todo dato visible (precios, horarios, textos) se valida con el negocio. | Evitar publicar información incorrecta. |

## 6. Indicadores de éxito

- Clics en "Pedir por WhatsApp" y "Consultar" (desde carrito, producto y taller).
- Solicitudes de turno del taller.
- Visitas desde búsqueda orgánica local.
- Lighthouse ≥ 90 en Performance, Accesibilidad, Best Practices y SEO (ver `06-seo-rendimiento-accesibilidad.md`).
- Que el negocio actualice el catálogo sin pedir ayuda.
