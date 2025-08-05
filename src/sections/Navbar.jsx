// src/components/navbar/Navbar.jsx
import React from "react";
import "../styles/navbar/NavbarSection.css";
import Logo from "../assets/icons/LogoEC2.svg?react";

export const Navbar = ({ isMenuOpen, onMenuToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <Logo className="logo-svg" />
        </a>

        {/* Links de escritorio, se ocultan en móviles */}
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

        {/* Botón de menú de hamburguesa, solo visible en móviles */}
        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={onMenuToggle}
          aria-label="Toggle navigation menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </nav>
  );
};
