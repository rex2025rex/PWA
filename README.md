# PWA
# 🕰️ Reloj Digital PWA - Guía de Usuario y Manual Técnico

Este proyecto es una **Progressive Web Application (PWA)** diseñada bajo estándares de alto rendimiento para dispositivos móviles y escritorio. Simula un reloj despertador digital con estética de neón, permitiendo su instalación como aplicación nativa y funcionamiento **totalmente offline**.

🔗 **Acceso a la Aplicación:** [https://rex2025rex.github.io/PWA/](https://rex2025rex.github.io/PWA/)

---

## 🛠️ Especificaciones Técnicas
Para garantizar la **confiabilidad** y **velocidad** (pilares de una PWA), se implementaron los siguientes recursos:
- **Service Worker (v7):** Gestión de caché para soporte sin conexión a internet.
- **Web App Manifest:** Configuración de identidad visual e instalabilidad.
- **Diseño Responsivo:** Interfaz adaptativa mediante CSS moderno (`clamp`, Flexbox).

---

## 📲 Manual de Instalación Paso a Paso

Sigue las instrucciones según tu dispositivo para disfrutar de la experiencia inmersiva (sin barras de navegador).

### 🖥️ Escritorio (Windows / macOS)
1. **Abrir:** Ingresa al [Link del Proyecto](https://rex2025rex.github.io/PWA/) en **Google Chrome** o **Edge**.
2. **Localizar:** Busca en la barra de direcciones (extremo derecho) el icono de una **pantalla con una flecha**.
3. **Instalar:** Haz clic en el icono y selecciona **"Instalar"**. 
4. **Resultado:** Se creará un acceso directo en tu escritorio y la app se abrirá en una ventana independiente.

### 🤖 Android (Google Chrome)
1. **Abrir:** Accede al enlace desde tu dispositivo.
2. **Opciones:** Toca los **tres puntos (⋮)** en la esquina superior derecha.
3. **Instalar:** Selecciona la opción **"Instalar aplicación"** o **"Agregar a la pantalla de inicio"**.
4. **Confirmar:** Presiona "Instalar" y el icono aparecerá junto a tus otras apps.

### 🍎 iPhone / iPad (Safari)
*Nota: iOS no muestra botones automáticos; debe realizarse manualmente.*
1. **Abrir:** Ingresa al enlace exclusivamente desde **Safari**.
2. **Compartir:** Toca el botón **Compartir** (cuadrado con flecha hacia arriba 📤).
3. **Agregar:** Desliza el menú hacia abajo y selecciona **"Agregar a la pantalla de inicio"**.
4. **Finalizar:** Toca **"Agregar"** en la esquina superior derecha.

---

## 📁 Estructura del Repositorio
Para cumplir con los criterios de evaluación, el proyecto incluye:
*   `index.html`: Estructura semántica y metadatos de autoría.
*   `style.css`: Estilos de despertador retro y reglas de responsividad.
*   `app.js`: Lógica del tiempo (1s) y registro del Service Worker.
*   `sw.js`: Estrategia de caché para funcionamiento offline.
*   `manifest.json`: Archivo de configuración PWA.
*   `icon-192.png` & `icon-512.png`: Iconografía oficial en alta resolución.

---

**Desarrollado por:** Elizabeth Orozco Torres  
**Materia:** Desarrollo de Aplicaciones Multiplataforma  
**Maestría en Ingeniería y Desarrollo de Software**
