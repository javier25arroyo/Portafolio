import type { ImageMetadata } from "astro";
import veterinariaMoka from "../assets/projects/veterinaria-moka.png";
import elecciones2026 from "../assets/projects/elecciones-2026.png";
import codeCrafters from "../assets/projects/codecrafters.png";

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  tags: string[];
  href: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "elecciones-2026",
    title: "Elecciones 2026",
    category: "Plataforma web",
    year: "2026",
    description:
      "Plataforma informativa para las elecciones de Costa Rica 2026. Next.js 16 + TypeScript; optimizada para picos de tráfico el día de la votación.",
    image: elecciones2026,
    imageAlt: "Captura de la plataforma Elecciones 2026",
    tags: ["Next.js", "TypeScript"],
    href: "https://elecciones2026.lat/",
    featured: true,
  },
  {
    slug: "veterinaria-moka",
    title: "Veterinaria Moka",
    category: "Solución full-stack",
    year: "2025",
    description:
      "Sistema de gestión para una práctica veterinaria: pacientes, citas y expedientes en un solo lugar.",
    image: veterinariaMoka,
    imageAlt: "Captura del dashboard de gestión Veterinaria Moka",
    tags: ["Full-stack"],
    href: "https://github.com/javier25arroyo/Veterinaria-Moka",
  },
  {
    slug: "codecrafters",
    title: "CodeCrafters",
    category: "Juego serio educativo",
    year: "2025",
    description:
      "Juego serio para enseñar fundamentos de programación. Frontend y backend separados, repos independientes.",
    image: codeCrafters,
    imageAlt: "Captura de la interfaz del juego CodeCrafters",
    tags: ["Frontend", "Backend"],
    href: "https://github.com/javier25arroyo/CodeCrafters-FrontEnd",
  },
];
