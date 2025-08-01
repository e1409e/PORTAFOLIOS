import React from "react";
import { ProjectCard } from "../components/projects/ProjectCard";
import "../styles/projects/ProjectsSection.css"; // Estilos generales de la sección


// Imagenes de los proyectos
import smgedImage from "../assets/images/smged.png";
import apiImage from "../assets/images/API_NODEJS.png";
import portfolioScreenshot from "../assets/images/portfolio_screenshot.png";

export const ProjectsSection = () => {
  // Información de los proyectos
  const projects = [
    {
      title: "Sistema de Gestión de Estudiantes con Discapacidad (Flutter)",
      description: `Aplicación cliente multiplataforma (móvil, web y escritorio) desarrollada con Flutter para la gestión integral de estudiantes con discapacidad, incluyendo módulos administrativos e informativos. Este proyecto se enfoca en la interfaz de usuario y la experiencia del cliente, consumiendo datos de una robusta API RESTful construida con Node.js y Express.js. Demuestra habilidades en desarrollo frontend para Android, escritorio y web, junto con la integración de diversas tecnologías para una experiencia de usuario fluida.`,
      imageSrc: smgedImage,
      technologies: ["Flutter", "Dart"],
      links: {
        github: "https://github.com/e1409e/SMGED#",
      },
    },
    {
      title:
        "API RESTful para Gestión de Estudiantes con discapacidad (Node.js & Express.js)",
      description: `Backend robusto y escalable diseñado para dar soporte al Sistema de Gestión de Estudiantes con Discapacidad. Esta API RESTful, construida con Node.js y Express.js, maneja la lógica de negocio, la autenticación de usuarios y la interacción con la base de datos. Proporciona los endpoints necesarios para las operaciones CRUD y la gestión de datos de la aplicación cliente, asegurando la seguridad y eficiencia en la comunicación.`,
      imageSrc: apiImage, // Usamos la imagen importada para la API
      technologies: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "PostgreSQL",
        "Docker",
      ],
      links: {
        github: "https://github.com/e1409e/API-NODEJS", // Usamos el link de GitHub que proporcionaste
      },
    },
    {
      title: "Portafolio Personal (React.js)",
      description: `Este portafolio web interactivo ha sido construido con React.js, mostrando mis habilidades en desarrollo frontend, diseño responsivo y optimización de experiencia de usuario. Sirve como un escaparate para mis proyectos, competencias técnicas y mi capacidad para crear interfaces de usuario modernas y funcionales.`,
      imageSrc: portfolioScreenshot,
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      links: {
        github: "https://github.com/e1409e/your-portfolio-repo",
      },
    },
  ];
  projects.forEach((project, index) => {
    console.log(
      `Proyecto ${index} - imageSrc antes de pasar a ProjectCard:`,
      project.imageSrc
    );
  });
  return (
    <section id="projects" className="projects-section">
      <h1 className="section-title">Mis Proyectos</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index} // Una key única es importante para React
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            technologies={project.technologies}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};
