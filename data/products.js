// =============================================================
// PRODUCTO ESTRELLA
// - Precio: número entero sin puntos (27000, no 27.000). Se formatea solo.
// - Fotos: van en /public/productos/. Poné acá la ruta empezando con /productos/...
// - Nombres: con el nombre de la marca.
// =============================================================

// ---------- PRODUCTO ESTRELLA ----------
export const PRODUCTO_ESTRELLA = {
  etiqueta: '⭐ Producto estrella',
  nombre: 'AirPods Pro',
  titulo: 'Los auris que todos te preguntan dónde compraste 🎧',
  descripcion:
    'Cancelación de ruido (ANC), estuche de carga y almohadillas de repuesto en 3 tamaños. Se conectan al toque con el celu.',
  caracteristicas: [
    '🔇 Cancelación activa de ruido (ANC)', // EDITAR: confirmá que el modelo que vendés tiene ANC
    '🔋 Estuche de carga incluido',
    '👂 Almohadillas en 3 tamaños',
    '📦 Vienen en caja cerrada',
  ],
  precio: 27000, // EDITAR: precio de ejemplo, poné el precio real
  boton: 'Quiero los míos',
  fotos: [
    { src: '/productos/airpods-abiertos.jpg', alt: 'AirPods Pro con estuche abierto y almohadillas' },
    { src: '/productos/airpods-caja-sello.jpg', alt: 'Caja cerrada de los auriculares con sello ANC' },
    { src: '/productos/airpods-caja-mano.jpg', alt: 'Caja de auriculares en la mano' },
  ],
};

// Los destacados ahora salen de data/catalogo.js (destacado: true).
