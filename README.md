# Venta El Faisán - Web del Restaurante

Sitio web para el restaurante "Venta El Faisán" construido con Astro y Tailwind CSS.

## 🍽️ Características del Restaurante

- ✅ **Astro** con TypeScript estricto
- ✅ **Tailwind CSS** con paleta de colores gastronómica
- ✅ **Responsive design** (mobile-first)
- ✅ **Accesibilidad** (WCAG AA)
- ✅ **Performance optimizado**
- ✅ **SEO básico** configurado

## 🏗️ Secciones incluidas

- **Header** - Navegación sticky con modo oscuro
- **Hero** - Sección principal con gradientes
- **Features** - 3 características principales
- **Testimonials** - 3 testimonios de clientes
- **Pricing** - 3 planes de precios
- **CTA** - Llamada a la acción
- **Footer** - Enlaces y información

## 🛠️ Herramientas de desarrollo

- **Prettier** - Formateo de código
- **ESLint** - Linting para TypeScript y Astro
- **EditorConfig** - Configuración de editor
- **VSCode settings** - Configuración optimizada

## 🏃‍♂️ Ejecución

### Desarrollo
```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Producción
```bash
npm run build
npm run preview
```

## 📝 Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build de producción
- `npm run lint` - Ejecutar ESLint
- `npm run lint:fix` - Corregir errores de ESLint
- `npm run format` - Formatear código con Prettier
- `npm run format:check` - Verificar formato

## 🎨 Personalización

### Colores
Edita `tailwind.config.js` para cambiar la paleta de colores.

### Contenido
- **Testimonios**: Edita directamente en `src/pages/index.astro`
- **Precios**: Modifica los planes en la sección pricing
- **Features**: Cambia los iconos y textos en la sección features

### Imágenes
Las imágenes de testimonios están usando Unsplash. Para producción, reemplázalas con imágenes propias en la carpeta `public/`.

## 🌙 Modo Oscuro

El modo oscuro está configurado con:
- Detección automática del sistema
- Toggle manual en la navegación
- Persistencia en localStorage
- Transiciones suaves

## � Responsive

Diseño mobile-first con breakpoints:
- **mobile**: < 768px
- **tablet**: 768px - 1023px  
- **desktop**: ≥ 1024px

---

Construido con ❤️ usando [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/)
