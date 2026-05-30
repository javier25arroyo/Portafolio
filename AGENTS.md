# AGENTS.md

## Proyecto

Portafolio profesional de Javier Pérez Arroyo.

Este repositorio debe construirse con:
- Astro
- Tailwind CSS
- TypeScript
- React islands visibles para Hero, Proyectos y Tecnologías
- Anime.js para motion
- SVGL para logos de tecnologías
- Animate UI para componentes/islas React puntuales

## Identidad obligatoria

El resultado debe sentirse:

**premium + editorial + tecnológico + sobrio + humano + espacial implícito**

Debe comunicar:
1. Javier se ve premium y serio.
2. Javier domina IA y tecnología avanzada.
3. Javier se ve creativo y diferente.

Debe evitar:
- estética gamer
- neones agresivos
- clichés de IA
- animaciones juguetonas
- sensación de demo
- plantillas genéricas
- sobrecarga visual

## Paleta oficial

Usar solo estos tokens base salvo razón justificada:

```css
--bg-primary: #0A0E13;
--bg-secondary: #111826;
--bg-tertiary: #10233D;
--surface: #18212D;
--surface-hover: #1D2835;

--text-primary: #EEF3F8;
--text-secondary: #A9B4C2;
--text-muted: #7C8796;

--accent: #6FD6F5;
--accent-hover: #8EE2FB;
--accent-soft: rgba(111,214,245,0.10);

--silver: #B8C2CF;

--border: #263244;
--border-soft: rgba(184,194,207,0.12);
--border-accent: rgba(111,214,245,0.28);
```

## Tipografía

- Títulos: Sora
- Texto/UI: Inter

## Reglas de implementación

- Mantener la mayor parte del sitio estática y semántica.
- Usar React islands solo donde haya valor visual o interacción real.
- No agregar JavaScript innecesario.
- Usar datos tipados en `src/data`.
- Crear componentes pequeños y reutilizables.
- No escribir colores arbitrarios repetidos. Usar tokens.
- No crear componentes sin estados accesibles.

## React islands permitidas por defecto

- Hero
- ProjectsCarousel
- TechnologiesGrid

Cualquier otra isla React debe justificar su existencia.

## Accesibilidad obligatoria

Apuntar a WCAG 2.2 AA:
- HTML semántico
- contraste suficiente
- foco visible
- navegación por teclado
- skip link
- labels visibles
- reduced motion
- targets cómodos
- carruseles sin autoplay agresivo
- hover nunca como único canal de información

## Comandos esperados

Antes de entregar cambios, intentar ejecutar según disponibilidad del proyecto:

```bash
npm run lint
npm run build
```

Si algún comando no existe, reportarlo y no inventar resultados.

## Regla de honestidad

Si una decisión rompe accesibilidad, rendimiento o coherencia visual, detenerse y explicarlo antes de implementarla.
