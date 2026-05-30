# IMPLEMENTATION_RULES_ASTRO.md

## Propósito

Este documento define las reglas de implementación para que una inteligencia artificial, desarrollador o asistente técnico construya el portafolio profesional de Javier Pérez Arroyo en **Astro + Tailwind CSS + TypeScript**, respetando el sistema visual, narrativo y de accesibilidad ya definido.

Este archivo tiene cuatro objetivos:

1. Traducir el sistema de diseño a decisiones de implementación.
2. Establecer una arquitectura coherente para Astro.
3. Convertir accesibilidad en reglas operativas concretas.
4. Evitar que una IA o desarrollador improvise soluciones inconsistentes.

Este documento debe usarse junto con:
- `PORTAFOLIO_MANUAL_DE_DISENO.md`
- `SISTEMA_PARA_IA_PORTAFOLIO.md`

Si hay contradicción entre una decisión improvisada y este documento, **este documento tiene prioridad para implementación técnica**.

---

# 1. Stack obligatorio

El proyecto debe construirse con:

- Astro
- Tailwind CSS
- TypeScript

## Reglas del stack
- Astro debe ser la base de estructura, layout y renderizado principal.
- Tailwind debe usarse como capa de construcción rápida de UI.
- TypeScript debe tipar props, data y estructuras reutilizables.
- CSS custom properties deben utilizarse para design tokens globales.

---

# 2. Filosofía técnica obligatoria

## 2.1 Principios
La implementación debe priorizar:
- rendimiento
- claridad
- semántica
- accesibilidad
- mantenibilidad
- reutilización
- baja complejidad innecesaria

## 2.2 Filosofía Astro
La mayor parte del portafolio debe ser:
- estática
- rápida
- semántica
- con mínimo JavaScript

Usar islas de Astro solo cuando exista una razón clara, como:
- menú móvil interactivo
- scroll reveal con observer
- tabs o accordions si realmente agregan valor
- tema o preferencias del usuario, si se implementan

## 2.3 Lo que debe evitarse
- JavaScript innecesario en todo el sitio
- dependencias visuales pesadas sin justificación
- animaciones complejas que perjudiquen rendimiento
- soluciones que solo funcionen con mouse
- componentes sin tipado o sin reutilización

---

# 3. Estructura recomendada del proyecto

```bash
src/
  components/
    ui/
      Button.astro
      Badge.astro
      Card.astro
      Container.astro
      Section.astro
      SectionHeading.astro
      Divider.astro
    layout/
      Navbar.astro
      Footer.astro
      SkipLink.astro
    sections/
      Hero.astro
      About.astro
      Projects.astro
      ValueProposition.astro
      AIAdvantage.astro
      SoftSkills.astro
      Contact.astro
    accessibility/
      FocusRing.astro
    icons/
      Icon.astro
  data/
    projects.ts
    softSkills.ts
    services.ts
    navigation.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
    tokens.css
    accessibility.css
    motion.css
  utils/
    classNames.ts
    seo.ts
```

## Reglas
- Los componentes de UI deben ser pequeños y reutilizables.
- Las secciones deben componer la landing.
- Los datos deben separarse en archivos `.ts`.
- Los estilos globales deben estar organizados por función, no mezclados sin estructura.

---

# 4. Tokens obligatorios

## 4.1 Los tokens deben existir como CSS variables

```css
:root {
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

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-pill: 999px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  --motion-fast: 180ms;
  --motion-base: 280ms;
  --motion-slow: 420ms;
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);

  --shadow-soft: 0 8px 30px rgba(0, 0, 0, 0.22);
  --shadow-elevated: 0 16px 40px rgba(0, 0, 0, 0.28);
  --shadow-accent: 0 0 0 1px rgba(111,214,245,0.18), 0 10px 30px rgba(111,214,245,0.08);
}
```

## 4.2 Reglas de uso
- Los colores no deben escribirse como valores arbitrarios una y otra vez.
- La IA o desarrollador debe reutilizar tokens.
- Los radios, espaciados y shadows deben derivar de tokens y no de decisiones aisladas.

---

# 5. Reglas de layout

## 5.1 Container
Debe existir un `Container.astro` o una utilidad equivalente con estas reglas:
- ancho máximo: 1200px
- padding lateral desktop: 32px
- padding lateral mobile: 20px
- centrado automático

## 5.2 Section
Cada sección debe usar:
- padding vertical consistente
- separación clara entre encabezado y contenido
- opcionalmente variantes de fondo

## 5.3 Width de lectura
El texto largo no debe ocupar todo el ancho del contenedor.
Debe existir una variante de ancho de lectura aproximado de 720px.

---

# 6. Reglas de semántica HTML

## 6.1 Estructura base
El layout principal debe usar:
- `header`
- `nav`
- `main`
- `section`
- `footer`

