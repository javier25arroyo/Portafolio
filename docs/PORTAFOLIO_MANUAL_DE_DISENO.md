# Portafolio Profesional · Manual de Diseño y Dirección Visual

## 1. Propósito del documento

Este archivo define los estándares visuales, estructurales y de experiencia para el rediseño del portafolio profesional de Javier Pérez Arroyo.

Su objetivo es servir como referencia única para:
- diseño visual
- desarrollo frontend
- consistencia de marca
- accesibilidad
- toma de decisiones futuras

Este documento debe ayudar a que el portafolio se vea como un producto premium, serio, tecnológico y humano, evitando improvisaciones visuales y manteniendo coherencia entre secciones, componentes y contenido.

---

## 2. Posicionamiento de marca

### 2.1 Identidad principal
El portafolio debe comunicar, en este orden:

1. Este desarrollador se ve premium y serio.
2. Este desarrollador domina IA y tecnología avanzada.
3. Este desarrollador se ve creativo y diferente.

### 2.2 Sensación general
La experiencia visual debe sentirse como una mezcla entre:
- Apple
- una firma de diseño premium
- un laboratorio de tecnología avanzada
- una marca personal sobria con profundidad humana

### 2.3 Tono emocional
El sitio debe transmitir:
- confianza
- lujo
- innovación
- criterio técnico
- humanidad
- resiliencia sin dramatismo

### 2.4 Cosas que debe evitar
El portafolio no debe verse:
- infantil
- gamer
- agresivo
- recargado
- genérico
- como una plantilla estándar
- como una página motivacional en vez de una profesional

---

## 3. Dirección visual general

### 3.1 Concepto visual
La dirección visual debe ser:

**premium + tecnológica + humana + espacial implícita**

La referencia espacial debe existir de forma sutil:
- negro profundo
- azul cósmico
- puntos de luz muy discretos
- sensación de profundidad
- destellos controlados
- gradientes suaves

No deben usarse referencias literales o evidentes como:
- astronautas
- planetas gigantes
- galaxias recargadas
- ilustraciones sci-fi muy explícitas

### 3.2 Minimalismo premium
El estilo general debe apoyarse en:
- mucho aire
- composiciones limpias
- contraste bien controlado
- pocas decisiones decorativas
- gran atención al detalle
- jerarquía tipográfica fuerte
- microinteracciones elegantes

### 3.3 Integración de gustos personales
Temas a integrar de forma implícita o moderada:
- espacio
- anime con guiños sutiles
- inteligencia artificial
- accesibilidad
- innovación humana

Tema descartado:
- armas

---

## 4. Objetivo profesional del portafolio

El portafolio debe servir para:
- empleo formal en software
- freelance premium
- consultoría
- marca personal como creador y desarrollador

### Público principal
- reclutadores
- personas técnicas
- clientes de software o IA
- potenciales colaboradores

### Tipo de sitio
El portafolio debe sentirse principalmente como:
- landing page de marca personal
- showroom profesional de proyectos y capacidades
- carta de presentación digital premium

---

## 5. Narrativa de marca personal

### 5.1 Enfoque narrativo
La historia personal puede estar presente, pero debe manejarse con mucha elegancia.

La discapacidad y la experiencia de vida deben reflejar:
- fortaleza
- disciplina
- perspectiva humana
- adaptabilidad
- profundidad
- criterio

No debe reflejar:
- lástima
- dramatismo excesivo
- victimización
- sentimentalismo forzado

### 5.2 Tesis narrativa
El mensaje implícito del portafolio debe ser:

> Soy un desarrollador de software con una perspectiva humana, técnica y estratégica, capaz de transformar retos complejos en soluciones reales.

### 5.3 Propuesta de valor
La propuesta de valor central debe apoyarse en:
- desarrollo de software
- pensamiento estratégico
- uso inteligente de IA
- accesibilidad
- enfoque humano
- resolución de problemas reales

---

## 6. Sistema de color

### 6.1 Paleta principal

#### Base
- Obsidian Black: `#0A0E13`
- Graphite Deep: `#1A222E`
- Cosmic Navy: `#10233D`

#### Neutros
- Steel Mist: `#A9B4C2`
- Silver Frost: `#B8C2CF`
- Soft White: `#EEF3F8`

#### Acento
- Cyan Pulse: `#6FD6F5`

### 6.2 Uso recomendado

