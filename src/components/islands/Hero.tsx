import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const nodes = [[72, 98], [160, 54], [252, 118], [330, 68], [416, 144], [204, 214], [356, 252], [112, 284], [452, 312]] as const;
const connections = [[0, 1], [1, 2], [2, 3], [2, 5], [3, 4], [4, 6], [5, 6], [5, 7], [6, 8]] as const;

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    animate(root.querySelectorAll('[data-hero-reveal]'), {
      opacity: { from: 0 },
      y: { from: 24 },
      delay: stagger(60),
      duration: 800,
      ease: 'easeOutCubic',
    });
    animate(root.querySelectorAll('[data-orbit-node]'), {
      opacity: [0.4, 0.95],
      scale: [0.92, 1.08],
      delay: stagger(120, { from: 'center' }),
      duration: 2200,
      ease: 'easeInOutSine',
      loop: true,
      alternate: true,
    });
  }, []);

  return (
    <section className="hero" id="inicio" ref={rootRef} aria-labelledby="hero-title">
      <div className="site-container hero__grid">
        <div className="hero__content">
          <div className="hero__eyebrow" data-hero-reveal>
            <span className="hero__eyebrow-dot" aria-hidden="true"></span>
            Disponible para proyectos
          </div>
          <h1 id="hero-title" data-hero-reveal>Construyo software con <span>criterio, claridad y profundidad humana.</span></h1>
          <p className="hero__summary" data-hero-reveal>Soy Javier Pérez Arroyo. Transformo retos complejos en productos digitales útiles, accesibles y preparados para evolucionar.</p>
          <ul className="hero__signals" role="list" data-hero-reveal><li>Full-stack</li><li>IA como ventaja</li><li>Accesibilidad</li></ul>
          <div className="hero__actions" data-hero-reveal><a className="button button--primary" href="#proyectos">Explorar proyectos</a><a className="button button--secondary" href="#contacto">Iniciar conversación</a></div>
        </div>
        <div className="hero-visual" aria-hidden="true" data-hero-reveal>
          <div className="hero-visual__halo"></div>
          <svg className="hero-visual__constellation" viewBox="0 0 520 380">
            {connections.map(([from, to]) => <line key={`${from}-${to}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} />)}
            {nodes.map(([cx, cy], index) => <g key={`${cx}-${cy}`} data-orbit-node><circle className="hero-visual__node-halo" cx={cx} cy={cy} r={index % 3 === 0 ? 8 : 5} /><circle className="hero-visual__node" cx={cx} cy={cy} r={index % 3 === 0 ? 3 : 2} /></g>)}
          </svg>
          <div className="hero-visual__card"><span>software</span><strong>Arquitectura que convierte complejidad en dirección.</strong></div>
        </div>
      </div>
    </section>
  );
}
