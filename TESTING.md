# Testing Guide

## Accessibility (A11y)

### Manual Keyboard Navigation
- Press `Tab` to navigate through all interactive elements
- Verify focus indicators are visible
- Verify skip-link appears on focus
- Test heading hierarchy with `H` key (if using NVDA/JAWS)

### Lighthouse Audit
1. Dev server: `npm run dev`
2. Open DevTools → Lighthouse
3. Audit Accessibility, Performance, Best Practices
4. Target: A11y ≥95, Performance ≥90

### Screen Reader Testing
- VoiceOver (Mac): Cmd+F5
- NVDA (Windows): Download free
- Test heading structure, skip links, aria-labels

### Browser Tools
- axe DevTools (Chrome/Firefox extension)
- WAVE (accessibility checker)
- Lighthouse CI

## Performance

### Metrics
- Lighthouse Performance ≥90
- First Contentful Paint (FCP): <1.8s
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1

### Debug
```bash
npm run build
npm run preview
# Open http://localhost:3000 in Chrome DevTools
```

## Dark/Light Mode Testing
1. Click theme toggle (navbar)
2. Reload page → theme persists
3. System preference change → auto-updates if no saved preference
4. Check contrast in both modes

## Visual Regression
No automated tests configured yet. Manual checks:
- Desktop (1440px)
- Tablet (768px)
- Mobile (375px)
- Light/Dark modes
- Print styles

## Commands
- `npm run build` — production build
- `npm run dev` — dev server + hot reload
- `npm run preview` — serve production build locally
- `npm run lint` — Astro type checking
