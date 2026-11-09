# IMPLUVIUM ac — sitio institucional

Sitio web estático de una asociación civil dedicada al urbanismo, la arquitectura, la educación y la cultura. Tiene dos páginas: Inicio y Programa de restauración.

Hecho con [Astro](https://astro.build), sin analytics, con la tipografía Encode Sans autoalojada y animaciones con [GSAP](https://gsap.com) que respetan `prefers-reduced-motion`.

## Cómo correrlo

Requiere Node.js 22.22 o superior.

```bash
npm install
npm run dev       # http://localhost:4321/impluvium/
npm run build     # chequea tipos y genera dist/
npm run preview   # sirve dist/ en local
```

## Estructura

```
src/
├─ components/   # layout, sections, features (rueda del municipio, etapas) y ui
├─ data/         # textos y datos del sitio, separados del markup
├─ lib/          # SEO, rutas con base, formularios y animaciones (lib/motion)
├─ pages/        # index, programa-de-restauracion, 404
└─ styles/       # tokens y estilos globales
```

- **Formularios:** son una maqueta. Validan y muestran un estado de éxito, pero no envían nada. Para conectar un servicio, ver `src/lib/form-config.ts` (único punto de configuración).

## Despliegue

El sitio se publica en GitHub Pages con GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`. La ruta base se define en `astro.config.mjs` (`/impluvium`) y puede sobrescribirse con las variables `SITE_URL` y `BASE_PATH`.
