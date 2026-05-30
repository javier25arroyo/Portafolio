# Portafolio profesional de Javier Perez Arroyo

Landing page personal construida con Astro, Tailwind CSS y TypeScript. La interfaz combina una
base estatica y semantica con tres islas React visibles:

- `Hero`: composicion editorial y constelacion abstracta con motion sutil mediante Anime.js.
- `ProjectsCarousel`: carrusel controlado, sin autoplay y operable con teclado.
- `TechnologiesGrid`: grid filtrable de tecnologias con logos servidos por SVGL.

## Desarrollo local

Requiere Node.js `20.19.x`.

```bash
npm install
npm run dev
```

## Verificacion

```bash
npm run lint
npm run build
```

## Arquitectura

```text
src/
  components/
    islands/     # Islas React hidratadas con intencion
    layout/      # Navbar y footer estaticos
    sections/    # Secciones Astro semanticas
    ui/          # Primitivas reutilizables
  data/          # Contenido tipado
  layouts/       # Layout base y SEO
  pages/         # Rutas
  styles/        # Tokens, estilos globales, accesibilidad y motion
```

La direccion visual y las decisiones tecnicas viven en `docs/` y `AGENTS.md`.