#### Fondos
- Fondo principal: `#0A0E13`
- Fondo secundario: `#111826`
- Fondo terciario o secciones destacadas: `#10233D`
- Superficie de cards: `#18212D`

#### Texto
- Texto principal: `#EEF3F8`
- Texto secundario: `#A9B4C2`
- Texto tenue: `#7C8796`

#### Bordes
- Borde principal: `#263244`
- Borde suave: `rgba(184, 194, 207, 0.12)`
- Borde acento: `rgba(111, 214, 245, 0.28)`

#### Acentos
- Acento principal: `#6FD6F5`
- Hover del acento: `#8EE2FB`
- Acento suave: `rgba(111,214,245,0.10)`

### 6.3 Proporción de color
- 65% fondos oscuros base
- 20% superficies y fondos secundarios
- 10% neutros claros
- 5% acento

### 6.4 Reglas de color
- No usar más de un color acento dominante.
- No combinar el cian con varios acentos intensos al mismo tiempo.
- Morado, naranja, amarillo fuerte y verde encendido no deben entrar en la paleta principal.
- El color debe reforzar sofisticación, no llamar la atención por sí solo.

---

## 7. Gradientes

### 7.1 Gradientes oficiales

#### Hero principal
```css
linear-gradient(135deg, #0A0E13 0%, #10233D 55%, #0E1724 100%)
```

#### Glow sutil
```css
radial-gradient(circle at center, rgba(111,214,245,0.16) 0%, rgba(111,214,245,0) 70%)
```

#### Metálico premium
```css
linear-gradient(135deg, #B8C2CF 0%, #EEF3F8 100%)
```

### 7.2 Reglas
- Máximo un gradiente dominante por sección.
- Nunca comprometer legibilidad.
- No usar gradientes saturados o demasiado vistosos.
- El gradiente debe aportar profundidad, no protagonismo excesivo.

---

## 8. Tipografía

### 8.1 Sistema tipográfico principal
- Títulos: `Sora`
- Texto/UI: `Inter`

### 8.2 Escala tipográfica recomendada

#### Display
- tamaño: 64px
- peso: 600
- line-height: 1.05

#### H1
- tamaño: 48px
- peso: 600
- line-height: 1.1

#### H2
- tamaño: 36px
- peso: 600
- line-height: 1.15

#### H3
- tamaño: 28px
- peso: 600
- line-height: 1.2

#### H4
- tamaño: 22px
- peso: 500
- line-height: 1.25

#### Body Large
- tamaño: 18px
- peso: 400
- line-height: 1.7

#### Body
- tamaño: 16px
- peso: 400
- line-height: 1.65

#### Small
- tamaño: 14px
- peso: 400
- line-height: 1.5

#### Caption
- tamaño: 12px
- peso: 500
- line-height: 1.4

### 8.3 Reglas tipográficas
- Máximo dos familias tipográficas.
- Los títulos deben verse finos, sofisticados y con presencia.
- El texto debe priorizar legibilidad y limpieza.
- No abusar de mayúsculas.
- No usar pesos demasiado delgados.
- Los párrafos no deben convertirse en bloques densos.

---

## 9. Espaciado

### 9.1 Escala de espaciado
Se usará una escala base de 8 puntos:

- 4
- 8
- 12
- 16
- 24
- 32
- 40
- 48
- 64
- 80
- 96
- 120

### 9.2 Reglas
- Separación entre secciones: 96px a 120px
- Padding de cards: 24px a 32px
- Gap de grid estándar: 24px
- Separación entre título y descripción: 16px a 20px
- Separación entre contenido y CTA: 24px

### 9.3 Principio
El spacing debe aportar respiración, lujo y orden.  
Un sitio premium se siente espacioso, no apretado.

---

## 10. Grid y layout

### 10.1 Grid principal
- Desktop: 12 columnas
- Tablet: 8 columnas
- Mobile: 4 columnas

### 10.2 Contenedores
- ancho máximo general: 1200px
- ancho de lectura: 720px
- padding lateral desktop: 32px
- padding lateral mobile: 20px

### 10.3 Reglas
- Hero en dos columnas en desktop.
- Bloques de lectura en ancho reducido.
- Grids de tarjetas de 2 o 3 columnas máximo.
- No saturar la pantalla con demasiados bloques paralelos.

---

## 11. Radios, bordes y profundidad

### 11.1 Border radius
- Small: 10px
- Medium: 16px
- Large: 24px
- XL: 32px
- Pill: 999px

