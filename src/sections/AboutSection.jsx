import React from "react";
import "../styles/about/AboutSection.css";
import { SkillCard } from "../components/about/SkillCard";

import htmlLogo from "../assets/icons/html5.svg"; // Ejemplo, ajusta las rutas
import cssLogo from "../assets/icons/css3.svg";
import javascriptLogo from "../assets/icons/javascript.svg";
import reactLogo from "../assets/icons/react.svg";
import flutterLogo from "../assets/icons/flutter.svg";
import dartLogo from "../assets/icons/dart.svg";
import nodejsLogo from "../assets/icons/nodejs.svg";
import phpLogo from "../assets/icons/php.svg";
import laravelLogo from "../assets/icons/laravel.svg";
import postgresqlLogo from "../assets/icons/postgresql.svg";
import mysqlLogo from "../assets/icons/mysql.svg";
import gitLogo from "../assets/icons/git.svg";
import dockerLogo from "../assets/icons/docker.svg";
import linuxLogo from "../assets/icons/linux.svg";
import netLogo from "../assets/icons/dotnet.svg";

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="section-title">Habilidades y Herramientas</h1>

      <div className="categories-container">
        {" "}
        {/* Contenedor principal para las 3 categorías */}
        {/* ==================================== */}
        {/* Categoría: Frontend */}
        {/* ==================================== */}
        <div className="category-block">
          {" "}
          <h3 className="category-title">Frontend</h3>
          <div className="skill-cards-grid">
            {" "}
            {/* Grid para las tarjetas individuales */}
            <SkillCard
              name="HTML5"
              logoPath={htmlLogo}
              description="Dominio del lenguaje de marcado estándar para la estructura de contenido web."
            />
            <SkillCard
              name="CSS3"
              logoPath={cssLogo}
              description="Experiencia en diseño y estilización de interfaces de usuario modernas y responsivas."
            />
            <SkillCard
              name="JavaScript"
              logoPath={javascriptLogo}
              description="Amplio conocimiento en JavaScript moderno (ES6+) para interactividad frontend y backend."
            />
            <SkillCard
              name="React"
              logoPath={reactLogo}
              description="Experiencia en el desarrollo de interfaces de usuario eficientes y escalables."
            />
            <SkillCard
              name="Dart"
              logoPath={dartLogo}
              description="Dominio del lenguaje de programación Dart, esencial para el desarrollo de aplicaciones de alto rendimiento."
            />
            <SkillCard
              name="Flutter"
              logoPath={flutterLogo}
              description="Especialista en el desarrollo de aplicaciones multiplataformas con Flutter, junto a la Habilidad para construir interfaces de usuario fluidas y atractivas."
            />

          </div>
        </div>
        {/* ==================================== */}
        {/* Categoría: Backend */}
        {/* ==================================== */}
        <div className="category-block">
          <h3 className="category-title">Backend</h3>
          <div className="skill-cards-grid">
            <SkillCard
              name="Node.js"
              logoPath={nodejsLogo}
              description="Construcción de APIs RESTful robustas y escalables, microservicios y aplicaciones del lado del servidor."
            />
            <SkillCard
              name="PHP"
              logoPath={phpLogo}
              description="Experiencia en desarrollo web del lado del servidor con PHP."
            />
            <SkillCard
              name="Laravel"
              logoPath={laravelLogo}
              description="Dominio del framework PHP para aplicaciones web modernas y seguras."
            />
            <SkillCard
              name=".NET"
              logoPath={netLogo}
              description="Desarrollo de módulos y sistemas administrativos con la plataforma .NET."
            />
          </div>
        </div>
        {/* ==================================== */}
        {/* Categoría: Complementos / Herramientas */}
        {/* ==================================== */}
        <div className="category-block">
          <h3 className="category-title">Complementos</h3>
          <div className="skill-cards-grid">
            <SkillCard
              name="PostgreSQL"
              logoPath={postgresqlLogo}
              description="Experiencia sólida en diseño y gestión de bases de datos relacionales."
            />
            <SkillCard
              name="MySQL"
              logoPath={mysqlLogo}
              description="Dominio en la administración y optimización de bases de datos MySQL."
            />
            <SkillCard
              name="Git"
              logoPath={gitLogo}
              description="Control de versiones distribuido para la colaboración eficiente en proyectos de software."
            />
            <SkillCard
              name="Docker"
              logoPath={dockerLogo}
              description="Experiencia con contenedores Docker para el desarrollo y despliegue de aplicaciones."
            />
            <SkillCard
              name="Linux"
              logoPath={linuxLogo}
              description="Manejo experto de diversas distribuciones de Linux para entornos de desarrollo y servidores."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
