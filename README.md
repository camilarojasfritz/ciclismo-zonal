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
└── demo/                # Fotos PROVISORIAS (ver nota abajo)
src/
├── app/
│   ├── layout.tsx       # Menú lateral + barra de aviso + footer, fuentes
│   ├── page.tsx         # Inicio (/)
│   ├── globals.css      # Colores, tipografías y degradés (tokens de Tailwind)
│   └── not-found.tsx    # Página 404
├── components/
│   ├── Sidebar.tsx      # Menú lateral
│   ├── Footer.tsx
│   ├── ui.tsx           # Boton, Eyebrow, Wordmark
│   └── home/            # Secciones de la home
├── data/                # Productos y servicios de EJEMPLO
└── lib/
    ├── site.ts          # Datos del local (dirección, horarios, WhatsApp)
    └── whatsapp.ts      # Links y mensajes de WhatsApp
```

## Pendiente antes de publicar

- **Fotos de `public/demo/`:** son imágenes de Scott en baja resolución, usadas solo para maquetar. Hay que reemplazarlas por las oficiales que el local pueda usar como distribuidor.
- **Logo:** `public/logo.png` es una captura ampliada; falta el archivo original en buena calidad.
- **Precios, modelos y servicios:** son de ejemplo (`src/data/`).
- **Horarios y WhatsApp:** tomados del sitio anterior, sin confirmar (`src/lib/site.ts`).

## Deploy

Cada push a `main` se despliega automáticamente en Vercel.
Los push a otras ramas generan una URL de preview.
