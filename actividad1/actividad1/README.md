# FitLife - Aplicación de Fitness y Bienestar

Una aplicación web moderna desarrollada con React, TypeScript y Tailwind CSS para ayudar a las personas en su viaje hacia un estilo de vida más saludable.

## 🚀 Características

### Páginas Principales

- **Página de Inicio**: Landing page con hero section, servicios, testimonios y call-to-action
- **Tienda**: E-commerce funcional con productos de fitness, filtros por categoría y carrito de compras
- **Suscripciones**: Planes de suscripción con precios dinámicos (mensual/anual) y comparación de features
- **Autenticación**: Páginas de login y registro con formularios estilizados
- **Soporte**: Centro de ayuda con formulario de contacto y FAQ interactiva

### Componentes

- **Layout**: Navegación responsiva y footer
- **UI Components**: Botones y inputs reutilizables con variantes
- **Enrutamiento**: React Router con navegación fluida

### Funcionalidades

- ✅ Diseño responsive y mobile-first
- ✅ Carrito de compras funcional
- ✅ Filtros de productos por categoría
- ✅ Toggle de precios mensual/anual
- ✅ Formularios interactivos
- ✅ FAQ expandible
- ✅ Navegación entre páginas

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19.1.1 + TypeScript
- **Styling**: Tailwind CSS 4.1.13
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 6.8.1
- **Utilities**: clsx para manejo de clases CSS

## 📦 Instalación y Ejecución

1. **Instalar dependencias**:

```bash
npm install
```

2. **Iniciar servidor de desarrollo**:

```bash
npm run dev
```

3. **Construir para producción**:

```bash
npm run build
```

4. **Preview de producción**:

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── componentes/           # Componentes reutilizables
│   ├── layout/           # Layout principal, navbar, footer
│   └── ui/              # Componentes UI básicos
├── pages/               # Páginas de la aplicación
│   ├── auth/           # Login y registro
│   ├── home/           # Página principal
│   ├── store/          # Tienda e-commerce
│   ├── subscripcion/   # Planes de suscripción
│   └── support/        # Centro de ayuda
├── routes/             # Configuración de rutas
├── types/              # Definiciones de TypeScript
└── assets/             # Recursos estáticos
```

## 🎨 Características de Diseño

- **Color Principal**: Azul (#3B82F6)
- **Tipografía**: Inter (sistema fallback)
- **Espaciado**: Sistema de grid responsivo
- **Componentes**: Botones con estados hover y variantes
- **Animaciones**: Transiciones suaves en hover y focus

## 📱 Páginas Implementadas

### 1. Homepage (`/`)

- Hero section con gradiente
- Sección de servicios con iconos
- Testimonios de usuarios
- Call-to-action prominente

### 2. Tienda (`/store`)

- Catálogo de productos con filtros
- Carrito de compras funcional
- Categorías: Equipamiento, Ropa, Suplementos, Accesorios
- Estados de stock y precios

### 3. Suscripciones (`/subscriptions`)

- 3 planes: Básico, Pro, Elite
- Toggle mensual/anual con descuentos
- Comparación de características
- FAQ integrada

### 4. Autenticación (`/login`, `/register`)

- Formularios estilizados
- Validación básica de campos
- Enlaces entre páginas

### 5. Soporte (`/support`)

- Formulario de contacto
- FAQ expandible
- Información de contacto
- Secciones de ayuda rápida

## 🔧 Desarrollo

El proyecto está configurado con:

- **ESLint**: Linting de código
- **TypeScript**: Tipado estático
- **Vite**: Build tool rápido
- **Tailwind CSS**: Utility-first CSS

## 📄 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Ejecutar linter

## 🚀 Deploy

El proyecto está listo para deploy en cualquier servicio de hosting estático como:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

---

Desarrollado con ❤️ usando React + TypeScript + Tailwind CSS
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
