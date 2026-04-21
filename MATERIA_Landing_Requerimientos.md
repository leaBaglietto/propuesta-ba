**MATER.IA**

Documento de Requerimientos --- Landing Page

Gobierno de la Ciudad de Buenos Aires

Joy Group Agency · v1.0 · Abril 2026

**1. Resumen Ejecutivo**

MATER.IA es una iniciativa del Gobierno de la Ciudad de Buenos Aires orientada a preparar a la próxima generación para un mercado laboral transformado por la inteligencia artificial. La propuesta se materializa en un trailer itinerante equipado con workstations y experiencias interactivas que visitan escuelas de la ciudad.

El presente documento define los requerimientos funcionales, visuales, técnicos y de contenido para la construcción de la landing page que presentará el proyecto ante potenciales socios, instituciones educativas y el público general.

La landing debe transmitir urgencia, innovación y propósito cívico, respetando fielmente la identidad visual del material de presentación original.

**2. Contexto y Audiencias**

**2.1 Problema que comunica**

- El sistema educativo tradicional quedó obsoleto frente al avance de la IA.

- El 61% de los empleados espera que las nuevas tecnologías cambien significativamente su rol laboral para 2026.

- El 47% de los trabajadores teme que la tecnología vuelva sus puestos completamente obsoletos para 2030.

- El 55% de la fuerza laboral requerirá recapacitación debido a automatización impulsada por IA para finales de 2026.

**2.2 Propuesta de valor**

MATER.IA no enseña a hacer tareas más rápido. Enseña a entender que la IA es una herramienta que requiere inteligencia humana para funcionar bien: pasar de la dependencia pasiva al liderazgo activo.

**2.3 Audiencias objetivo de la landing**

- **Autoridades educativas y directivos de escuelas de la CABA**

  - Buscan: evidencia de impacto, logística de la visita, respaldo institucional.

- **Referentes de empresas y organizaciones interesadas en patrocinar o asociarse**

  - Buscan: propósito, alcance, visibilidad y cómo sumarse.

- **Medios y comunicadores**

  - Buscan: datos, imágenes, contacto de prensa.

- **Público general y familias**

  - Buscan: qué es, dónde estará, cómo participar.

**3. Arquitectura de Contenido (Secciones)**

La landing es una única página (one-pager) con scroll vertical. Las secciones siguen la narrativa del PDF de presentación.

