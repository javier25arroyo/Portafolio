import { useRef, useState, type KeyboardEvent } from 'react';
import { projects } from '../../data/projects';

const getCardStep = (viewport: HTMLDivElement) => {
  const card = viewport.querySelector<HTMLElement>('.project-card');
  if (!card) return viewport.clientWidth;
  return card.offsetWidth + Number.parseFloat(window.getComputedStyle(viewport).columnGap || '0');
};

export default function ProjectsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const goTo = (next: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const index = Math.max(0, Math.min(next, projects.length - 1));
    viewport.scrollTo({ left: getCardStep(viewport) * index, behavior: 'smooth' });
    setCurrent(index);
  };
  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    setCurrent(Math.max(0, Math.min(Math.round(viewport.scrollLeft / getCardStep(viewport)), projects.length - 1)));
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(current + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(current - 1); }
  };

  return (
    <div className="projects-carousel">
      <div className="projects-carousel__toolbar">
        <p aria-live="polite">Proyecto {current + 1} de {projects.length}</p>
        <div className="projects-carousel__controls">
          <button type="button" onClick={() => goTo(current - 1)} disabled={current === 0}><span aria-hidden="true">←</span><span className="visually-hidden">Proyecto anterior</span></button>
          <button type="button" onClick={() => goTo(current + 1)} disabled={current === projects.length - 1}><span aria-hidden="true">→</span><span className="visually-hidden">Proyecto siguiente</span></button>
        </div>
      </div>
      <div className="projects-carousel__viewport" ref={viewportRef} role="region" aria-label="Carrusel de proyectos. Usa las flechas izquierda y derecha para navegar." tabIndex={0} onKeyDown={handleKeyDown} onScroll={handleScroll}>
        {projects.map((project, index) => (
          <article className="project-card" key={project.title} aria-label={`Proyecto ${index + 1}: ${project.title}`}>
            <div className={`project-card__visual project-card__visual--${project.visual}`} aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <div className="project-card__body">
              <p className="project-card__category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p>
              <ul className="project-card__stack" role="list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              <dl><div><dt>Rol</dt><dd>{project.role}</dd></div><div><dt>Impacto</dt><dd>{project.impact}</dd></div></dl>
              <div className="project-card__links">{project.links.map((link) => <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label}<span aria-hidden="true">↗</span></a>)}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
