// 27000 → "$27.000"
export function formatoPrecio(valor) {
  if (valor === null || valor === undefined) return null;
  return '$' + Math.round(valor).toLocaleString('es-AR');
}
