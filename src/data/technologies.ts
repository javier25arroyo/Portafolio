export type TechnologyCategory = 'Frontend' | 'Backend' | 'Datos' | 'DevOps' | 'IA';
export type Technology = { name: string; category: TechnologyCategory; iconUrl: string };

export const technologyCategories: Array<'Todas' | TechnologyCategory> = [
  'Todas',
  'Frontend',
  'Backend',
  'Datos',
  'DevOps',
  'IA',
];

export const technologies: Technology[] = [
  { name: 'Angular', category: 'Frontend', iconUrl: 'https://svgl.app/library/angular.svg' },
  { name: 'React', category: 'Frontend', iconUrl: 'https://svgl.app/library/react_dark.svg' },
  { name: 'Next.js', category: 'Frontend', iconUrl: 'https://svgl.app/library/nextjs-dark.svg' },
  { name: 'TypeScript', category: 'Frontend', iconUrl: 'https://svgl.app/library/typescript.svg' },
  { name: 'JavaScript', category: 'Frontend', iconUrl: 'https://svgl.app/library/javascript.svg' },
  { name: 'Astro', category: 'Frontend', iconUrl: 'https://svgl.app/library/astro-icon-dark.svg' },
  { name: 'Tailwind CSS', category: 'Frontend', iconUrl: 'https://svgl.app/library/tailwindcss.svg' },
  { name: 'Java', category: 'Backend', iconUrl: 'https://svgl.app/library/java.svg' },
  { name: 'Spring Boot', category: 'Backend', iconUrl: 'https://svgl.app/library/spring.svg' },
  { name: 'Node.js', category: 'Backend', iconUrl: 'https://svgl.app/library/nodejs.svg' },
  { name: 'Python', category: 'Backend', iconUrl: 'https://svgl.app/library/python.svg' },
  { name: 'C#', category: 'Backend', iconUrl: 'https://svgl.app/library/csharp.svg' },
  { name: 'MySQL', category: 'Datos', iconUrl: 'https://svgl.app/library/mysql-icon-dark.svg' },
  { name: 'MongoDB', category: 'Datos', iconUrl: 'https://svgl.app/library/mongodb-icon-dark.svg' },
  { name: 'Oracle DB', category: 'Datos', iconUrl: 'https://svgl.app/library/oracle.svg' },
  { name: 'Microsoft Azure', category: 'DevOps', iconUrl: 'https://svgl.app/library/azure.svg' },
  { name: 'Docker', category: 'DevOps', iconUrl: 'https://svgl.app/library/docker.svg' },
  { name: 'Git', category: 'DevOps', iconUrl: 'https://svgl.app/library/git.svg' },
  { name: 'Claude', category: 'IA', iconUrl: 'https://svgl.app/library/anthropic.svg' },
  { name: 'Gemini', category: 'IA', iconUrl: 'https://svgl.app/library/gemini.svg' },
  { name: 'OpenAI', category: 'IA', iconUrl: 'https://svgl.app/library/openai-dark.svg' },
  { name: 'OpenCode', category: 'IA', iconUrl: 'https://svgl.app/library/opencode.svg' },
];
