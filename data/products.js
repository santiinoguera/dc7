// =============================================================
// PRODUCTOS DE LA LANDING
// - Precios: número entero sin puntos (27000, no 27.000). Se formatea solo.
// - Si un precio es null, la tarjeta muestra "Consultá precio".
// - Fotos: van en /public/productos/. Poné acá la ruta empezando con /productos/...
// - Nombres: no pongas marcas que no sean originales (usá "tipo AirPods", etc.).
// =============================================================

// ---------- PRODUCTO ESTRELLA ----------
export const PRODUCTO_ESTRELLA = {
  etiqueta: '⭐ Producto estrella',
  nombre: 'Auriculares tipo AirPods Pro',
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
    { src: '/productos/airpods-abiertos.jpg', alt: 'Auriculares tipo AirPods Pro con estuche abierto y almohadillas' },
    { src: '/productos/airpods-caja-sello.jpg', alt: 'Caja cerrada de los auriculares con sello ANC' },
    { src: '/productos/airpods-caja-mano.jpg', alt: 'Caja de auriculares en la mano' },
  ],
};

// ---------- PRODUCTOS DESTACADOS (grilla de 8) ----------
export const PRODUCTOS = [
  {
    id: 'freidora-liliana',
    nombre: 'Freidora de aire Liliana Digifry 6,5 L',
    detalle: 'Digital, 8 programas y ventana para ver cómo va',
    precio: null, // EDITAR: poné el precio
    foto: '/productos/freidora-liliana.jpg',
  },
  {
    id: 'smartwatch-ultra',
    nombre: 'Smartwatch Ultra + 7 mallas',
    detalle: 'Pantalla grande de 2,09" y mallas para combinar',
    precio: null, // EDITAR: poné el precio
    foto: '/productos/smartwatch-mallas.jpg',
  },
  {
    id: 'vaso-termico-manija',
    nombre: 'Vaso térmico con manija y sorbete',
    detalle: 'Frío o caliente por horas. Varios colores',
    precio: null, // EDITAR: poné el precio
    foto: '/productos/vaso-termico-fucsia.jpg',
  },
  {
    id: 'botella-600',
    nombre: 'Botella térmica 600 ml',
    detalle: 'Pico con traba, ideal para la mochila',
    precio: 13900, // EDITAR: tomado del cartel de la foto del local, confirmalo
    foto: '/productos/botella-600-lila.jpg',
  },
  {
    id: 'botella-sport-750',
    nombre: 'Botella sport 750 ml',
    detalle: 'Con manija y pico rebatible',
    precio: 11500, // de la lista de precios del 26/11/2026
    foto: '/productos/botella-sport-crema.jpg',
  },
  {
    id: 'espumador',
    nombre: 'Espumador de leche inalámbrico',
    detalle: 'Recargable USB-C, 3 velocidades y soporte',
    precio: null, // EDITAR: poné el precio
    foto: '/productos/espumador-leche.jpg',
  },
  {
    id: 'matera',
    nombre: 'Matera de cuerina',
    detalle: 'Entra el termo, el mate y la yerba. Negra o marrón',
    precio: null, // EDITAR: poné el precio
    foto: '/productos/matera-negra.jpg',
  },
  {
    id: 'power-bank',
    nombre: 'Power bank 12.000 mAh',
    detalle: 'Carga rápida, con cables incluidos',
    precio: null, // EDITAR: poné el precio
    foto: '/productos/power-bank.jpg',
  },
];
