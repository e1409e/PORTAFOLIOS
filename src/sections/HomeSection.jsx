import React, { useState, useEffect, useRef } from "react";
import { TypingAnimation } from "../components/home/TypingAnimation";
import "../styles/home/Buttons.css";
import "../styles/home/HomeSection.css"; // Asegúrate de que los estilos para .scroll-down-arrow estén aquí

import profileImage from "../assets/images/yo.jpg";

export const HomeSection = () => {
  const homeSectionRef = useRef(null);
  // Inicializamos showArrow en true para que aparezca al cargar si la sección Home es visible.
  const [showArrow, setShowArrow] = useState(true);

  // Esta función es opcional si el href="#about" ya maneja el scroll.
  // Pero puede ser útil si quieres añadir lógica extra o forzar un scroll específico.
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // La flecha debe mostrarse cuando la sección Home está visible
        // y ocultarse cuando ya hemos bajado de ella.
        // Si el 'threshold' es 0.5 (50%), significa:
        // entry.isIntersecting && entry.intersectionRatio >= 0.5
        // esto es true si Home está visible en al menos el 50%.
        // Entonces, queremos que showArrow sea true en ese caso.
        setShowArrow(entry.isIntersecting && entry.intersectionRatio >= 0.5);
      },
      {
        root: null, // Observa con respecto al viewport
        rootMargin: "0px",
        threshold: 0.5, // Ejecuta el callback cuando el 50% del elemento sea visible/invisible
      }
    );

    if (homeSectionRef.current) {
      observer.observe(homeSectionRef.current);
    }

    // Limpieza: Desconecta el observador cuando el componente se desmonte
    return () => {
      if (homeSectionRef.current) {
        observer.unobserve(homeSectionRef.current);
      }
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  return (
    <section id="home" className="home-scaffold" ref={homeSectionRef}>
      <div className="home-content-wrapper">
        <h1 className="home-title">
          <TypingAnimation />
        </h1>
        <p className="description-text">
          Ingeniero de Sistemas con sólida especialización en desarrollo web
          Full Stack y Android, con conocimiento avanzado en el lado del
          backend. Domino múltiples lenguajes de programación y manejo
          frameworks como Node.js, Flutter y React, teniendo una alta
          experiencia construyendo soluciones robustas y escalables.
        </p>
        <div className="cta-buttons">
          <a
            href="/ERIC_CHAPARRO_CV.pdf"
            download="ERIC_CHAPARRO_CV.pdf"
            className="button primary-button"
          >
            Descargar CV
          </a>
          <a
            href="https://github.com/e1409e"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary-button"
          >
            Mi GitHub
          </a>
        </div>
      </div>
      <div className="home-image-container">
        <img
          src={profileImage}
          alt="Foto de perfil de Eric Chaparro"
          className="profile-image"
        />
      </div>

      {/* Flecha de scroll down integrada directamente */}
      <a
        href="#about"
        className={`scroll-down-arrow ${showArrow ? "" : "hidden-arrow"}`}
        onClick={scrollToAbout}
      >
        &#x2304;
      </a>
    </section>
  );
};
