export type TechnologyCategory = 'Frontend' | 'Backend' | 'Datos' | 'Cloud y herramientas';
export type Technology = { name: string; category: TechnologyCategory; iconUrl: string };

export const technologyCategories: Array<'Todas' | TechnologyCategory> = [
  'Todas',
  'Frontend',
  'Backend',
  'Datos',
  'Cloud y herramientas',
];

export const technologies: Technology[] = [
  { name: 'Angular', category: 'Frontend', iconUrl: 'https://svgl.app/library/angular.svg' },
  { name: 'React', category: 'Frontend', iconUrl: 'https://svgl.app/library/react_dark.svg' },
  { name: 'TypeScript', category: 'Frontend', iconUrl: 'https://svgl.app/library/typescript.svg' },
  { name: 'JavaScript', category: 'Frontend', iconUrl: 'https://svgl.app/library/javascript.svg' },
  { name: 'Astro', category: 'Frontend', iconUrl: 'https://svgl.app/library/astro-icon-dark.svg' },
  { name: 'Tailwind CSS', category: 'Frontend', iconUrl: 'https://svgl.app/library/tailwindcss.svg' },
  { name: 'Java', category: 'Backend', iconUrl: 'https://svgl.app/library/java.svg' },
  { name: 'Node.js', category: 'Backend', iconUrl: 'https://svgl.app/library/nodejs.svg' },
  { name: 'MySQL', category: 'Datos', iconUrl: 'https://svgl.app/library/mysql-icon-dark.svg' },
  { name: 'MongoDB', category: 'Datos', iconUrl: 'https://svgl.app/library/mongodb-icon-dark.svg' },
  { name: 'Microsoft Azure', category: 'Cloud y herramientas', iconUrl: 'https://svgl.app/library/azure.svg' },
  { name: 'Git', category: 'Cloud y herramientas', iconUrl: 'https://svgl.app/library/git.svg' },
  { name: 'Figma', category: 'Cloud y herramientas', iconUrl: 'https://svgl.app/library/figma.svg' },
];
