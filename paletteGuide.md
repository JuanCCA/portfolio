Guía de uso de la paleta y configuración de Tailwind
🧱 Estructura general

Esta configuración define una paleta semántica, no dependiente de un color fijo.
Los nombres (primary, secondary, accent, etc.) describen la función visual, no el tono.

Esto permite cambiar toda la identidad visual de un proyecto sin alterar el código de componentes.

🪄 Definición de variables

En el CSS principal (por ejemplo app.css o styles.css) se definen variables CSS bajo el bloque @layer base.
Cada variable representa un color semántico con posibles variantes:

--color-primary
--color-primary-light
--color-primary-dark

--color-secondary
--color-secondary-light
--color-secondary-dark

--color-accent
--color-accent-light
--color-accent-dark

--color-background
--color-text
--color-text-inverse


Además, se incluyen variantes automáticas para modo oscuro, aplicadas mediante la clase .dark.

🌗 Modo oscuro

El modo oscuro se activa agregando la clase .dark a la etiqueta html o body.
Ejemplo:

<html class="dark">
  ...
</html>


Cada variable de color tiene su equivalente ajustado para modo oscuro, lo que permite mantener la coherencia visual sin cambiar las clases de los elementos.

🧩 Uso en componentes

Puedes usar las clases personalizadas en cualquier elemento de tu HTML, JSX o plantilla.

Tipo	Clase	Ejemplo de uso
Fondo	.bg-primary	<button class="bg-primary">
Fondo alternativo	.bg-secondary	<section class="bg-secondary">
Texto	.text-primary	<h1 class="text-primary">
Texto de apoyo	.text-secondary	<p class="text-secondary">
Elementos destacados	.text-accent	<a class="text-accent">
Bordes	.border-primary, .border-accent	<div class="border-accent">

Además, se pueden usar variantes como -light o -dark para efectos de hover o contraste:

<button class="bg-primary hover:bg-primary-dark text-text-inverse">
  Enviar
</button>

🧠 Recomendaciones de uso

Usa las clases semánticas, no valores fijos.
Evita escribir bg-[#123456] directamente. Si necesitas otro tono, crea una nueva variable.

Usa las variantes light/dark solo para efectos o jerarquías visuales.
Ejemplo: un botón puede usar bg-primary, pero su hover usa bg-primary-dark.

No repitas el color en código.
Mantén todos los tonos en el bloque :root para facilitar mantenimiento y cambios de branding.

Usa bg-background y text-text como base del layout.
Aseguran contraste y coherencia en todo el diseño.

Modo oscuro: asegúrate de que todos los componentes funcionen correctamente en ambos modos.

⚙️ Ejemplo práctico
<body class="bg-background text-text">
  <header class="bg-primary text-text-inverse p-4">
    <h1>Mi proyecto</h1>
  </header>

  <main class="p-6">
    <p class="text-secondary mb-4">
      Texto secundario o descriptivo.
    </p>

    <button class="bg-accent text-text-inverse hover:bg-accent-dark px-4 py-2 rounded">
      Acción principal
    </button>
  </main>
</body>


Con solo cambiar los valores de --color-* en el CSS, el diseño completo se adapta a una nueva identidad visual.