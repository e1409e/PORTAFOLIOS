// src/App.jsx
import React from "react";
import { Navbar } from "./sections/Navbar";
import { HomeSection } from "./sections/HomeSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { Footer } from "./sections/Footer"; 

// Exportación con nombre para el componente App
export function App() {
  return (
    <>
      <main>
        {/* Renderiza todas las secciones del portafolio en orden */}
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </main>
    </>
  );
}
