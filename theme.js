// theme.js
export const Theme = {
  primary: {
    bg: "bg-rose-600", // Rosa profundo - elegante y moderno
    text: "text-rose-50",
    border: "border-rose-400"
  },
  secondary: {
    bg: "bg-slate-700", // Gris pizarra - sofisticado y neutro
    text: "text-slate-100",
    border: "border-slate-500"
  },
  tertiary: {
    bg: "bg-emerald-600", // Verde esmeralda - fresco y natural
    text: "text-emerald-50",
    border: "border-emerald-400"
  },
  accent: {
    bg: "bg-amber-500", // Ámbar - cálido pero no típico amarillo
    text: "text-amber-900",
    border: "border-amber-400"
  },
  confirm: {
    bg: "bg-teal-600", // Verde azulado - alternativa al verde típico
    text: "text-teal-50",
    border: "border-teal-400"
  },
  cancel: {
    bg: "bg-red-500", // Rojo clásico pero necesario para cancel
    text: "text-red-50",
    border: "border-red-400"
  },
  warning: {
    bg: "bg-orange-600", // Naranja intenso - llamativo pero elegante
    text: "text-orange-50",
    border: "border-orange-400"
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