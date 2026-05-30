import { useState } from 'react';
import { technologies, technologyCategories, type TechnologyCategory } from '../../data/technologies';
type ActiveCategory = 'Todas' | TechnologyCategory;

export default function TechnologiesGrid() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('Todas');
  const visible = activeCategory === 'Todas' ? technologies : technologies.filter((technology) => technology.category === activeCategory);
  return (
    <div className="technologies">
      <div className="technologies__filters" aria-label="Filtrar tecnologías">{technologyCategories.map((category) => <button type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} key={category}>{category}</button>)}</div>
      <p className="visually-hidden" aria-live="polite">{visible.length} tecnologías visibles en la categoría {activeCategory}.</p>
      <ul className="technologies__grid" role="list">{visible.map((technology) => <li className="technology-card" key={technology.name}><img src={technology.iconUrl} alt="" aria-hidden="true" width="40" height="40" loading="lazy" decoding="async" /><span>{technology.name}</span><small>{technology.category}</small></li>)}</ul>
      <p className="technologies__source">Logos servidos por <a href="https://svgl.app/" target="_blank" rel="noopener noreferrer">SVGL</a>.</p>
    </div>
  );
}
