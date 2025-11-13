# 🚀 Instrucciones de Despliegue en Vercel

## Configuración Completada ✅

El proyecto **Venta El Cruce** ya está configurado para desplegarse en Vercel. Los siguientes archivos han sido creados/configurados:

### Archivos de Configuración
- `vercel.json` - Configuración específica para Vercel
- `astro.config.mjs` - Actualizado con adaptador de Vercel
- `.env.example` - Plantilla para variables de entorno
- `.gitignore` - Actualizado para excluir archivos de build

### Dependencias Instaladas
- `@astrojs/vercel` - Adaptador oficial de Astro para Vercel

## 📋 Pasos para Desplegar

### 1. Conectar a Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "New Project"
4. Selecciona el repositorio: `alonsoguillen97/ventaelcruce`

### 2. Configuración de Vercel
- **Framework Preset**: Se detectará automáticamente como "Astro"
- **Build Command**: `npm run build` (ya configurado)
- **Output Directory**: `dist` (ya configurado)
- **Install Command**: `npm install` (automático)

### 3. Variables de Entorno
No se requieren variables específicas para este proyecto, pero puedes añadir:
- `GOOGLE_ANALYTICS_ID` (opcional, para futuro)

### 4. Despliegue
1. Haz clic en "Deploy"
2. Vercel construirá y desplegará automáticamente
3. Una vez completado, tendrás la URL del sitio

## 🔧 Configuración Técnica

### Astro + Vercel
- **Modo**: Static Site Generation (SSG)
- **Adaptador**: `@astrojs/vercel`
- **Output**: Archivos estáticos optimizados

### Build Commands
```bash
npm run build    # Construir para producción
npm run preview  # Previsualizar build local
npm run dev      # Desarrollo local
```

## 🌐 URLs del Proyecto
- **Repositorio**: https://github.com/alonsoguillen97/ventaelcruce
- **Vercel URL**: Se generará después del primer despliegue

## 🔄 Despliegues Automáticos
Cada push a la rama `master` activará automáticamente un nuevo despliegue en Vercel.

## 📞 Contacto del Restaurante
- **Nombre**: Venta El Cruce
- **Dirección**: Cañada Ancha, 11150 Vejer de la Frontera, Cádiz
- **Teléfono**: 956 235 209