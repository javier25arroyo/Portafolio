# Portfolio Task Backlog

## Fase 0: Preparación

- [ ] Copiar `AGENTS.md` al root del repositorio.
- [ ] Copiar `CLAUDE.md` al root del repositorio.
- [ ] Copiar `.claude/agents/`.
- [ ] Copiar `.claude/skills/`.
- [ ] Confirmar stack: Astro + Tailwind + TypeScript.
- [ ] Confirmar si Tailwind es v3 o v4.
- [ ] Instalar React integration en Astro si no existe.
- [ ] Instalar Anime.js.
- [ ] Definir estrategia de Animate UI.
- [ ] Definir fuente de logos SVGL/local SVG.

## Fase 1: Design foundation

- [ ] Crear `src/styles/tokens.css`.
- [ ] Crear `src/styles/global.css`.
- [ ] Crear `src/styles/accessibility.css`.
- [ ] Crear `src/styles/motion.css`.
- [ ] Configurar fuentes Sora + Inter.
- [ ] Crear tokens de color, spacing, radius, shadows y motion.
- [ ] Crear skip link.
- [ ] Definir focus visible global.

## Fase 2: Componentes base

- [ ] Crear `Container.astro`.
- [ ] Crear `Section.astro`.
- [ ] Crear `SectionHeading.astro`.
- [ ] Crear `Button.astro`.
- [ ] Crear `Badge.astro`.
- [ ] Crear `Card.astro`.
- [ ] Crear `Footer.astro`.
- [ ] Crear `Navbar.astro`.

## Fase 3: Data model

- [ ] Crear `src/data/projects.ts`.
- [ ] Crear `src/data/technologies.ts`.
- [ ] Crear `src/data/softSkills.ts`.
- [ ] Crear `src/data/navigation.ts`.
- [ ] Tipar interfaces TypeScript.

## Fase 4: React islands

### Hero island
- [ ] Crear `HeroIsland.tsx`.
- [ ] Diseñar constelación abstracta orgánica.
- [ ] Implementar entrada elegante con Anime.js.
- [ ] Agregar reduced-motion fallback.
- [ ] Agregar card secundaria asociada a software.

### Projects island
- [ ] Crear `ProjectsCarousel.tsx`.
- [ ] Mostrar 3 proyectos por vista en desktop.
- [ ] Agregar controles visibles.
- [ ] Agregar navegación por teclado.
- [ ] Desactivar autoplay.
- [ ] Crear ProjectCard con fondo abstracto + texto.

### Technologies island
- [ ] Crear `TechnologiesGrid.tsx`.
- [ ] Agrupar por categorías.
- [ ] Mostrar todos los logos.
- [ ] Monocromo por defecto.
- [ ] Hover con color original + cian sutil.
- [ ] Asegurar nombres accesibles.

## Fase 5: Secciones Astro

- [ ] Crear `About.astro`.
- [ ] Crear `ValueProposition.astro`.
- [ ] Crear `AIAdvantage.astro`.
- [ ] Crear `SoftSkills.astro`.
- [ ] Crear `Contact.astro`.

## Fase 6: Accesibilidad

- [ ] Revisar navegación por teclado completa.
- [ ] Validar foco visible.
- [ ] Validar contraste.
- [ ] Validar reduced motion.
- [ ] Validar carrusel sin autoplay.
- [ ] Validar nombres accesibles.
- [ ] Validar headings.
- [ ] Validar mobile targets.

## Fase 7: QA

- [ ] Ejecutar `npm run lint`.
- [ ] Ejecutar `npm run build`.
- [ ] Revisar Lighthouse.
- [ ] Revisar axe DevTools.
- [ ] Revisar mobile.
- [ ] Revisar contenido final.
- [ ] Revisar que no parezca demo/plantilla.
