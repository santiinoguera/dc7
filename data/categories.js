// =============================================================
// CATEGORÍAS
// - "foto" es opcional: si es null se muestra el emoji grande.
// - "mensaje" es lo que se precarga en WhatsApp al tocar la categoría.
// =============================================================

export const CATEGORIAS = [
  {
    id: 'bazar',
    nombre: 'Bazar',
    emoji: '🧉',
    descripcion: 'Termos, mates, vasos y botellas',
    foto: '/productos/pared-termos.jpg',
    mensaje: '¡Hola DC7! Quiero ver qué tienen en bazar 🧉',
  },
  {
    id: 'regaleria',
    nombre: 'Regalería',
    emoji: '🎁',
    descripcion: 'Para quedar bien sin pensar mucho',
    foto: '/productos/combo-regalo-mesa.jpg',
    mensaje: '¡Hola DC7! Busco un regalo, ¿qué me recomiendan? 🎁',
  },
  {
    id: 'electronica',
    nombre: 'Electrónica',
    emoji: '🎧',
    descripcion: 'Auris, smartwatch, cargadores',
    foto: '/productos/auriculares-vincha.jpg',
    mensaje: '¡Hola DC7! Quiero ver qué tienen en electrónica 🎧',
  },
  {
    id: 'deco',
    nombre: 'Deco',
    emoji: '🪴',
    descripcion: 'Detalles para darle onda a tu casa',
    foto: null, // EDITAR: agregá una foto de deco cuando la tengas
    mensaje: '¡Hola DC7! Quiero ver qué tienen de deco 🪴',
  },
  {
    id: 'hogar',
    nombre: 'Hogar',
    emoji: '🏠',
    descripcion: 'Freidoras, cocina y más',
    foto: '/productos/freidora-liliana-cocina.jpg',
    mensaje: '¡Hola DC7! Quiero ver qué tienen para el hogar 🏠',
  },
  {
    id: 'navidad',
    nombre: 'Navidad',
    emoji: '🎄',
    descripcion: 'Arbolitos, luces y adornos',
    foto: null, // EDITAR: agregá una foto navideña cuando la tengas
    mensaje: '¡Hola DC7! Quiero ver las cosas de Navidad 🎄',
  },
];
