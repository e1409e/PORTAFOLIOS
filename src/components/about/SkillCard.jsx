import React, { useState } from "react";
import "../../styles/about/SkillCard.css";

export const SkillCard = ({ name, logoPath, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    // Evita que el click en la descripción cierre la tarjeta si ya está abierta
    setShowDescription(!showDescription);
  };

  return (
    <div
      className={`skill-card ${showDescription ? "active" : ""}`}
      onClick={toggleDescription}
    >
      <div className="skill-card-header">
        {" "}
        <img src={logoPath} alt={`${name} logo`} className="skill-logo" />
        <h4 className="skill-name">{name}</h4>
        {/* La flecha indicadora */}
        <span className="skill-toggle-arrow">
          &#x25B6; {/* Flecha derecha por defecto */}
        </span>
      </div>
      {/* La descripción solo se renderiza si showDescription es true */}
      {showDescription && <p className="skill-description">{description}</p>}
    </div>
  );
};
