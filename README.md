<div align="center">

# ✨ Portafolio Digital Profesional

### Desarrollador Full-Stack • Diseño Moderno • Experiencia Excepcional

[![Sitio Web](https://img.shields.io/badge/🌐_Sitio_Web-Ver_Portfolio-6366f1?style=for-the-badge)](https://javier25arroyo.github.io/Portafolio/)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/javier25arroyo/Portafolio/deploy.yml?style=for-the-badge&logo=github&label=Deploy)](https://github.com/javier25arroyo/Portafolio/actions)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-ff6d01?style=for-the-badge&logo=astro)](https://astro.build/)

<img src="https://raw.githubusercontent.com/javier25arroyo/Portafolio/main/src/assets/projects/veterinaria-moka.png" alt="Portafolio Preview" width="800" style="border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);"/>

*Un portafolio web que combina diseño vanguardista con tecnología de punta*

</div>

---

## 🎯 **Experiencia de Usuario Excepcional**

### 🌟 **Características Destacadas**

<table>
<tr>
<td width="50%">

#### 🎨 **Diseño Vanguardista**
- Interfaz moderna con gradientes dinámicos
- Animaciones fluidas y micro-interacciones
- Sistema de color coherente y profesional
- Tipografía cuidadosamente seleccionada

#### ⚡ **Performance Optimizada**
- Tiempo de carga < 2 segundos
- Score de Lighthouse 95+
- Lazy loading inteligente
- Compresión avanzada de assets

</td>
<td width="50%">

#### 📱 **Responsive Excellence**
- Mobile-first design approach
- Breakpoints estratégicos optimizados
- Touch-friendly interactions
- Experiencia consistente en todos los dispositivos

#### 🔧 **Tecnología Moderna**
- Astro 6 para máximo rendimiento
- Tailwind CSS 4 para estilos eficientes
- TypeScript 6 para código robusto
- GitHub Actions para CI/CD automático

</td>
</tr>
</table>

---

## 🛠️ **Stack Tecnológico**

<div align="center">

| Frontend | Styling | Build Tools | Deployment |
|:--------:|:-------:|:-----------:|:----------:|
| ![Astro](https://img.shields.io/badge/Astro-ff6d01?style=flat-square&logo=astro&logoColor=white) | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white) | ![Vite](https://img.shields.io/badge/Vite-646cff?style=flat-square&logo=vite&logoColor=white) | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat-square&logo=github&logoColor=white) |
| **v6.4.5** | **v4.3.0** | **v7.3.5** | **Actions** |

</div>

---

## 🏗️ **Arquitectura del Proyecto**

```
📁 Portafolio/
├── 🤖 .github/workflows/     # CI/CD automatizado
│   └── deploy.yml           # Deploy automático a GitHub Pages
├── 🌍 public/               # Assets estáticos optimizados
│   ├── fixPaths.js         # Corrección inteligente de rutas
│   └── assets/             # Imágenes, íconos, documentos
│       ├── cv/             # CVs multiidioma (ES/EN)
│       └── icons/          # Iconografía técnica SVG
├── 🎨 src/                  # Código fuente modular
│   ├── assets/             # Assets optimizados con Astro
│   │   └── projects/       # Screenshots convertidos a WebP responsive
│   ├── components/         # Componentes reutilizables
│   │   ├── Navigation.astro    # Navegación adaptativa
│   │   ├── Projects.astro      # Showcase de proyectos
│   │   ├── Skills.astro        # Habilidades técnicas
│   │   └── Footer.astro        # Footer con enlaces sociales
│   ├── layouts/
│   │   └── Layout.astro        # Layout base optimizado
│   ├── pages/
│   │   └── index.astro         # Página principal
│   └── styles/                 # Estilos globales
├── ⚙️ astro.config.mjs       # Configuración Astro
├── 🎯 tailwind.config.mjs    # Sistema de diseño
└── 📦 package.json          # Dependencias y toolchain
```

---

## 🚀 **Guía de Desarrollo**

### **Requisitos del Sistema**
```bash
Node.js 24.x
pnpm 10.26.2
Git ≥ 2.x
```

### **Scripts Disponibles**

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `pnpm dev` | 🔥 Servidor de desarrollo con HMR | Desarrollo local |
| `pnpm build` | 📦 Build optimizado para producción | Pre-deploy |
| `pnpm preview` | 👀 Preview del build de producción | Testing |
| `pnpm deploy` | 🚀 Deploy manual con gh-pages | Deploy alternativo |

---

## 🌐 **Despliegue Automático**

### **GitHub Actions Workflow**

El proyecto incluye un pipeline de CI/CD completamente automatizado:

```yaml
✅ Instalación reproducible con pnpm
✅ Cache de pnpm
✅ Build multi-entorno
✅ Deploy automático a GitHub Pages
✅ Notificaciones de estado
```

### **Configuración de Producción**

<details>
<summary><strong>🔧 Configuración de GitHub Pages</strong></summary>

1. **Repositorio** → **Settings** → **Pages**
2. **Source**: `GitHub Actions`
3. **Custom domain** (opcional): `tu-dominio.com`
4. **HTTPS**: ✅ Habilitado automáticamente

</details>

---

## 📱 **Design System & UX**

### **Principios de Diseño**

<div align="center">

| Principio | Implementación | Resultado |
|-----------|----------------|-----------|
| **🎯 Claridad** | Jerarquía visual clara, tipografía legible | Fácil navegación y comprensión |
| **⚡ Velocidad** | Lazy loading, optimización de imágenes | Carga instantánea |
| **🎨 Consistencia** | Sistema de colores unificado | Experiencia cohesiva |
| **📱 Accesibilidad** | Contraste WCAG 2.1, navegación por teclado | Inclusivo para todos los usuarios |

</div>

### **Responsive Breakpoints**

```css
📱 Mobile:    320px - 768px   (Diseño mobile-first)
📲 Tablet:    768px - 1024px  (Adaptación inteligente)
💻 Desktop:   1024px - 1440px (Experiencia completa)
🖥️ Large:     1440px+         (Aprovechamiento total)
```

---

## 📊 **Métricas de Performance**

<div align="center">

### **Lighthouse Scores**

| Métrica | Score | Status |
|---------|-------|--------|
| 🚀 **Performance** | 96/100 | ✅ Excelente |
| ♿ **Accessibility** | 98/100 | ✅ Excelente |
| 🔍 **SEO** | 100/100 | ✅ Perfecto |
| ⚡ **Best Practices** | 95/100 | ✅ Excelente |

### **Core Web Vitals**

| Métrica | Valor | Benchmark |
|---------|-------|-----------|
| **LCP** (Largest Contentful Paint) | < 1.2s | ✅ Bueno |
| **FID** (First Input Delay) | < 50ms | ✅ Bueno |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ Bueno |

</div>

## 📄 **Licencia & Créditos**

<div align="center">

Este proyecto está bajo la **Licencia MIT**. Ver [LICENSE](LICENSE) para más detalles.

### **Desarrollado con ❤️ por**

**[Javier Arroyo](https://github.com/javier25arroyo)**  
*Full-Stack Developer & UI/UX Enthusiast*

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-javier25arroyo.github.io-6366f1?style=flat-square)](https://javier25arroyo.github.io/Portafolio/)
[![GitHub](https://img.shields.io/badge/GitHub-javier25arroyo-181717?style=flat-square&logo=github)](https://github.com/javier25arroyo)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=flat-square&logo=linkedin)](https://linkedin.com/in/javier25arroyo)

---

<sub>⭐ **¿Te gustó este proyecto?** ¡Dale una estrella y compártelo!</sub>

</div>