| **\#** | **Sección / Título**        | **Contenido y elementos**                                                                                                                                                                                                                                                                    |
|--------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **S1** | **Hero / Portada**          | Logo BA + Logo MATER.IA. Headline impactante: «Aprender no es cosa del pasado.» Imagen de fondo: ojo con pupila tecnológica (img/hero-eye.jpg). CTA principal: «Conocé el proyecto» (scroll). CTA secundario: «Sumate como socio».                                                           |
| **S2** | **El problema**             | Título: «El sistema educativo tradicional quedó obsoleto.» Foto de aula tradicional de fondo (img/classroom.jpg). Texto sobre la imagen. Transición hacia los datos.                                                                                                                         |
| **S3** | **Los datos**               | 3 estadísticas animadas al entrar en viewport: 61%, 47%, 55% con sus descripciones. Íconos SVG para cada dato. Fondo oscuro (#0A1628) con texto en cian.                                                                                                                                     |
| **S4** | **El nuevo valor humano**   | Título: «El nuevo valor humano». Foto de joven pensativo (img/student-thinking.jpg). 4 bullets: Ejercer juicio / Construir relaciones / Navegar la ambigüedad / Impulsar la innovación.                                                                                                      |
| **S5** | **Qué es MATER.IA**         | Título + tagline. Descripción de la filosofía: de dependencia pasiva a liderazgo activo. Imagen del trailer (img/trailer.jpg). Texto explicativo.                                                                                                                                            |
| **S6** | **La experiencia interior** | Subsección: «Cuestionar la verdad». Foto + descripción: demostrar que la IA no es neutral. Subsección: «Saber expresarse». Foto + descripción: estructura de un buen prompt (Rol, Contexto, Tarea, Tono). Subsección: «Aumentar la productividad». Foto + descripción: IA + criterio humano. |
| **S7** | **Sumate**                  | Headline: «¿Preparamos juntos a la próxima generación?» Formulario de contacto (nombre, organización, correo, mensaje, rol: escuela / empresa / prensa / otro). Botón de envío. Links a redes sociales.                                                                                      |
| **S8** | **Footer**                  | Logo Joy Group Agency. Copyright 2026. Links: Instagram, LinkedIn. URL: www.joygroup.agency.                                                                                                                                                                                                 |

**4. Identidad Visual**

**4.1 Paleta de colores**

| **Muestra** | **Hex**      | **Uso**                                                         |
|-------------|--------------|-----------------------------------------------------------------|
|             | **\#0A1628** | Color primario --- fondo principal y navbar                     |
|             | **\#00C8D4** | Cian / Teal --- tipografía de impacto, highlights, bordes, CTAs |
|             | **\#FFFFFF** | Blanco --- texto sobre fondos oscuros, logotipos                |
|             | **\#1A2A3A** | Azul oscuro secundario --- fondos alternativos, cards           |
|             | **\#333333** | Gris oscuro --- texto de cuerpo sobre fondos claros             |

> *⚠ Todos los colores se definen como variables CSS (:root) para facilitar mantenimiento. No usar colores hardcodeados en componentes.*

**4.2 Tipografía**

|                               |                                                                                                                                                                      |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Display / Títulos grandes** | Fuente sans-serif bold de impacto. Tamaño: 4rem--8rem. Color: cian (#00C8D4) o blanco. Ej: S2, S3, S4. Referencia visual: tipografía del PDF (extrabold, uppercase). |
| **Títulos de sección**        | Bold, 2rem--3rem. Blanco o cian según fondo. Sin mayúsculas forzadas.                                                                                                |
| **Subtítulos / Labels**       | Medium, 1rem--1.2rem. Color cian o blanco con opacidad reducida.                                                                                                     |
| **Cuerpo de texto**           | Regular, 1rem--1.1rem. Blanco o gris claro (#CCCCCC) sobre fondo oscuro. Color oscuro sobre secciones claras.                                                        |
| **Datos estadísticos**        | Extra bold, 6rem--8rem. Color cian. Animados con counter al entrar en viewport.                                                                                      |
| **UI / Botones / Labels**     | Bold, 0.9rem--1rem. Uppercase con letter-spacing.                                                                                                                    |

> *⚠ Usar Google Fonts o fuentes del sistema que sean libres. Propuesta: \'Barlow Condensed\' o \'Bebas Neue\' para display + \'Inter\' o \'DM Sans\' para cuerpo.*

**4.3 Logotipos (imágenes --- no texto)**

- Logo BA (Gobierno CABA): img/logo-ba.svg --- posición: header y S7. Fondo blanco con brillo característico.

- Logo Joy Group Agency: img/logo-joy-group.svg --- posición: footer. Versión blanca sobre fondo oscuro.

- Logo MATER.IA: img/logo-materia.svg --- posición: hero y como favicon. Tipografía serif \'MATER.\' + \'IA\' en contraste.

> *⚠ Los logos son elementos de imagen y no deben ser reproducidos en texto ni reemplazados por tipografía. Deben exportarse en SVG para máxima nitidez.*

**5. Imágenes Requeridas**

Todas las imágenes deben ubicarse en la carpeta /img del proyecto. Los nombres aquí son referencias internas.

| **Nombre de archivo**        | **Sección de uso**          | **Descripción**                                                                                         |
|------------------------------|-----------------------------|---------------------------------------------------------------------------------------------------------|
| img/hero-eye.jpg             | S1 --- Hero                 | Primer plano del ojo con pupila tecnológica (redes neuronales, datos). Formato: 16:9. Alto contraste.   |
| img/classroom.jpg            | S2 --- El problema          | Aula escolar tradicional con estudiantes. Foto periodística, auténtica. Formato: 16:9.                  |
| img/student-thinking.jpg     | S4 --- Valor humano         | Joven con guardapolvo, expresión reflexiva, luz lateral dramática. Formato: 16:9 o 3:4.                 |
| img/trailer.jpg              | S5 --- Qué es MATER.IA      | Trailer MATER.IA abierto con rampas, estudiantes interactuando con facilitadores. Fondo urbano porteño. |
| img/station-truth.jpg        | S6 --- Cuestionar la verdad | Estudiante frente a monitor con infografía de Google Gemini. Interior del trailer, iluminación teal.    |
| img/station-prompt.jpg       | S6 --- Saber expresarse     | Estudiante tipeando en teclado, sonriendo. Monitor con prompt visible. Interior del trailer.            |
| img/station-productivity.jpg | S6 --- Productividad        | Estudiante señalando pantalla con línea de tiempo histórica generada por IA.                            |
| img/logo-ba.svg              | Header, S7                  | Logo oficial Gobierno CABA. Fondo blanco con glow. Formato vectorial.                                   |
| img/logo-materia.svg         | Hero, Favicon               | Logotipo MATER.IA con punto tipográfico. Vectorial.                                                     |
| img/logo-joy-group.svg       | Footer                      | Logo Joy Group Agency, versión blanca. Vectorial.                                                       |

**6. Requerimientos Técnicos**

**6.1 Stack tecnológico recomendado**

|                   |                                                                                                                                                                                 |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Lenguaje base** | HTML5 semántico + CSS3 + JavaScript (ES6+). Sin frameworks obligatorios; puede usarse Vue.js o React si el equipo lo prefiere.                                                  |
| **Estilos**       | CSS puro con variables (:root). No se requiere Tailwind ni Bootstrap; preferir control total sobre el diseño.                                                                   |
| **Animaciones**   | CSS transitions/animations para efectos de scroll. IntersectionObserver API para activar animaciones al entrar en viewport. CountUp.js para contadores estadísticos (opcional). |
| **Formulario**    | HTML nativo. Backend/envío a definir: puede integrarse con Formspree, Netlify Forms o endpoint propio.                                                                          |
| **Hosting**       | GitHub Pages, Netlify o Vercel (a definir). Dominio a cargo del cliente.                                                                                                        |
| **Performance**   | Imágenes en formato WebP con fallback JPG. Lazy loading nativo en imágenes. Score Lighthouse mínimo 85 en móvil.                                                                |

**6.2 Estructura de archivos**

Estructura de carpetas recomendada:

> materia-landing/
> ├── index.html
> ├── css/
> │ └── styles.css
> ├── js/
> │ └── main.js
> ├── img/
> │ ├── hero-eye.jpg
> │ ├── classroom.jpg
> │ ├── student-thinking.jpg
> │ ├── trailer.jpg
> │ ├── station-truth.jpg
> │ ├── station-prompt.jpg
> │ ├── station-productivity.jpg
> │ ├── logo-ba.svg
> │ ├── logo-materia.svg
> │ └── logo-joy-group.svg
> └── README.md

**6.3 Responsive**

- Mobile first. Diseño funcional desde 375px de ancho.

- Breakpoints: 375px (mobile), 768px (tablet), 1280px (desktop), 1920px (widescreen).

- Navbar: hamburger menu en mobile, links visibles en desktop.

- Las estadísticas (S3) se apilan verticalmente en mobile.

- La sección S6 (experiencia interior) se presenta como carrusel en mobile y columnas en desktop.

**6.4 Accesibilidad**

- Contraste WCAG AA mínimo en todos los textos.

- Atributos alt en todas las imágenes con descripción significativa.

- Navegación por teclado habilitada (focus visible en botones y links).

- Etiquetas semánticas correctas: \<header\>, \<main\>, \<section\>, \<footer\>, \<nav\>.

**7. Comportamiento Interactivo**

**7.1 Navbar**

- Fijo en la parte superior al hacer scroll.

- Fondo transparente en posición inicial; fondo \#0A1628 con blur al hacer scroll.

- Logo MATER.IA a la izquierda. Links de navegación a la derecha: Inicio, El Problema, La Experiencia, Sumate.

- CTA destacado: botón «Sumate» en cian.

**7.2 Animaciones de entrada**

- Todos los títulos de sección aparecen con fade-in + slide-up al entrar en el viewport.

- Las estadísticas (S3) se animan con efecto counter: el número sube desde 0 hasta el valor final en \~1.5 segundos.

- Las imágenes de fondo tienen efecto parallax suave (10--15px de desplazamiento) en desktop.

- Las subsecciones de S6 aparecen con delay escalonado (150ms entre cada una).

**7.3 Efectos hover**

- Botones: scale(1.04) + brighten leve al hover.

- Cards de S6: borde cian iluminado al hover.

- Links del footer: subrayado animado (underline que crece de izquierda a derecha).

**7.4 Formulario (S7)**

- Validación en tiempo real: campos requeridos marcados visualmente.

- Estado de éxito: mensaje de confirmación inline (sin redirigir).

- Estado de error: mensaje descriptivo por campo.

- Campo «Rol» como selector (select) con opciones: Escuela / Empresa / Prensa / Otro.

**8. Textos Dinámicos (No Imagen)**

Todo el texto de la landing debe estar en el código HTML/CSS, nunca embebido en imágenes. Esto garantiza SEO, accesibilidad y modificabilidad sin necesidad de diseño.

**8.1 Textos principales por sección**

**S1 --- Hero**

- Headline: «Aprender no es cosa del pasado.»

- Tagline: «MATER.IA --- Una iniciativa del Gobierno de la Ciudad de Buenos Aires»

- CTA 1: «Conocé el proyecto»

- CTA 2: «Sumate como socio»

**S2 --- El problema**

- Título grande: «El sistema educativo tradicional quedó obsoleto.»

**S3 --- Los datos**

- Dato 1: «61%» --- «de los empleados espera que las nuevas tecnologías cambien significativamente su rol laboral tan pronto como en 2026.»

- Dato 2: «47%» --- «de los trabajadores teme que la tecnología vuelva completamente obsoletos sus puestos de trabajo para el año 2030.»

- Dato 3: «55%» --- «de la fuerza laboral requerirá recapacitación debido a la automatización impulsada por la IA para finales de 2026.»

**S4 --- El nuevo valor humano**

- Título: «El nuevo valor humano»

- Lista: Ejercer juicio / Construir relaciones / Navegar la ambigüedad / Impulsar la innovación

**S5 --- Qué es MATER.IA**

- Título: «MATER.IA»

- Tagline: «Aprender no es cosa del pasado.»

- Párrafo 1: «Este no es un lugar para aprender a hacer tareas más rápido.»

- Párrafo 2: «Es un espacio para entender que la IA es una herramienta que requiere de tu inteligencia para funcionar bien.»

- Párrafo 3: «Se trata de pasar de la dependencia pasiva al liderazgo activo.»

**S6 --- La experiencia interior**

- Título de sección: «La Experiencia Interior»

- Card 1 --- «Cuestionar la verdad»: «Demostrar cómo la IA no es neutral. Devuelve e investiga lo que le pidas.»

- Card 2 --- «Saber expresarse»: «Enseñar la estructura de un buen prompt (Rol, Contexto, Tarea, Tono). La máquina hace el trabajo pesado. Vos tomás las decisiones.»

- Card 3 --- «Aumentar la productividad»: «La IA hará todo más rápido, el tiempo restante debemos usarlo para aplicar el criterio.»

**S7 --- Sumate**

- Headline: «¿Preparamos juntos a la próxima generación?»

- Labels del formulario: Nombre completo / Organización / Correo electrónico / ¿Cómo querés sumarte? / Mensaje

- Botón: «Enviar»

**S8 --- Footer**

- Copyright: «© Todos los derechos reservados 2026»

- URL: www.joygroup.agency

**9. SEO y Metadatos**

|                          |                                                                                                                                                                                  |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **\<title\>**            | MATER.IA --- Aprender no es cosa del pasado \| GCBA                                                                                                                              |
| **\<meta description\>** | MATER.IA es la iniciativa del Gobierno de la Ciudad de Buenos Aires que lleva la educación en inteligencia artificial a las escuelas mediante un trailer tecnológico itinerante. |
| **\<meta og:title\>**    | MATER.IA --- Preparamos juntos a la próxima generación                                                                                                                           |
| **\<meta og:image\>**    | img/og-image.jpg (imagen de preview para redes, 1200x630px)                                                                                                                      |
| **\<meta og:url\>**      | A definir por el cliente                                                                                                                                                         |
| **Favicon**              | img/logo-materia.svg (o .ico de 32x32)                                                                                                                                           |
| **lang**                 | es-AR                                                                                                                                                                            |

**10. Criterios de Aceptación**

1.  Todos los textos están en HTML, ninguno embebido en imagen.

2.  Los logotipos (BA, MATER.IA, Joy Group) se muestran como imágenes SVG.

3.  La paleta de colores respeta exactamente los valores definidos en sección 4.1.

4.  Las estadísticas de S3 se animan con efecto counter al entrar en viewport.

5.  El formulario de S7 funciona y muestra confirmación de envío.

6.  El sitio se visualiza correctamente desde 375px hasta 1920px.

7.  Score Lighthouse Performance ≥ 85 en mobile.

8.  Las imágenes tienen atributos alt descriptivos.

9.  El documento se carga en menos de 3 segundos en conexión 4G simulada.

10. La navbar se mantiene fija con cambio de fondo al hacer scroll.

*Elaborado por Joy Group Agency --- www.joygroup.agency*

*Documento de uso interno. Todos los derechos reservados 2026.*
