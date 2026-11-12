# 01 — Identidad visual

Objetivo: un sitio **deportivo, elegante y con mucho contraste**, coherente con el frente del local y el logo. Que se sienta más cerca de una revista de ciclismo o de la web de una marca de bicis que de un catálogo genérico.

## 1. Referencias de la marca

Del frente del local (reel de Instagram de octubre de 2025) y del logo:

- **Logo:** "CiclismoZonal" en **letra script/manuscrita cursiva**, con "BIKE STORE" arriba en mayúsculas chicas y espaciadas, y un **pequeño emblema rojo** entre ambas líneas. Va en negro sobre blanco, dentro de un círculo.
- **Marquesina:** negra y gris grafito, con el logo de Scott.
- **Bandera vertical:** negra, con **"ALVEAR 216"** en una **sans serif condensada, alta y en negrita**, y el logo script debajo.
- Las vidrieras y el piso son oscuros; el color lo aportan las bicicletas.

## 2. Paleta

| Token | Uso | Valor sugerido |
| --- | --- | --- |
| `--color-negro` | Fondos principales, header, footer | `#0B0B0C` |
| `--color-grafito` | Fondos secundarios, tarjetas sobre negro | `#1C1D20` |
| `--color-gris` | Bordes, textos secundarios | `#6B6E75` |
| `--color-gris-claro` | Fondos claros de secciones | `#F2F2F3` |
| `--color-blanco` | Texto sobre oscuro, fondos claros | `#FFFFFF` |
| `--color-rojo` | **Único acento**: botones principales, precios, badges, detalles | `#D62828` *(ajustar al rojo exacto del emblema)* |
| `--color-rojo-hover` | Hover y activo del acento | `#B71F1F` |
| `--color-whatsapp` | Solo en botones de WhatsApp | `#25D366` |

Reglas:
- El rojo se usa **con moderación**: un elemento destacado por pantalla, como máximo dos.
- Contraste mínimo **WCAG AA** (4.5:1 para texto normal).
- El sitio alterna secciones **oscuras** (hero, taller, footer) y **claras** (catálogo, fichas) para dar ritmo y que los productos se lean bien.

## 3. Tipografías

| Rol | Fuente propuesta | Alternativas | Uso |
| --- | --- | --- | --- |
| Títulos / display | **Oswald** (600–700) | Bebas Neue, Barlow Condensed | H1–H3, hero, números grandes, labels en MAYÚSCULAS. Evoca el "ALVEAR 216" del frente. |
| Texto | **Inter** (400–600) | Barlow | Párrafos, UI, formularios, precios. |
| Logo | **Imagen** (SVG o PNG) | — | El script del logo **no se recrea con una fuente**: se usa el archivo original. |

- Cargar con `next/font/google` (autohosteadas, sin layout shift).
- **[SUPUESTO]** Son equivalentes visuales; si el diseñador de la marca nos pasa las fuentes originales, las reemplazamos (ver `08-pendientes-a-confirmar.md`).

### Escala tipográfica (desktop / mobile)

| Estilo | Fuente | Tamaño | Peso | Extra |
| --- | --- | --- | --- | --- |
| Display (hero) | Oswald | 72 / 44 px | 700 | MAYÚSCULAS, tracking -0.01em |
| H1 | Oswald | 48 / 34 px | 700 | MAYÚSCULAS |
| H2 | Oswald | 36 / 28 px | 600 | MAYÚSCULAS |
| H3 | Oswald | 24 / 20 px | 600 | |
| Eyebrow / label | Inter | 12 px | 600 | MAYÚSCULAS, tracking 0.15em, color rojo o gris |
| Body | Inter | 16 px | 400 | line-height 1.6 |
| Small | Inter | 14 px | 400 | |
| Precio | Inter | 20–28 px | 700 | `font-variant-numeric: tabular-nums` |

## 4. Fotografía e imágenes

- **Fotos grandes y a sangre** en el hero y en los banners de categoría.
- Preferir **fotos reales del local, del taller y de clientes rodando** antes que fotos de stock.
- Productos sobre **fondo blanco o gris muy claro**, encuadre consistente (bici de perfil, mirando a la derecha).
- Overlay oscuro (negro al 40–60 %) cuando haya texto sobre foto.
- Formatos: WebP/AVIF vía `next/image`.

## 5. Estilo de componentes

| Elemento | Estilo |
| --- | --- |
| Bordes | Rectos o con radio chico (4 px). Nada muy redondeado: transmite precisión técnica. |
| Botón primario | Fondo rojo, texto blanco, MAYÚSCULAS, Oswald o Inter 600, padding generoso. |
| Botón secundario | Borde blanco o negro de 1 px, fondo transparente. |
| Botón WhatsApp | Verde WhatsApp con ícono; solo para acciones de WhatsApp. |
| Tarjetas de producto | Fondo blanco, imagen grande, marca en label gris, nombre, precio en rojo o negro. Hover: leve zoom de la imagen y sombra. |
| Líneas y detalles | Líneas diagonales o "speed lines" sutiles como recurso gráfico deportivo, sin abusar. |
| Íconos | Lucide (trazo fino, coherente). |
| Animaciones | Sutiles: fade/slide al hacer scroll, transiciones de 150–250 ms. Respetar `prefers-reduced-motion`. |

## 6. Tono de los textos

- **Cercano y apasionado, pero profesional**: "Un lugar atendido por amantes del ciclismo".
- Tuteo/voseo rioplatense ("Vení a conocernos", "Consultanos").
- Frases cortas y directas en títulos; nada de relleno.

## 7. Implementación (Tailwind v4)

Definir los tokens en `src/app/globals.css` con `@theme`, por ejemplo:

```css
@theme {
  --color-negro: #0b0b0c;
  --color-grafito: #1c1d20;
  --color-rojo: #d62828;
  --font-display: var(--font-oswald);
  --font-sans: var(--font-inter);
}
```

Así quedan disponibles clases como `bg-negro`, `text-rojo` y `font-display`.
