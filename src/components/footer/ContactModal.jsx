import React from "react"; // Eliminado useState porque no es necesario en este componente, se maneja desde el padre
import "../../styles/footer/ContactModal.css"; // Crearemos este archivo CSS a continuación
import copyIcon from "../../assets/icons/copy.svg"; // Asegúrate de que copy.svg esté en tu carpeta assets/icons

export const ContactModal = ({
  isOpen,
  onClose,
  contactType,
  contactValue,
  onActionButtonClick,
}) => {
  // Determina la etiqueta para el valor de contacto
  const getContactLabel = () => {
    switch (contactType) {
      case "github":
        return "Usuario de GitHub:";
      case "mail":
        return "Correo electrónico:";
      case "instagram":
        return "Usuario de Instagram:";
      case "whatsapp":
        return "Número de teléfono:";
      default:
        return "Contacto:";
    }
  };

  // Determina el texto para el botón de acción
  const getActionButtonText = () => {
    switch (contactType) {
      case "github":
        return "Ir a GitHub";
      case "mail":
        return "Enviar Correo";
      case "instagram":
        return "Ir a Instagram";
      case "whatsapp":
        return "Chatear en WhatsApp";
      default:
        return "Abrir Enlace";
    }
  };

  const handleCopyClick = () => {
    // Crea un elemento textarea temporal para contener el texto
    const textarea = document.createElement("textarea");
    textarea.value = contactValue;
    document.body.appendChild(textarea);
    textarea.select(); // Selecciona el texto
    document.execCommand("copy"); // Copia el texto
    document.body.removeChild(textarea); // Elimina el textarea

    alert("¡Copiado al portapapeles!"); // O una notificación más sutil
  };

  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-button" onClick={onClose}>
          &times; {/* Símbolo de "x" para cerrar */}
        </button>

        <h3 className="modal-title">Contacto</h3>
        <p className="contact-label">{getContactLabel()}</p>
        <div className="contact-value-wrapper">
          <span className="contact-value-display">{contactValue}</span>
          <button
            className="copy-button"
            onClick={handleCopyClick}
            title="Copiar"
          >
            <img src={copyIcon} alt="Copiar" className="copy-icon" />
          </button>
        </div>

        <div className="cta-buttons">
          <button
            className="button primary-button"
            onClick={onActionButtonClick}
          >
            {getActionButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
};
