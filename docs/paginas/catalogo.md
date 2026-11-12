# Página: Catálogo

**Rutas:** `/catalogo` (todo) · `/catalogo/[categoria]` (por categoría o subcategoría) · **Prioridad:** P1

## Objetivo

Que el visitante **encuentre rápido** lo que busca y llegue a la ficha o al carrito. Es la sección principal del sitio.

## Estructura

### 1. Encabezado de categoría
- `/catalogo`: título "Catálogo" + bajada.
- `/catalogo/[categoria]`: banner con la imagen de la categoría, nombre y descripción corta.
- `Breadcrumbs`: Inicio / Catálogo / Bicicletas / Mountain Bike.
- **Chips de subcategorías** debajo del título (p. ej. en Bicicletas: MTB · Ruta · Urbana · Infantil · E-bike).

### 2. Barra de herramientas
- Cantidad de resultados: "48 productos".
- **Ordenar por:** Destacados (default) · Menor precio · Mayor precio · Más nuevos · A–Z.
- Botón **Filtros** (en mobile abre un panel inferior; en desktop hay sidebar fija).

### 3. Filtros (sidebar en desktop)
| Filtro | Tipo | Notas |
| --- | --- | --- |
| Categoría | Árbol con checkboxes | Solo en `/catalogo` general |
| Marca | Checkboxes con contador | "Scott (12)" |
| Precio | Rango (mín.–máx.) | Inputs + slider |
| Disponibilidad | Toggle "Solo con stock" | Activo por defecto **[SUPUESTO]** |
| Talle / Rodado | Checkboxes | Solo si la categoría tiene variantes de ese tipo (P2) |

- Los filtros se reflejan en la **URL** (`?marca=scott&precioMax=500000`), así se pueden compartir y el botón Atrás funciona.
- "Limpiar filtros" visible cuando hay alguno activo.
- Los filtros activos se muestran como chips removibles.

### 4. Grilla de productos
- `ProductGrid` con `ProductCard`:
  - Imagen principal (hover: segunda imagen en desktop, P2).
  - Marca (label gris en mayúsculas).
  - Nombre (máx. 2 líneas).
  - Precio (o "Consultar precio"), con precio anterior tachado si hay oferta.
  - Badges: Nuevo · Oferta · Últimas unidades · Sin stock.
  - Botón rápido "Agregar" (si tiene variantes, lleva a la ficha).
- **Paginación** numérica de 24 por página (mejor para SEO que el scroll infinito), o "Cargar más" en mobile.
- Skeletons mientras carga.

### 5. Estados especiales
- **Sin resultados:** "No encontramos productos con esos filtros" + `Limpiar filtros` + `Consultanos por WhatsApp, quizás lo conseguimos`.
- **Categoría vacía:** mismo mensaje con el CTA a WhatsApp.

### 6. Búsqueda
- La búsqueda del header lleva a `/catalogo?q=<término>`.
- Título: "Resultados para 'casco'".
- Busca en nombre, marca, categoría y descripción; tolera tildes y mayúsculas.

## Datos
- `GET /productos` con filtros (ver `04-api.md`).
- `GET /categorias` para el árbol y los chips.
- `GET /marcas` para el filtro.

## SEO
- Cada categoría tiene URL, `title` y `description` propios: "Mountain Bike | Ciclismo Zonal — Bicicletas MTB en Santa Rosa".
- Las URLs con filtros llevan `canonical` a la categoría sin filtros.
- Datos estructurados `BreadcrumbList` e `ItemList`.

## Criterios de aceptación
- [ ] Filtrar por marca y precio actualiza la URL y los resultados sin recargar toda la página.
- [ ] Copiar y pegar la URL con filtros muestra los mismos resultados.
- [ ] Los productos sin stock no se pueden agregar al carrito.
- [ ] En mobile los filtros se abren en un panel y se aplican con "Ver X resultados".
- [ ] Con 300+ productos, la página responde en < 1 s.