## 6.2 Headings
- Debe existir un solo `h1` por página.
- Las jerarquías deben seguir orden lógico.
- No saltar de `h2` a `h4` sin motivo.

## 6.3 Links y botones
- Usar `a` para navegación.
- Usar `button` para acciones.
- No usar `div` clickeables para funciones semánticas.

## 6.4 Formularios
- Todos los inputs deben tener label visible.
- El placeholder nunca sustituye al label.
- Los errores deben asociarse programáticamente cuando aplique.

---

# 7. Reglas de accesibilidad obligatoria

## 7.1 Objetivo mínimo
Todo el sitio debe diseñarse e implementarse apuntando a **WCAG 2.2 AA**.

## 7.2 Contraste
- texto normal mínimo: 4.5:1
- texto grande mínimo: 3:1
- elementos no textuales clave: contraste suficiente
- estados hover/focus deben seguir siendo visibles en dark mode

## 7.3 Focus visible
Todos los elementos interactivos deben tener un estilo de foco visible y consistente.

### Regla recomendada
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  box-shadow: 0 0 0 4px rgba(111,214,245,0.18);
}
```

## 7.4 Navegación por teclado
Todo debe ser navegable con teclado:
- navbar
- botones
- enlaces
- menú móvil
- formularios
- overlays
- elementos desplegables

## 7.5 Skip link
Debe existir un skip link al inicio para saltar al contenido principal.

Ejemplo:
```html
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>
```

## 7.6 Motion reducido
Debe soportarse `prefers-reduced-motion`.

### Reglas
- reducir o apagar animaciones decorativas
- evitar desplazamientos largos
- evitar efectos complejos
- mantener funcionalidad sin depender del motion

## 7.7 Transparencias y blur
- usar blur con moderación
- no reducir legibilidad
- cuando una capa translúcida dañe la lectura, debe simplificarse

## 7.8 Target size
Las interacciones importantes deben apuntar a al menos 44x44 px.

## 7.9 Hover no exclusivo
Nada importante puede depender solo de hover.
Debe existir alternativa visible y usable por teclado y táctil.

## 7.10 Contenido oculto
No ocultar información importante solo para hover.
No esconder navegación esencial en interacciones ambiguas.

## 7.11 Texto alternativo
- Imágenes informativas deben tener `alt` útil.
- Imágenes decorativas deben tener `alt=""`.
- Iconos decorativos deben ser `aria-hidden="true"`.

## 7.12 Estados y errores
- No usar solo color para indicar error o éxito.
- Añadir texto, ícono o mensaje asociado.
- El feedback debe ser claro y accesible.

---

# 8. Reglas de motion para implementación

## 8.1 Motion permitido
- fade-up sutil
- reveal por sección
- hover lift pequeño
- glow controlado
- transitions suaves

## 8.2 Motion prohibido
- bounce
- shake decorativo
- scroll hijacking
- typewriter infinito
- zoom agresivo
- animaciones largas por defecto

## 8.3 Rango de duración
- fast: 180ms
- base: 280ms
- slow: 420ms

## 8.4 Implementación recomendada
Si se usa reveal en scroll:
- hacerlo con una isla pequeña o CSS simple
- no meter una librería pesada solo por ese efecto

---

# 9. Reglas de componentes UI

## 9.1 Button
Debe soportar:
- primary
- secondary
- ghost
- estados interactivos accesibles
- variantes de tamaño coherentes

## 9.2 Card
Debe soportar:
- fondo surface
- borde sutil
- shadow ligera
- padding consistente
- hover opcional sutil

## 9.3 Badge
Debe usarse para:
- categorías
- atributos
- tecnologías
- señales de valor

No debe parecer etiqueta chillona.

## 9.4 SectionHeading
Debe soportar:
- eyebrow opcional
- título
- descripción
- alineación izquierda o centro

## 9.5 Navbar
Debe:
- ser usable con teclado
- tener contraste correcto
- mantener claridad en sticky state
- adaptarse a mobile

## 9.6 Menú móvil
Si se implementa:
- debe abrir y cerrar con botón semántico
- debe anunciar estado con `aria-expanded`
- debe ser cerrable con `Escape`
- debe mantener foco razonable

---

# 10. Reglas de contenido por componente

## 10.1 Hero
Debe incluir:
- headline
- subheadline
- badges
- CTA principal
- CTA secundaria

No debe incluir:
- demasiados bloques simultáneos
- texto excesivo
- visuales que resten claridad

## 10.2 ProjectCard
Debe mostrar:
- categoría
- nombre
- descripción
- stack
- rol
- impacto

No debe ser solo una imagen bonita.

## 10.3 SoftSkillCard
Debe mostrar:
- habilidad
- frase de valor
- opcionalmente contexto

No usar:
- barras de porcentaje
- medidores subjetivos
- puntuaciones arbitrarias

## 10.4 Contact
Debe ser:
- claro
- simple
- accesible
- con CTAs visibles

---

# 11. Data y TypeScript

## 11.1 Regla
Los datos del contenido deben estar tipados.

## 11.2 Archivos sugeridos
- `projects.ts`
- `softSkills.ts`
- `services.ts`
- `navigation.ts`

## 11.3 Ejemplo de tipado
```ts
export interface Project {
  category: string;
  title: string;
  description: string;
  stack: string[];
  role: string;
  impact: string;
  href?: string;
}
```

## 11.4 Ventaja
Esto facilita:
- mantenimiento
- escalabilidad
- consistencia
- generación por IA sin caos estructural

---

# 12. SEO y metadatos mínimos

## Reglas
- cada página debe tener `title`
- cada página debe tener `meta description`
- usar lenguaje consistente en `lang="es"`
- usar headings claros
- evitar títulos vacíos o genéricos
- definir Open Graph más adelante si se quiere escalar

---

# 13. Reglas visuales de calidad para la implementación

## 13.1 El resultado final debe verse:
- premium
- sobrio
- limpio
- distinto
- moderno
- rápido
- consistente

## 13.2 El resultado final no debe verse:
- sobreanimado
- demasiado experimental
- poco legible
- saturado
- improvisado
- como dashboard genérico
- como template descargada y apenas retocada

---

# 14. Checklist técnico de validación

Antes de entregar el resultado, la IA o desarrollador debe revisar:

## Estructura
- ¿Existe `BaseLayout.astro`?
- ¿Hay separación clara entre UI, layout, sections y data?
- ¿El contenido está tipado?

## Diseño
- ¿Se respetan tokens?
- ¿Se respetan tipografías?
- ¿Se respetan spacing y radios?
- ¿Se mantiene consistencia entre secciones?

## Accesibilidad
- ¿Hay foco visible?
- ¿Se puede navegar con teclado?
- ¿Existe skip link?
- ¿Hay contraste suficiente?
- ¿Hay reduced motion?
- ¿Los botones y links son semánticos?
- ¿Los formularios tienen labels?
- ¿Los iconos decorativos están ocultos a lectores?

## Performance
- ¿Hay poco JS?
- ¿Las interacciones justifican la hidratación?
- ¿No hay dependencias pesadas innecesarias?

## Narrativa
- ¿Se proyecta premium y serio?
- ¿La IA aparece como ventaja competitiva real?
- ¿La historia personal acompaña sin desplazar lo técnico?

---

# 15. Prompt maestro de implementación para otra IA

```text
Actúa como un frontend engineer senior experto en Astro, Tailwind CSS, TypeScript, accesibilidad y diseño de producto premium.

