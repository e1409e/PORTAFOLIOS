# Eric Chaparro - Portafolio Profesional

Este proyecto es un portafolio profesional desarrollado con **React** y **Vite**. Incluye secciones de presentación, habilidades, proyectos y más, con un diseño moderno y responsivo.

## Estructura del Proyecto

```
Eric_Portafolios/
│
├── index.html                # Archivo principal HTML, punto de entrada de la app
├── package.json              # Configuración de dependencias y scripts del proyecto
├── vite.config.js            # Configuración de Vite para desarrollo y build
├── README.md                 # Documentación y guía del proyecto
├── eslint.config.js          # Configuración de reglas de linting
│
├── src/                      # Carpeta principal de código fuente
│   ├── App.jsx               # Componente raíz de la aplicación React
│   ├── main.jsx              # Punto de entrada de React, renderiza App
│   ├── index.css             # Estilos globales y fuentes
│   ├── assets/               # Recursos estáticos (imágenes, íconos, fuentes, PDF)
│   │   ├── fonts/            # Fuentes personalizadas usadas en el proyecto
│   │   ├── icons/            # Íconos SVG para tecnologías y branding
│   │   ├── images/           # Imágenes de proyectos y perfil
│   │   └── pdf/              # Archivos PDF (ejemplo: CV)
│   ├── components/           # Componentes reutilizables y específicos por sección
│   │   ├── about/            # Componentes para la sección 'Sobre mí'
│   │   ├── footer/           # Componentes para el pie de página
│   │   ├── home/             # Componentes para la sección principal
│   │   ├── navbar/           # Componentes para la barra de navegación
│   │   ├── projects/         # Componentes para mostrar proyectos
│   │   └── ScrollDownArrow.jsx # Componente reutilizable de flecha para scroll
│   ├── sections/             # Secciones principales del portafolio (Home, About, Projects, Footer)
│   ├── styles/               # Archivos CSS organizados por sección y componente
│   │   ├── about/            # Estilos para la sección 'Sobre mí'
│   │   ├── footer/           # Estilos para el pie de página
│   │   ├── home/             # Estilos para la sección principal
│   │   ├── navbar/           # Estilos para la barra de navegación
│   │   ├── projects/         # Estilos para la sección de proyectos
│   └── utils/                # Utilidades y funciones auxiliares (actualmente vacío)
```

## Scripts principales

- `npm run dev` - Inicia el servidor de desarrollo con recarga en caliente.
- `npm run build` - Genera la versión de producción.
- `npm run preview` - Previsualiza la build de producción localmente.

## Tecnologías principales

- **React** (Vite)
- **CSS Modules** (organización por secciones)
- **Hack Nerd Font** (fuente personalizada)
- **SVG Icons** para tecnologías

## Autor

Eric Chaparro

---
