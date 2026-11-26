// =============================================================
// SECCIÓN NAVIDAD Y REGALOS
// - DECO_NAVIDAD: tarjetas con emoji (podés sumar "foto" cuando tengas).
// - IDEAS_REGALO: tarjetas con foto. precio null = "Consultá precio".
// =============================================================

export const DECO_NAVIDAD = [
  {
    id: 'arbolitos',
    emoji: '🎄',
    nombre: 'Arbolitos',
    texto: 'De varios tamaños, para el living o el depto.',
    foto: null, // EDITAR: '/productos/arbolito.jpg' cuando tengas la foto
    mensaje: '¡Hola DC7! Quiero consultar por arbolitos de Navidad 🎄',
  },
  {
    id: 'luces',
    emoji: '✨',
    nombre: 'Luces',
    texto: 'Guirnaldas y luces para que brille todo.',
    foto: null, // EDITAR
    mensaje: '¡Hola DC7! Quiero consultar por luces de Navidad ✨',
  },
  {
    id: 'accesorios',
    emoji: '⭐',
    nombre: 'Accesorios para el arbolito',
    texto: 'Bolas, estrellas, moños y todo lo que cuelga.',
    foto: null, // EDITAR
    mensaje: '¡Hola DC7! Quiero consultar por adornos para el arbolito ⭐',
  },
];

export const IDEAS_REGALO = [
  {
    id: 'combo-matera',
    nombre: 'Combo matera + termo',
    para: 'Para el que no suelta el mate',
    precio: null, // EDITAR
    foto: '/productos/matera-combo.jpg',
  },
  {
    id: 'termo-estampado',
    nombre: 'Termo estampado con manija',
    para: 'Para la que quiere algo con onda',
    precio: null, // EDITAR
    foto: '/productos/termos-estampados.jpg',
  },
  {
    id: 'vaso-1200',
    nombre: 'Vaso térmico 1,2 L con moños',
    para: 'Para la amiga que toma agua todo el día',
    precio: null, // EDITAR
    foto: '/productos/vaso-1200-monos.jpg',
  },
  {
    id: 'auris-vincha',
    nombre: 'Auriculares vincha inalámbricos',
    para: 'Para el que vive con música',
    precio: null, // EDITAR
    foto: '/productos/auriculares-vincha.jpg',
  },
];
