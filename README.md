# Prueba Técnica: Next.js + React + MUI + TypeScript + Capacitor

Este repositorio contiene tres ejercicios que demuestran el uso de **Next.js**, **React**, **Material-UI (MUI)**, **TypeScript** y **Capacitor**.

---

## Ejercicios

### 1. Fundamentos de Next.js + React + MUI

- Muestra datos de una API pública (JSONPlaceholder) en una lista con MUI.
- Usa `getStaticProps` y un tema personalizado de MUI.
- Incluye interactividad con `useState`.

### 2. Uso de Plugins de Capacitor

- Integra el plugin de **Geolocalización** y **Cámara** de Capacitor.
- Obtiene y muestra la ubicación del usuario en una interfaz con MUI.
- Obtiene y muestra la cárama del usuario en una interfaz con MUI.
- Maneja errores como la falta de soporte en ciertos entornos.

### 3. Gestión de Estado con React Hooks

- Crea un contexto (`AnalyticsContext`) para rastrear eventos de `hover` y `click`.
- Implementa dos componentes: una lista que registra `hover` y un botón que registra `click`.
- Muestra el conteo de eventos en un panel de análisis.
- Añadir un **Textfield** para aumentar lso datos de la lista hover.

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/isaiahsalah/pruebafront02.git
   cd pruebafront02
   ```
2. Instala dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el proyecto:

   ```bash
   npm run dev
   ```

4. Abre http://localhost:3000 en tu navegador.

## Configuración de Capacitor

1. Crear index.html en public

   ```bash
   <!DOCTYPE html>
   <html lang="es">
   <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Next.js + Capacitor</title>
   </head>
   <body>
   <div id="root"></div>
   <script src="/_next/static/chunks/pages/_app.js"></script>
   </body>
   </html>
   ```

2. Configurar capacitor.config.ts

   ```bash
   import { CapacitorConfig } from '@capacitor/cli';

   const config: CapacitorConfig = {
   appId: 'com.example.app',
   appName: 'nextjs-capacitor-app',
   webDir: 'public', // Apunta a la carpeta "public"
   bundledWebRuntime: false,
   };

   export default config;
   ```

3. Compilar y Sincronizar
   1. Agrega este script en package.json:
      ```bash
      "scripts": {
      "build": "next build && next export -o public",
      "sync": "npx cap sync"
      }
      ```
   2. Agrega este script en package.json:
      ```bash
      npm run build
      npx cap sync
      ```

## Tecnologías

- Next.js: Enrutamiento y SSR.

- React: Componentes y estado.

- MUI: Diseño de UI.

- TypeScript: Tipado estático.

- Capacitor: APIs nativas.

¡Gracias por la oportunidad! 😊
