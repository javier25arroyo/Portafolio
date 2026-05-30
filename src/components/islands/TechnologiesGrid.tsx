import { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { technologies, technologyCategories, type TechnologyCategory } from '../../data/technologies';

type ActiveCategory = 'Todas' | TechnologyCategory;

export default function TechnologiesGrid() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('Todas');
  const gridRef = useRef<HTMLUListElement>(null);

  const visible = activeCategory === 'Todas'
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cards = grid.querySelectorAll('.technology-card');
    animate(cards, {
      opacity: [0, 1],
      y: [8, 0],
      delay: stagger(35),
      duration: 260,
      ease: 'outQuint',
    });
  }, [activeCategory]);

  return (
    <div className="technologies">
      <div className="technologies__filters" aria-label="Filtrar tecnologías">
        {technologyCategories.map((category) => (
          <button
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        {visible.length} tecnologías visibles en la categoría {activeCategory}.
      </p>
      <ul className="technologies__grid" role="list" ref={gridRef}>
        {visible.map((technology) => (
          <li
            className={`technology-card${technology.category === 'IA' ? ' technology-card--ia' : ''}`}
            key={technology.name}
          >
            <img
              src={technology.iconUrl}
              alt=""
              aria-hidden="true"
              width="40"
              height="40"
              loading="lazy"
              decoding="async"
            />
            <span>{technology.name}</span>
            {activeCategory === 'Todas' && <small>{technology.category}</small>}
          </li>
        ))}
      </ul>
      <p className="technologies__source">
        Logos servidos por <a href="https://svgl.app/" target="_blank" rel="noopener noreferrer">SVGL</a>.
      </p>
    </div>
  );
}