Implementa un portafolio profesional para Javier Pérez Arroyo siguiendo estas reglas obligatorias:

1. Usa Astro, Tailwind y TypeScript.
2. Mantén la mayor parte del sitio estática y semántica.
3. Usa islas solo cuando la interacción lo justifique.
4. Respeta esta identidad visual: premium, sobria, tecnológica, humana y con espacio implícito.
5. Usa esta paleta:
   - #0A0E13
   - #111826
   - #10233D
   - #18212D
   - #EEF3F8
   - #A9B4C2
   - #6FD6F5
   - #B8C2CF
6. Usa:
   - Sora para títulos
   - Inter para cuerpo y UI
7. Implementa componentes reutilizables:
   - Button
   - Badge
   - Card
   - Section
   - SectionHeading
   - Navbar
   - Hero
   - ProjectCard
   - SoftSkillCard
   - ContactCard
8. La estructura principal debe ser:
   - Navbar
   - Hero
   - Sobre mí
   - Proyectos
   - Cómo aporto valor
   - IA como ventaja competitiva
   - Soft skills
   - CTA final
   - Footer
9. Accesibilidad obligatoria:
   - HTML semántico
   - contraste suficiente
   - foco visible
   - navegación por teclado
   - skip link
   - labels visibles
   - reduced motion
   - targets cómodos
10. Evita:
   - estética gamer
   - clichés de IA
   - efectos exagerados
   - JS innecesario
   - barras de progreso para soft skills

Siempre explica tu propuesta o implementación indicando:
- objetivo
- estructura
- componentes usados
- accesibilidad aplicada
- resultado esperado
```

---

# 16. Reglas finales

Toda implementación debe cumplir esta consigna principal:

> Construir un portafolio premium, accesible, semántico, rápido y técnicamente sólido, donde el diseño, la narrativa y la implementación refuercen la imagen de Javier Pérez Arroyo como un desarrollador serio, estratégico, distinto y competitivo.
