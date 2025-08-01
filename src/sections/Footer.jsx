import React, { useState } from "react";
import "../styles/footer/FooterSection.css";
import { ContactModal } from "../components/footer/ContactModal"; // Importa el nuevo componente modal

// Importar los iconos
import githubIcon from "../assets/icons/github.svg";
import mailIcon from "../assets/icons/mail.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import whatsappIcon from "../assets/icons/whatsapp.svg";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    type: "",
    value: "",
    action: () => {}, // Función que se ejecutará al hacer clic en el botón de acción del modal
  });

  const openModal = (type, value, action) => {
    setIsModalOpen(true);
    setModalContent({ type, value, action });
    document.body.style.overflow = "hidden"; // Evita el scroll del body cuando el modal está abierto
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({ type: "", value: "", action: () => {} });
    document.body.style.overflow = "auto"; // Permite el scroll del body cuando el modal está cerrado
  };
  // Datos de contacto
  const myGithubUser = "e1409e"; 
  const myEmail = "ericchaparro1409@gmail.com"; 
  const myInstagramUser = "@eecr1409"; 
  const myWhatsAppNumber = "584128684330"; 

  // Funciones para abrir el modal específico para cada tipo de contacto
  const handleGitHubClick = () => {
    openModal("github", myGithubUser, () =>
      window.open(
        `https://github.com/${myGithubUser}`,
        "_blank",
        "noopener noreferrer"
      )
    );
  };

  const handleMailClick = () => {
    openModal(
      "mail",
      myEmail,
      () => (window.location.href = `mailto:${myEmail}`)
    );
  };

  const handleInstagramClick = () => {
    // Para Instagram, se proporciona el usuario para copiar y un botón para ir al perfil.
    openModal("instagram", myInstagramUser, () =>
      window.open(
        `https://www.instagram.com/${myInstagramUser.replace("@", "")}/`,
        "_blank",
        "noopener noreferrer"
      )
    );
  };

  const handleWhatsAppClick = () => {
    openModal(
      "whatsapp",
      myWhatsAppNumber,
      // Para WhatsApp, usa el enlace wa.me sin el '+' en el número
      () =>
        window.open(
          `https://wa.me/${myWhatsAppNumber.replace("+", "")}`,
          "_blank",
          "noopener noreferrer"
        )
    );
  };

  return (
    <footer id="footer" className="footer-section">
      <div className="footer-content">
        <div className="contact-header">
          <h2 className="footer-title">CONTACTAME:</h2>
          <div className="footer-icons">
            <img
              src={githubIcon}
              alt="GitHub"
              className="icon"
              onClick={handleGitHubClick}
              title="GitHub"
            />
            <img
              src={mailIcon}
              alt="Email"
              className="icon"
              onClick={handleMailClick}
              title="Enviar Correo"
            />
            <img
              src={instagramIcon}
              alt="Instagram"
              className="icon"
              onClick={handleInstagramClick}
              title="Instagram"
            />
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="icon"
              onClick={handleWhatsAppClick}
              title="WhatsApp"
            />
          </div>
        </div>

        <p className="footer-copyright">
          &copy; 2025 Eric Chaparro. Todos los derechos reservados.
        </p>
      </div>

      {/* Modal de Contacto (se renderiza solo cuando isModalOpen es true) */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        contactType={modalContent.type}
        contactValue={modalContent.value}
        onActionButtonClick={modalContent.action}
      />
    </footer>
  );
};
