// src/components/projects/ProjectCard.jsx

import React, { useState } from "react"; // Se importa useState para el estado del modal
import "../../styles/projects/ProjectCard.css";

// Importación de los logos de las tecnologías
import flutterLogo from "../../assets/icons/flutter.svg";
import nodejsLogo from "../../assets/icons/nodejs.svg";
import reactLogo from "../../assets/icons/react.svg";
import javascriptLogo from "../../assets/icons/javascript.svg";
import htmlLogo from "../../assets/icons/html5.svg";
import cssLogo from "../../assets/icons/css3.svg";
import dartLogo from "../../assets/icons/dart.svg";
import expressjsLogo from "../../assets/icons/express.svg";
import postgresqlLogo from "../../assets/icons/postgresql.svg";
import mysqlLogo from "../../assets/icons/mysql.svg";
import dockerLogo from "../../assets/icons/docker.svg";

// Un mapa para obtener el logoPath basado en el nombre de la tecnología
const techLogos = {
  Flutter: flutterLogo,
  "Node.js": nodejsLogo,
  React: reactLogo,
  JavaScript: javascriptLogo,
  HTML: htmlLogo,
  CSS: cssLogo,
  Dart: dartLogo,
  "Express.js": expressjsLogo,
  PostgreSQL: postgresqlLogo,
  MySQL: mysqlLogo,
  Docker: dockerLogo,
};

export const ProjectCard = ({
  title,
  description,
  imageSrc,
  technologies,
  links,
}) => {
  // Estado para controlar la visibilidad del modal de la imagen
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Función para abrir el modal de la imagen
  const openImageModal = () => {
    setIsImageModalOpen(true);
    // Opcional: Deshabilitar el scroll del cuerpo cuando el modal está abierto
    document.body.style.overflow = "hidden";
  };

  // Función para cerrar el modal de la imagen
  const closeImageModal = () => {
    setIsImageModalOpen(false);
    // Opcional: Habilitar el scroll del cuerpo al cerrar el modal
    document.body.style.overflow = "auto";
  };

  return (
    <div className="project-card">
      {/* Contenedor de la imagen y los enlaces (parte izquierda) */}
      <div className="project-media-container">
        <div className="project-image-content">
          {/* Nuevo contenedor para la imagen que maneja el hover y el click */}
          <div className="project-image-interactive" onClick={openImageModal}>
            <div className="project-image-wrapper">
              <img src={imageSrc} alt={title} className="project-image" />
            </div>
            {/* Icono de lupa que aparece al hacer hover */}
            <div className="zoom-icon-overlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="zoom-icon"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm11.707 2.293l-4.707-4.707A7.962 7.962 0 0018 10c0-4.411-3.589-8-8-8S2 5.589 2 10s3.589 8 8 8c1.789 0 3.447-.611 4.707-1.644l4.707 4.707a1 1 0 001.414-1.414zM10 14a4 4 0 110-8 4 4 0 010 8zm-1-3V9a1 1 0 10-2 0v2H5a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Los enlaces (GitHub, Live Demo) */}
        <div className="project-links">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Contenedor principal para la sección de detalles (parte derecha, siempre visible) */}
      <div className="project-details-wrapper open">
        {/* El contenido real de los detalles */}
        <div
          id={`project-details-content-${title.replace(/\s/g, "")}`}
          className="project-details-content"
        >
          {/* El título del proyecto */}
          <div className="project-title-box">
            <h3 className="project-title">{title}</h3>
          </div>
          {/* La descripción del proyecto */}
          <p className="project-description">{description}</p>

          {/* Las tecnologías usadas */}
          <div className="project-tech-icons">
            {technologies.map((techName, index) => (
              <div key={index} className="tech-icon-wrapper" title={techName}>
                <img
                  src={techLogos[techName]}
                  alt={techName}
                  className="tech-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de imagen a pantalla completa */}
      {isImageModalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={imageSrc} alt={title} className="modal-image" />
            <button className="close-modal-button" onClick={closeImageModal}>
              &times; {/* Símbolo de "x" para cerrar */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
