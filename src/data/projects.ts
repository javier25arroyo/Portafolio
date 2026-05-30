export type ProjectLink = { href: string; label: string };
export type ProjectVisual = 'civic' | 'human' | 'operations' | 'inclusive' | 'connected' | 'data';

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  role: string;
  impact: string;
  visual: ProjectVisual;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: 'Elecciones 2026',
    category: 'Producto cívico digital',
    description: 'Plataforma informativa para comprender candidaturas y propuestas de las elecciones de Costa Rica.',
    stack: ['Next.js', 'TypeScript', 'UX de información'],
    role: 'Producto, frontend y experiencia',
    impact: 'Convierte información pública compleja en una experiencia clara y consultable.',
    visual: 'civic',
    links: [
      { href: 'https://elecciones2026.lat/', label: 'Ver producto' },
      { href: 'https://github.com/javier25arroyo/Elecciones2026', label: 'Ver código' },
    ],
  },
  {
    title: 'CodeCrafters',
    category: 'Software con impacto humano',
    description: 'Aplicación de juegos serios para personas adultas mayores, orientada a apoyar el bienestar cognitivo.',
    stack: ['Angular', 'Spring Boot', 'Accesibilidad'],
    role: 'Desarrollo full-stack',
    impact: 'Aplica tecnología a una necesidad humana concreta con una interfaz comprensible.',
    visual: 'human',
    links: [
      { href: 'https://github.com/javier25arroyo/CodeCrafters-FrontEnd.git', label: 'Frontend' },
      { href: 'https://github.com/javier25arroyo/CodeCrafters-BackEnd.git', label: 'Backend' },
    ],
  },
  {
    title: 'Veterinaria Moka',
    category: 'Gestión operativa',
    description: 'Solución full-stack para organizar la operación diaria de una clínica veterinaria.',
    stack: ['Full-stack', 'Datos', 'Procesos'],
    role: 'Arquitectura y desarrollo',
    impact: 'Centraliza información operativa para facilitar decisiones y seguimiento.',
    visual: 'operations',
    links: [{ href: 'https://github.com/javier25arroyo/Veterinaria-Moka.git', label: 'Ver código' }],
  },
  {
    title: 'Puzzle para personas mayores',
    category: 'Experiencia inclusiva',
    description: 'Minijuego de rompecabezas diseñado con interacciones directas y una curva de uso amable.',
    stack: ['JavaScript', 'Diseño inclusivo', 'Web'],
    role: 'Diseño y desarrollo',
    impact: 'Explora cómo una interfaz simple puede reducir fricción y ampliar acceso.',
    visual: 'inclusive',
    links: [{ href: 'https://javier25arroyo.github.io/puzzle-game/', label: 'Ver experiencia' }],
  },
  {
    title: 'CareConnect IoT',
    category: 'Prototipo conectado',
    description: 'Sistema físico para detección de obstáculos mediante Ideaboard y servicios en MicroPython.',
    stack: ['IoT', 'MicroPython', 'Prototipado'],
    role: 'Integración de hardware y software',
    impact: 'Traduce señales del entorno en una base útil para asistencia y autonomía.',
    visual: 'connected',
    links: [{ href: 'https://github.com/javier25arroyo/CareConnect.git', label: 'Ver código' }],
  },
  {
    title: 'Oracle Tech Store DB',
    category: 'Arquitectura de datos',
    description: 'Modelo de gestión para una tienda de productos tecnológicos sobre Oracle Database.',
    stack: ['Oracle', 'SQL', 'Modelado'],
    role: 'Diseño y administración de datos',
    impact: 'Organiza entidades y reglas operativas con una estructura mantenible.',
    visual: 'data',
    links: [{ href: 'https://github.com/javier25arroyo/Proyecto-programacion-de-bases-de-datos.git', label: 'Ver código' }],
  },
];
