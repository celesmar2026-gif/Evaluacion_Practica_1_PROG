# Evaluación 3 - Práctica 1 - Programación III M1

¡Hola! Soy Celeste Contreras. En este repositorio comparto la resolución de mi primera evaluación práctica, donde trabajé con Node.js y TypeScript. 

Desarrollé este proyecto en mi equipo Canaima bajo Linux Mint, lo que me llevó a tomar decisiones técnicas interesantes para optimizar el rendimiento y asegurar la compatibilidad.

## 📂 ¿Qué encontrarás aquí?

### 1. Ejercicio 1: Servidor de Intercepción de Datos
En la carpeta `/Ejercicio_1`, programé un servidor utilizando únicamente los módulos nativos de **Node.js** (`http`, `fs`, `url`). 
* **Mi objetivo:** Crear una comunicación fluida entre un formulario HTML y una página de resultados sin usar frameworks pesados, para que el servidor corriera de forma ligera en mi hardware.
* **Logro:** El sistema intercepta el nombre de un animal favorito y lo inyecta dinámicamente en la vista de respuesta.

### 2. Ejercicio 2: Lógica con TypeScript y Enums
En la carpeta `/Ejercicio_2`, utilicé **TypeScript** para organizar categorías de películas y países mediante enumeraciones (`Enums`).
* **El reto técnico:** Mi versión de Node.js (v12.22.9) presentó un conflicto con las versiones más recientes de TypeScript. 
* **La solución:** Investigué y realicé un "downgrade" controlado instalando `typescript@4.5`. Esto me permitió transpilar el código a JavaScript con éxito y ejecutarlo sin errores de sintaxis en mi terminal.

## 🛠️ Mi Entorno de Desarrollo
* **Sistema Operativo:** Linux Mint (Canaimita)
* **Backend:** Node.js v12.22.9
* **Compilador:** TypeScript v4.5
* **Editor:** Sublime Text

## 🚀 Cómo probar mis ejercicios

1. **Para el servidor:** Entra a `Ejercicio_1` y ejecuta `node server.js`. Luego abre tu navegador en `http://localhost:3000`.
2. **Para la lógica de Enums:** Entra a `Ejercicio_2` y ejecuta `node ejercicio2.js` para ver los listados impresos en la terminal.

---
*Este proyecto fue una gran oportunidad para aprender a adaptar las herramientas tecnológicas a los recursos disponibles y entender a fondo cómo viajan los datos en el backend.* 🕵️‍♂️✨