### 11.2 Sombras
- Shadow soft: `0 8px 30px rgba(0, 0, 0, 0.22)`
- Shadow elevated: `0 16px 40px rgba(0, 0, 0, 0.28)`
- Shadow accent: `0 0 0 1px rgba(111,214,245,0.18), 0 10px 30px rgba(111,214,245,0.08)`

### 11.3 Reglas
- Las sombras deben ser suaves y elegantes.
- Los bordes deben ser sutiles.
- Las cards no deben parecer cajas pesadas.

---

## 12. Botones

### 12.1 Tipos de botón

#### Primary Button
Uso:
- CTA principal
- acciones clave
- navegación destacada

Estilo:
- fondo acento
- texto oscuro
- hover con aclarado suave
- radio de 14px
- altura mínima 48px

#### Secondary Button
Uso:
- acción secundaria
- CTA complementario

Estilo:
- fondo translúcido sutil
- borde suave
- texto claro

#### Ghost Button
Uso:
- links visuales
- navegación ligera
- acciones discretas

Estilo:
- fondo transparente
- cambio de color en hover
- apariencia limpia

### 12.2 Estándares
- Mínimo recomendado de interacción: 44x44
- Estados obligatorios: default, hover, focus, active, disabled
- El estado focus debe ser muy visible
- Los botones nunca deben depender solo del color para comunicar su estado

---

## 13. Animaciones y motion

### 13.1 Estilo de animación
La animación debe ser:
- elegante
- notoria
- controlada
- rápida
- no invasiva

### 13.2 Permitido
- fade-up sutil
- scroll reveal
- hover lift pequeño
- glow suave
- movimiento ambiental ligero en fondos
- blur en navbar sticky

### 13.3 Prohibido
- bounce
- zooms agresivos
- typewriter infinito
- efectos teatrales
- animaciones largas
- scroll hijacking
- partículas excesivas

### 13.4 Timing
- rápido: 180ms
- base: 280ms
- lento: 420ms

### 13.5 Principio
La animación debe guiar la mirada, no robarse el show.

---

## 14. Iconografía

### 14.1 Librería principal
Se recomienda usar:
- `@lucide/astro`

Alternativas:
- Heroicons
- Simple Icons para marcas o logos externos

### 14.2 Estándares
- Tamaños base: 16, 20 y 24
- Misma familia de iconos en todo el sitio
- Íconos decorativos con `aria-hidden="true"`
- Íconos funcionales con nombre accesible

### 14.3 Estilo
- lineales
- limpios
- modernos
- no caricaturescos

---

## 15. Accesibilidad

### 15.1 Estándar objetivo
El objetivo debe ser construir el sitio pensando en cumplimiento WCAG 2.2 AA.

### 15.2 Contraste
- Texto normal: mínimo 4.5:1
- Texto grande: mínimo 3:1
- Elementos no textuales importantes: contraste suficiente

### 15.3 Navegación por teclado
- Todo debe ser accesible por teclado
- Orden de tab lógico
- Menús y overlays cerrables con Escape
- Nada crítico puede depender solo de hover

### 15.4 Focus
El foco debe ser:
- visible
- elegante
- consistente
- fácil de identificar

### 15.5 Motion accessibility
- Debe existir soporte para `prefers-reduced-motion`
- Reducir o eliminar animaciones decorativas cuando el usuario lo prefiera

### 15.6 Semántica
- usar `header`, `nav`, `main`, `section`, `footer`
- headings en orden lógico
- botones para acciones
- links para navegación
- labels visibles en formularios
- texto alternativo útil en imágenes

### 15.7 Target size
- objetivo recomendado: 44x44 mínimo para interacciones importantes

### 15.8 Transparencias
- usar blur y transparencias con moderación
- no comprometer legibilidad
- considerar versiones reducidas cuando sea necesario

---

## 16. Componentes base

### 16.1 Componentes fundamentales
El sistema debe construirse primero con:

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

### 16.2 Principio
Menos componentes, pero mejor pensados y más consistentes.

---

## 17. Estructura general del sitio

### 17.1 Orden recomendado de secciones

1. Navbar
2. Hero
3. Sobre mí
4. Proyectos destacados
5. Cómo aporto valor
6. IA como ventaja competitiva
7. Soft skills
8. CTA final
9. Footer

### 17.2 Lógica narrativa
La secuencia debe responder:
- quién soy
- qué hago
- por qué soy distinto
- qué he hecho
- cómo aporto valor
- cómo contactarme

