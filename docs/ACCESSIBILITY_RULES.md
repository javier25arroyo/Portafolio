# Accessibility Rules

## Objetivo

El portafolio debe apuntar a WCAG 2.2 AA.

## Reglas obligatorias

### Semántica
- Usar `header`, `nav`, `main`, `section`, `footer`.
- Un solo `h1` por página.
- Orden lógico de headings.
- Links para navegación.
- Buttons para acciones.

### Teclado
Todo elemento interactivo debe poder usarse con teclado:
- navbar
- carrusel
- botones
- links
- filtros
- tecnologías
- formularios

### Foco
Usar foco visible:

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  box-shadow: 0 0 0 4px rgba(111,214,245,0.18);
}
```

### Contraste
- Texto normal: mínimo 4.5:1.
- Texto grande: mínimo 3:1.
- Controles e indicadores deben ser visibles.

### Motion
Respetar `prefers-reduced-motion`.

Cuando esté activo:
- reducir reveals
- quitar desplazamientos
- mantener contenido visible
- evitar constelaciones animadas complejas

### Carrusel
- Sin autoplay por defecto.
- Controles visibles.
- Soporte para teclado.
- No depender solo de swipe.
- Estado actual claro.
- Botones con nombre accesible.

### Logos
- Cada tecnología debe tener nombre accesible.
- Los logos decorativos pueden ser `aria-hidden`.
- El nombre textual debe existir o estar disponible para lectores de pantalla.

### Formularios
- Labels visibles.
- No usar placeholder como único label.
- Errores textuales y no solo color.
- Asociar errores con el input cuando aplique.

## Prohibiciones
- Ocultar foco.
- Usar hover como única interacción.
- Texto con bajo contraste.
- Animaciones que impidan lectura.
- Componentes interactivos sin nombre accesible.
