# Página: Carrito y pedido por WhatsApp

**Ruta:** `/carrito` (+ mini carrito lateral) · **Prioridad:** P1

## Objetivo

Que el cliente arme su pedido y lo **envíe por WhatsApp con un solo clic**, con toda la información para que el local responda sin repreguntar.

**[DECISIÓN]** No hay pago online. El pedido es una **solicitud**: el local confirma stock, precio final, medio de pago y envío por WhatsApp.

## Funcionamiento

1. El carrito vive en el navegador (Zustand + `localStorage`) y persiste aunque se cierre la pestaña.
2. Al agregar un producto se abre un **mini carrito lateral** (drawer) con el resumen y los botones `Ver carrito` y `Pedir por WhatsApp`.
3. En `/carrito` el cliente revisa, ajusta cantidades y completa sus datos.
4. Al tocar **Enviar pedido por WhatsApp** se arma el mensaje y se abre `wa.me`.
5. Al volver al sitio se muestra la pregunta "¿Pudiste enviar el pedido?", con la opción de vaciar el carrito.

## Estructura de `/carrito`

### 1. Lista de productos
Por cada ítem: imagen, nombre, variante, precio unitario, selector de cantidad, subtotal y botón eliminar.

### 2. Datos del pedido (formulario corto)
| Campo | Obligatorio | Notas |
| --- | --- | --- |
| Nombre | Sí | |
| Entrega | Sí | Radio: **Retiro en el local** / **Envío** |
| Localidad y provincia | Si elige envío | Para cotizar |
| Comentario | No | "¿Lo tienen en rojo?" |

> No se pide teléfono: el local ya lo ve en WhatsApp.

### 3. Resumen
- Subtotal estimado.
- Texto: "Los precios y el stock se confirman por WhatsApp. El envío se cotiza aparte."
- Si hay productos con "Consultar precio", el total dice "Total estimado + productos a consultar".
- Botón grande: **Enviar pedido por WhatsApp** (verde).
- Link secundario: "Seguir comprando".

### 4. Carrito vacío
`EmptyState` con "Tu carrito está vacío" + `Ir al catálogo`.

## Plantilla del mensaje

```
¡Hola Ciclismo Zonal! 👋 Quiero hacer este pedido:

1) Scott Aspect 960 — Talle M × 1 — $ 1.250.000
2) Casco Leader Pro — Negro × 1 — $ 85.000
3) Cubierta Teknial 29x2.2 × 2 — Consultar precio

Total estimado: $ 1.335.000 (+ productos a consultar)

Nombre: Juan Pérez
Entrega: Envío a General Pico, La Pampa
Comentario: ¿Tienen el casco en rojo?
```

Implementación (`lib/whatsapp.ts`):
- `armarMensajePedido(items, datos): string`
- `linkWhatsApp(numero, mensaje): string` → `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
- El número sale de la configuración del sitio (o de `NEXT_PUBLIC_WHATSAPP_NUMBER`).
- Contemplar el límite práctico de largo de URL: si el mensaje es muy largo, se acorta, por ejemplo sin links.

## Medición
- Registrar el evento `pedido_whatsapp` (cantidad de ítems, total estimado) en analítica, sin datos personales.

## Mejora futura (fuera de alcance)
- Guardar el pedido en el backend antes de abrir WhatsApp, con un número de pedido para el seguimiento del local.
- Pago online con Mercado Pago.

## Criterios de aceptación
- [ ] El carrito persiste al recargar y al cerrar la pestaña.
- [ ] No se puede enviar sin nombre ni modalidad de entrega.
- [ ] El mensaje abre correctamente en WhatsApp mobile y WhatsApp Web, con tildes y emojis bien.
- [ ] Los precios del carrito se actualizan si cambiaron en el backend (se revalidan al abrir `/carrito`).
- [ ] Un producto que pasó a sin stock se marca y no entra en el mensaje.