---

## 18. Estándares por sección

### 18.1 Navbar
Debe incluir:
- nombre o wordmark
- enlaces internos
- CTA principal

Debe verse:
- limpia
- sobria
- fija o sticky
- con blur y fondo oscuro translúcido al hacer scroll

### 18.2 Hero
Debe comunicar en segundos:
- quién soy
- qué hago
- qué me diferencia

Debe incluir:
- headline principal
- subheadline
- badges o atributos clave
- CTA principal
- CTA secundaria
- visual abstracto premium

Debe verse:
- impactante
- limpia
- cinematográfica de forma sutil
- tecnológica sin clichés

### 18.3 Sobre mí
Debe contar:
- historia profesional
- visión humana
- enfoque técnico
- perspectiva de accesibilidad

Debe verse:
- íntima pero profesional
- editorial
- bien espaciada
- sobria

### 18.4 Proyectos destacados
Cada proyecto debe explicar:
- problema
- solución
- rol
- stack
- impacto

Debe verse:
- serio
- bien estructurado
- profesional
- centrado en valor, no solo en estética

### 18.5 Cómo aporto valor
Debe resumir áreas principales:
- desarrollo de software
- IA aplicada
- consultoría tecnológica
- accesibilidad
- visión estratégica

Debe verse:
- modular
- clara
- confiable

### 18.6 IA como ventaja competitiva
Debe explicar:
- cómo uso IA
- por qué importa
- qué criterio aplico
- qué beneficios reales aporta

Debe evitar:
- clichés visuales
- discurso inflado
- humo futurista

### 18.7 Soft skills
Soft skills prioritarios:
- liderazgo
- comunicación
- pensamiento estratégico
- empatía
- adaptabilidad
- resolución de problemas
- trabajo en equipo

Debe verse:
- editorial
- maduro
- elegante
- con evidencia contextual

No usar:
- barras de progreso
- porcentajes vacíos
- listas genéricas sin profundidad

### 18.8 CTA final
Debe sentirse:
- claro
- seguro
- premium
- sin presión excesiva

Debe incluir:
- mensaje de contacto
- intención profesional
- botones principales

### 18.9 Footer
Debe incluir:
- nombre
- email
- LinkedIn
- GitHub
- mensaje breve
- copyright

Debe verse:
- limpio
- sobrio
- discreto

---

## 19. Estándares de contenido

### 19.1 Títulos
- cortos
- fuertes
- claros
- con intención

### 19.2 Descripciones
- evitar relleno
- evitar frases excesivamente abstractas
- escribir con claridad y elegancia

### 19.3 Proyectos
Todo proyecto debe responder:
- qué problema resolvía
- qué aporté yo
- qué herramientas utilicé
- qué resultado produjo
- por qué es relevante

### 19.4 Voz del contenido
La voz del portafolio debe ser:
- segura
- humana
- inteligente
- sobria
- estratégica
- accesible

---

## 20. Librerías y stack recomendado

### 20.1 Stack principal
- Astro
- Tailwind CSS
- TypeScript

### 20.2 Utilidades visuales recomendadas
- `@lucide/astro`
- CSS custom properties para design tokens
- posible uso de pequeñas islas solo cuando la interacción lo justifique

### 20.3 Principio técnico
La mayor parte del sitio debe ser estática, rápida y accesible.  
La interactividad debe existir solo donde genere valor real.

---

## 21. Tokens base sugeridos

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
}
```

---

## 22. Reglas finales de calidad

Para que el portafolio destaque sobre otros, debe cumplir estos principios:

1. La historia personal acompaña, pero no reemplaza el nivel técnico.
2. La IA se presenta como ventaja competitiva real, no como moda.
3. La accesibilidad se demuestra en la experiencia, no solo en el discurso.
4. La consistencia vale más que la exageración visual.
5. El diseño debe sentirse premium en los detalles pequeños.
6. Menos elementos, mejor resueltos.
7. Claridad, profundidad y sofisticación por encima del adorno.

---

## 23. Resumen ejecutivo

### Estilo
Premium tecnológico con humanidad.

### Colores
Negro profundo, azul cósmico, grafito, plata y cian.

### Tipografías
Sora + Inter.

### Motion
Elegante, sutil y controlado.

### Narrativa
Software, IA, accesibilidad, resiliencia y visión estratégica.

### Meta final
Construir un portafolio que se vea a la altura del mercado, pero con una identidad propia clara, sobria y memorable.
