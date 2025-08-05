// src/components/navbar/MobileMenu.jsx
import React from "react";
import "../../styles/navbar/MobileMenu.css";

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
      <ul className="mobile-nav-links">
        <li>
          <a href="#home" className="mobile-nav-item" onClick={onClose}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" className="mobile-nav-item" onClick={onClose}>
            Habilidades
          </a>
        </li>
        <li>
          <a href="#projects" className="mobile-nav-item" onClick={onClose}>
            Proyectos
          </a>
        </li>
        <li>
          <a href="#footer" className="mobile-nav-item" onClick={onClose}>
            Contactame
          </a>
        </li>
      </ul>
    </div>
  );
};
