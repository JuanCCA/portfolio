// theme.js
export const Theme = {
  moss: {
    bg: "bg-green-700",
    text: "text-green-100",
    border: "border-green-500"
  },
  purple: {
    bg: "bg-purple-800",
    text: "text-purple-100",
    border: "border-purple-500"
  },
  yellow: {
    bg: "bg-yellow-600",
    text: "text-yellow-100",
    border: "border-yellow-400"
  }
};

// Función para cambiar tema dinámicamente (opcional)
export function applyTheme(themeName) {
  const theme = Theme[themeName];
  if (!theme) return;

  // Ejemplo: aplicar a un elemento root
  const root = document.documentElement;
  root.dataset.bg = theme.bg;
  root.dataset.text = theme.text;
  root.dataset.border = theme.border;
}