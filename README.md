# Ciclismo Zonal

Sitio web de ciclismo de la zona: calendario de carreras, resultados y contacto.

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
src/
├── app/                 # Rutas (cada carpeta con page.tsx es una página)
│   ├── layout.tsx       # Layout general: navbar + footer
│   ├── page.tsx         # Inicio  (/)
│   ├── calendario/      # /calendario
│   ├── resultados/      # /resultados
│   ├── contacto/        # /contacto
│   └── not-found.tsx    # Página 404
├── components/          # Componentes reutilizables (Navbar, Footer)
└── data/                # Datos de ejemplo (eventos.ts)
```

## Deploy

Cada push a `main` se despliega automáticamente en Vercel.
Los push a otras ramas generan una URL de preview.
