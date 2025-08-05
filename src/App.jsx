// src/App.jsx
import React, { useState } from "react";
import { Navbar } from "./sections/Navbar";
import { MobileMenu } from "./components/navbar/MobileMenu";
import { HomeSection } from "./sections/HomeSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { Footer } from "./sections/Footer";

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={handleLinkClick} />
      <main>
        {/* Renderiza todas las secciones del portafolio en orden */}
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </main>
    </>
  );
}
