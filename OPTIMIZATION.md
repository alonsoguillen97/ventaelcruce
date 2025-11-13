# Venta El Cruce - Web del Restaurante

Sitio web para el restaurante "Venta El Cruce - El Capricho Andaluz" construido con Astro y Tailwind CSS.

## 🍽️ Características

- ✅ **Astro v5.15.4** con TypeScript
- ✅ **Tailwind CSS v4** con paleta de colores personalizada
- ✅ **Responsive design** (mobile-first)
- ✅ **Optimización de imágenes** con WebP/AVIF
- ✅ **Performance optimizado** para Vercel
- ✅ **SEO básico** configurado

## 📸 Optimización de Imágenes

El sitio utiliza el componente `Image` de Astro para optimización automática:

- ✅ Conversión a formatos modernos (WebP, AVIF)
- ✅ Responsive images con srcset automático
- ✅ Lazy loading para imágenes fuera del viewport
- ✅ Eager loading para imágenes above-the-fold
- ✅ Cache headers optimizados (1 año)

### Mejoras implementadas:
- **Hero slider**: Imágenes optimizadas 1920x1080 con eager loading
- **Secciones nosotros**: Imágenes 600x400 con lazy loading
- **Espacios**: Imágenes 400x500 con lazy loading
- **Logos**: Conversión automática a WebP
- **Galería**: 12 imágenes con lazy loading y transiciones

## 🛠️ Herramientas de desarrollo

- **Prettier** - Formateo de código
- **ESLint** - Linting para TypeScript y Astro
- **@astrojs/vercel** - Adaptador para Vercel con optimización de imágenes

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

## 🎨 Paleta de colores

- **Verde Oliva**: #4a4d00 (color principal)
- **Verde Oscuro**: #2a2d1a
- **Dorado**: #c7c99b
- **Navy**: #000000 - #2B2B2B

## 📁 Estructura del proyecto

```
/
├── public/
│   ├── images/
│   │   ├── hero/        # Imágenes del slider (3)
│   │   ├── espacios/    # Fotos de las instalaciones (2)
│   │   ├── galeria/     # Galería de fotos
│   │   ├── fondos/      # Fondos y texturas
│   │   └── logos/       # Logos y branding
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro  # Página principal
│   │   └── galeria.astro # Galería de fotos
│   └── styles/
│       └── global.css
├── astro.config.mjs     # Configuración con optimización
└── vercel.json          # Cache headers para Vercel
```

## 🚀 Deploy en Vercel

El proyecto está configurado para deployment automático en Vercel con:

- ✅ **Optimización de imágenes** habilitada en astro.config.mjs
- ✅ **Cache headers** para assets estáticos (1 año)
- ✅ **Compresión automática** de assets
- ✅ **CDN global** de Vercel
- ✅ **Formatos modernos** (WebP/AVIF) con fallback

### Configuración de caché:
- `/images/*` - 1 año inmutable
- `/_astro/*` - 1 año inmutable  
- `*.webp` - 1 año inmutable

## 📊 Performance

Mejoras de rendimiento implementadas:

- Imágenes optimizadas reducen tamaño ~70-80%
- Lazy loading reduce carga inicial
- Cache agresivo reduce solicitudes
- Formatos modernos mejoran compresión
- Responsive images sirven tamaño correcto

---

Construido con ❤️ usando [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/)
