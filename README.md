# IMPLUVIUM ac — sitio institucional

Sitio web estático de una asociación civil dedicada al urbanismo, la arquitectura, la educación y la cultura. Tiene dos páginas principales, Inicio y Programa de restauración, además de la política de privacidad y los términos de uso.

Hecho con [Astro](https://astro.build), sin analytics, con la tipografía Encode Sans autoalojada y animaciones con [GSAP](https://gsap.com) que respetan `prefers-reduced-motion`.

## Cómo correrlo

Requiere Node.js 22.22 o superior.

```bash
npm install
npm run dev       # http://localhost:4321/
npm run build     # chequea tipos y genera dist/
npm run preview   # sirve dist/ en local
npm run verify    # revisa enlaces, imágenes y código sin uso, accesibilidad y SEO (requiere build y Chrome)
```

## Estructura

```
src/
├─ components/   # layout, sections, features (etapas) y ui
├─ data/         # textos y datos del sitio, separados del markup
├─ lib/          # SEO, rutas con base, formularios y animaciones (lib/motion)
├─ pages/        # index, programa-de-restauracion, politica-de-privacidad, terminos-de-uso, 404
└─ styles/       # tokens y estilos globales
```

- **Formularios:** son una maqueta. Validan y muestran un estado de éxito, pero no envían nada. Para conectar un servicio, ver `src/lib/form-config.ts` (único punto de configuración).

## Despliegue

El sitio se publica en GitHub Pages con GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`, siempre que pase `npm run verify`. El dominio es `impluvium.ar` y, junto con la ruta base, se define en `astro.config.mjs`; ambos pueden sobrescribirse con las variables `SITE_URL` y `BASE_PATH`.
