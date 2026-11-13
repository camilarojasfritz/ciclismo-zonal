# Páginas: Legales y errores

**Prioridad:** P1 (404, términos) / P2 (privacidad extendida)

## `/terminos` — Términos y condiciones
Contenido mínimo **[PENDIENTE, redacción final validada por el negocio]**:
- Los precios publicados son de referencia y se confirman por WhatsApp al concretar la compra.
- Las imágenes son ilustrativas; los colores pueden variar.
- El stock está sujeto a disponibilidad.
- Condiciones de envío: a cargo del comprador y coordinadas por WhatsApp **[validar]**.
- Garantía: según el fabricante de cada producto.
- Cambios y devoluciones: plazo y condiciones **[PENDIENTE]**.
- Turnos del taller: política de cancelación (fase 2).
- Botón de arrepentimiento: si en el futuro hay venta online con pago, la normativa argentina exige un "Botón de arrepentimiento" visible. Con pedidos por WhatsApp sin pago en el sitio, conviene igual consultarlo con un asesor legal.

## `/privacidad` — Política de privacidad
- Qué datos se recolectan: los del formulario de turno (fase 2) y las cookies de analítica.
- Para qué se usan: solo para gestionar el turno o el pedido.
- No se venden ni se ceden a terceros.
- Derechos de acceso, rectificación y supresión (Ley 25.326 de Protección de Datos Personales).
- Contacto para ejercerlos.

> No reemplaza asesoramiento legal: es una base para que el negocio la revise.

## 404 — Página no encontrada
- Estilo de la marca: fondo oscuro, título grande en Oswald "404 · Te saliste del camino" (o similar).
- Buscador de productos + botones `Ir al inicio` y `Ver catálogo`.
- Devuelve el código HTTP 404 real (`not-found.tsx`).

## 500 — Error inesperado
- `error.tsx` con "Algo salió mal" + `Reintentar` + link a WhatsApp.
- Se registra el error (Vercel logs o Sentry, P2).

## Mantenimiento
- Si el backend no responde, las páginas estáticas siguen funcionando con los últimos datos (ISR) y el catálogo muestra el aviso "Estamos actualizando el catálogo, escribinos por WhatsApp".
