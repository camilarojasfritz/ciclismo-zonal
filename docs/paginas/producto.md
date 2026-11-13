# Página: Ficha de producto

**Ruta:** `/producto/[slug]` · **Prioridad:** P1

## Objetivo

Dar **toda la información para decidir** y facilitar el siguiente paso: **agregar al carrito** o **consultar por WhatsApp**.

## Estructura

### 1. Breadcrumbs
Inicio / Catálogo / Bicicletas / Mountain Bike / Scott Aspect 960

### 2. Bloque principal (dos columnas en desktop, apilado en mobile)

**Izquierda — Galería**
- Imagen principal grande, con zoom al pasar el mouse en desktop y pinch en mobile.
- Miniaturas debajo (o al costado); swipe en mobile.
- Lightbox a pantalla completa al hacer clic.

**Derecha — Información y compra**
1. Marca (link a `/catalogo?marca=...`).
2. **Nombre** (H1, Oswald).
3. Badges: Nuevo · Oferta · Últimas unidades.
4. **Precio** grande. Si hay oferta, el precio anterior tachado y "-15 %". Si `precio = null`: "Consultar precio".
5. **[SUPUESTO]** Texto de financiación: "Consultá cuotas y medios de pago" (confirmar con el negocio).
6. **Selector de variante** (talle, rodado o color) como botones; las variantes sin stock se ven tachadas y deshabilitadas.
7. **Guía de talles** (link que abre un modal) en bicicletas e indumentaria — P2.
8. **Cantidad** (− 1 +).
9. **Botones:**
   - `Agregar al carrito` (primario, rojo).
   - `Consultar por WhatsApp` (verde). El mensaje incluye producto, variante y link.
   - Si no hay stock: solo `Consultar disponibilidad` (WhatsApp).
10. Estado de stock: "● Disponible", "● Últimas unidades", "● A pedido".
11. Info rápida con íconos: envíos a todo el país · retiro en el local · garantía oficial **[validar]**.

### 3. Pestañas o acordeones
- **Descripción**: texto enriquecido.
- **Especificaciones**: tabla agrupada (Cuadro, Transmisión, Frenos, Ruedas...).
- **Envíos y retiro**: cómo funciona el envío (coordinado por WhatsApp), retiro en Alvear 216.
- **Armado y service**: P2. Por ejemplo, si la bici se entrega armada y con un primer service bonificado **[PENDIENTE]**.

### 4. Productos relacionados
- "También te puede interesar": 4 productos de la misma categoría.

### 5. Barra fija en mobile
- Al hacer scroll, una barra inferior fija con precio + `Agregar` + ícono de WhatsApp.

## Mensaje de WhatsApp (consulta directa)

```
¡Hola Ciclismo Zonal! Quería consultar por este producto:
• Scott Aspect 960 — Talle M
https://<dominio>/producto/scott-aspect-960
```

## SEO
- `title`: "{Nombre} | {Marca} | Ciclismo Zonal"
- `description`: primeros 155 caracteres de la descripción.
- Open Graph con la imagen principal (se ve bien al compartir por WhatsApp e Instagram).
- Datos estructurados **`Product`** con `offers` (precio, `priceCurrency: ARS`, `availability`) y `brand`.

## Criterios de aceptación
- [ ] No se puede agregar al carrito sin elegir variante, si el producto tiene variantes.
- [ ] Agregar muestra un toast y actualiza el contador del carrito.
- [ ] El link de WhatsApp lleva el mensaje con producto, variante y URL.
- [ ] Un slug inexistente devuelve 404.
- [ ] Compartir la URL por WhatsApp muestra la imagen y el nombre (Open Graph).
