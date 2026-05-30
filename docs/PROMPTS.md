# Prompts para usar con Claude, ChatGPT y Codex

## Prompt maestro para Claude

Actúa como director de diseño, arquitecto UX/UI, frontend engineer senior y especialista en accesibilidad. Usa los documentos del proyecto para diseñar o implementar el portafolio profesional de Javier Pérez Arroyo.

Respeta:
- identidad premium, editorial, tecnológica, sobria y humana
- Astro + Tailwind + TypeScript
- React islands solo en Hero, Proyectos y Tecnologías
- Anime.js para motion
- SVGL para tecnologías
- Animate UI solo en piezas justificadas
- WCAG 2.2 AA

Antes de responder, indica:
1. objetivo
2. decisiones técnicas
3. accesibilidad
4. archivos afectados
5. riesgos

## Prompt para Codex

Lee `AGENTS.md` y trabaja solo dentro de las reglas del proyecto.

Tarea:
[Describe la tarea]

Requisitos:
- no rompas accesibilidad
- no agregues dependencias sin justificar
- usa tokens
- respeta Astro/React islands
- ejecuta build/lint si existen
- reporta comandos y resultados

## Prompt para revisión de accesibilidad

Usa el subagente `accessibility-auditor` o la skill `/accessibility-audit`.

Revisa:
- teclado
- foco
- contraste
- semántica
- carousel
- reduced motion
- nombres accesibles
- targets
- formularios

Entrega:
- problemas por severidad
- ubicación
- solución concreta

## Prompt para diseño visual

Usa el subagente `portfolio-design-director` o la skill `/portfolio-design-audit`.

Evalúa:
- si se ve premium
- si respeta tokens
- si tiene aire editorial
- si evita estética demo
- si el glow cian es sutil
- si la sección transmite confianza e innovación
