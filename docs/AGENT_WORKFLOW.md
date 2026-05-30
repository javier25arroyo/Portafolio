# Agent Workflow

## Objetivo

Organizar el trabajo del portafolio como un sistema de agentes especializados.

## Flujo recomendado

### 1. Descubrimiento
Agente principal:
- ChatGPT o Claude

Subagentes sugeridos:
- content-strategist
- portfolio-design-director

Salida:
- definición de sección
- intención visual
- contenido mínimo
- riesgos

### 2. Diseño
Subagentes:
- portfolio-design-director
- motion-interaction-designer
- accessibility-auditor

Salida:
- estructura visual
- tokens aplicados
- motion permitido
- checklist accesible

### 3. Implementación
Agente:
- Codex o Claude Code

Subagente:
- astro-frontend-architect

Salida:
- componentes Astro/React
- data tipada
- estilos Tailwind
- pruebas de build/lint

### 4. Revisión
Subagentes:
- accessibility-auditor
- qa-reviewer

Salida:
- bugs
- problemas de accesibilidad
- inconsistencias de diseño
- mejoras prioritarias

## Matriz de responsabilidad

| Área | Agente principal | Subagente/skill |
|---|---|---|
| Dirección visual | Claude/ChatGPT | portfolio-design-director |
| Implementación | Codex/Claude Code | astro-frontend-architect |
| Accesibilidad | Claude/ChatGPT | accessibility-auditor |
| Motion | Claude/ChatGPT/Codex | motion-interaction-designer |
| Copy | Claude/ChatGPT | content-strategist |
| Tecnologías | Claude/Codex | tech-stack-curator |
| QA final | Claude/Codex | qa-reviewer |
