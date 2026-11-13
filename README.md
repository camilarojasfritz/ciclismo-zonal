# Ciclismo Zonal

Sitio web de **Ciclismo Zonal**, bicicletería y taller Shimano Service Center de Santa Rosa, La Pampa.

Hecho con **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**, desplegado en **Vercel**.

## Cómo correrlo en tu compu

```bash
npm install      # solo la primera vez (o cuando cambien las dependencias)
npm run dev      # levanta el sitio en http://localhost:3000
```

## Scripts

| Comando         | Qué hace                                  |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con recarga en vivo |
| `npm run build` | Genera la versión de producción           |
| `npm run start` | Sirve la versión de producción            |
| `npm run lint`  | Revisa el código con ESLint               |

## Estructura

```
public/
├── logo.png             # Logo del local
├── local/               # Fotos del local
└── demo/                # Fotos PROVISORIAS (ver nota abajo)
src/
├── app/
│   ├── layout.tsx                  # Menú lateral + barra de aviso + footer, fuentes
│   ├── page.tsx                    # Inicio (/)
│   ├── catalogo/[categoria]/       # /catalogo/bicicletas, /repuestos, /accesorios, /indumentaria
│   ├── buscar/                     # /buscar: buscador de productos
│   ├── carrito/                    # /carrito: pedido completo que se envía por WhatsApp
│   ├── taller/                     # /taller: servicios, pasos, pedido de turno y preguntas
│   ├── globals.css                 # Colores y tipografías (tokens de Tailwind)
│   └── not-found.tsx               # Página 404
├── components/
│   ├── Sidebar.tsx, NavLinks.tsx   # Menú lateral
│   ├── Footer.tsx
│   ├── ProductCard.tsx             # Tarjeta de producto
│   ├── ui.tsx                      # Boton, Eyebrow, Wordmark
│   ├── home/                       # Secciones de la home
│   ├── catalogo/Catalogo.tsx       # Pestañas, filtros y grilla
│   └── taller/Turno.tsx            # Formulario de turno que arma el mensaje de WhatsApp
├── data/
│   ├── catalogo.ts                 # Categorías y productos de EJEMPLO
│   └── taller.ts                   # Servicios de EJEMPLO
└── lib/
    ├── site.ts                     # Datos del local (dirección, horarios, WhatsApp)
    ├── buscar.ts                   # Búsqueda sobre el catálogo
    ├── carrito.ts                  # Carrito guardado en el navegador (localStorage)
    └── whatsapp.ts                 # Links y mensajes de WhatsApp
```

## Pendiente antes de publicar

- **Fotos de `public/demo/`:** son imágenes de Scott en baja resolución, usadas solo para maquetar. Hay que reemplazarlas por las oficiales que el local pueda usar como distribuidor.
- **Fotos de `public/taller/`:** no son del local y no se conoce su licencia. Hay que confirmar que se pueden usar o cambiarlas por fotos del taller real.
- **Taller:** los cuatro servicios y sus precios son los que pasó el local. Falta qué incluye cada uno, las demoras y las respuestas de las preguntas frecuentes (`src/data/taller.ts`).
- **Logo:** `public/logo.png` es una captura ampliada; falta el archivo original en buena calidad.
- **Precios, productos y servicios:** son de ejemplo (`src/data/`). Los productos salen del catálogo internacional de Scott y Syncros, no del stock del local.
- **Filtros del catálogo:** funcionan las pestañas, la marca y el orden. Precio, stock y los filtros propios de cada categoría están dibujados pero todavía no filtran.
- **Horarios:** tomados del sitio anterior, sin confirmar (`src/lib/site.ts`). El WhatsApp sí está confirmado.

## Deploy

Cada push a `main` se despliega automáticamente en Vercel.
Los push a otras ramas generan una URL de preview.
