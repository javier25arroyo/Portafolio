// Script para corregir las rutas en GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
  // Base path para GitHub Pages
  const BASE_URL = '/Portafolio';
  
  // Función para verificar si una URL necesita corrección
  function needsCorrection(url, isAbsoluteUrl = false) {
    if (isAbsoluteUrl) {
      return url.startsWith(window.location.origin + '/') && 
             !url.startsWith(window.location.origin + BASE_URL) &&
             !url.includes('#');
    } else {
      return url.startsWith('/') && !url.startsWith(BASE_URL);
    }
  }
  
  // Solo corregimos rutas cuando realmente estamos en GitHub Pages.
  const isGitHubPages = window.location.hostname.endsWith('github.io');

  if (isGitHubPages) {
    try {
      // Corregir rutas CSS
      document.querySelectorAll('link[rel="stylesheet"]').forEach(function(link) {
        try {
          if (link.href && needsCorrection(link.href, true)) {
            const newHref = link.href.replace(window.location.origin + '/', window.location.origin + BASE_URL + '/');
            console.log(`Corrigiendo CSS: ${link.href} -> ${newHref}`);
            link.href = newHref;
          }
        } catch (e) {
          console.error('Error al corregir CSS:', e);
        }
      });

      // Corregir rutas JS
      document.querySelectorAll('script[src]').forEach(function(script) {
        try {
          if (script.src && needsCorrection(script.src, true)) {
            const newSrc = script.src.replace(window.location.origin + '/', window.location.origin + BASE_URL + '/');
            console.log(`Corrigiendo JS: ${script.src} -> ${newSrc}`);
            script.src = newSrc;
          }
        } catch (e) {
          console.error('Error al corregir JS:', e);
        }
      });

      // Corregir rutas de imágenes
      document.querySelectorAll('img[src]').forEach(function(img) {
        try {
          if (img.src && needsCorrection(img.src, true)) {
            const newSrc = img.src.replace(window.location.origin + '/', window.location.origin + BASE_URL + '/');
            console.log(`Corrigiendo imagen: ${img.src} -> ${newSrc}`);
            img.src = newSrc;
          }
        } catch (e) {
          console.error('Error al corregir imagen:', e);
        }
      });

      // Corregir rutas de enlaces
      document.querySelectorAll('a[href]').forEach(function(a) {
        try {
          if (a.href && needsCorrection(a.href, true)) {
            const newHref = a.href.replace(window.location.origin + '/', window.location.origin + BASE_URL + '/');
            console.log(`Corrigiendo enlace: ${a.href} -> ${newHref}`);
            a.href = newHref;
          }
        } catch (e) {
          console.error('Error al corregir enlace:', e);
        }
      });

      // Corregir rutas de fondos en estilos inline y otros estilos
      document.querySelectorAll('[style*="url("]').forEach(function(el) {
        try {
          const style = el.getAttribute('style');
          if (style && style.includes('url("/') && !style.includes(`url("${BASE_URL}/`)) {
            const newStyle = style.replace(/url\("\/(?!Portafolio\/)/g, `url("${BASE_URL}/`);
            console.log(`Corrigiendo estilo: ${style} -> ${newStyle}`);
            el.setAttribute('style', newStyle);
          }
        } catch (e) {
          console.error('Error al corregir estilo:', e);
        }
      });

      console.log('Rutas corregidas para GitHub Pages o entorno local');
    } catch (e) {
      console.error('Error general al corregir rutas:', e);
    }
  }
});
