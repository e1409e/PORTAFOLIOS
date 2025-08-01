import React, { useState, useEffect } from "react";
import "../../styles/home/TypingAnimation.css"; // Para los estilos de la animación

export const TypingAnimation = () => {
  const phrases = ["Eric Chaparro", "Dev Full Stack"]; // Frases a alternar
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Velocidad de escritura

  // useEffect para manejar la lógica de la animación
  useEffect(() => {
    let timer;
    const currentFullPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Borrando
        setCurrentText((prev) =>
          currentFullPhrase.substring(0, prev.length - 1)
        );
        setTypingSpeed(70); // Más rápido al borrar
      } else {
        // Escribiendo
        setCurrentText((prev) =>
          currentFullPhrase.substring(0, prev.length + 1)
        );
        setTypingSpeed(150); // Velocidad normal de escritura
      }
    };

    if (!isDeleting && currentText.length === currentFullPhrase.length) {
      // Si terminó de escribir, espera y luego borra
      timer = setTimeout(() => setIsDeleting(true), 1500); // Espera 1.5 segundos
    } else if (isDeleting && currentText.length === 0) {
      // Si terminó de borrar, cambia a la siguiente frase y empieza a escribir
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setTypingSpeed(500); // Pequeña pausa antes de escribir la siguiente
    } else {
      // Continúa escribiendo o borrando
      timer = setTimeout(handleTyping, typingSpeed);
    }

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

  return (
    <span className="typing-text">
      {currentText}
      <span className="blinking-cursor">|</span> {/* Cursor parpadeante */}
    </span>
  );
};
