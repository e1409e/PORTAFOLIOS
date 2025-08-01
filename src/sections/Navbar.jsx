// src/sections/Navbar.jsx

import React from "react";
import "../styles/navbar/NavbarSection.css"; // Archivo de estilos que crearemos a continuación
import Logo from "../assets/icons/LogoEC2.svg?react"; 
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo SVG */}
        <a href="#home" className="navbar-logo">
          <Logo className="logo-svg" />
        </a>

        {/* Enlaces de navegación */}
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-item">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-item">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#footer" className="nav-item">
              Contactame
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
