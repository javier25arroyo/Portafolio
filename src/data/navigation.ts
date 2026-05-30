export type NavigationItem = {
  href: `#${string}`;
  label: string;
};

export const navigationItems: NavigationItem[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#perfil', label: 'Perfil' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#contacto', label: 'Contacto' },
];
