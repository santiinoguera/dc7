// =============================================================
// PROMOS POR FECHA
// La sección "Promos" muestra sola la campaña activa según la fecha de hoy
// (hora de Argentina). No hace falta tocar ningún componente.
//
// CÓMO FUNCIONA CADA CAMPAÑA
// - fechaInicio / fechaFin: entre esas fechas (inclusive) la campaña se ve.
// - fechaEvento: el día del evento. La cuenta regresiva va hasta ese día a las 00:00.
//   Si fechaFin es después de fechaEvento (ej: Black Friday → Cyber Monday),
//   cuando llega el evento la cuenta pasa a "textoExtension" y cuenta hasta el
//   final de fechaFin. Después salta sola a la campaña siguiente.
// - Todas las fechas en formato 'AAAA-MM-DD'.
// - colorDestacado: SOLO 'naranja', 'negro', 'blanco' o 'amarillo' (la paleta DC7).
// - fechaLimitePedidos: 'AAAA-MM-DD' o null. Si es null no se muestra.
// - productos: precio y precioPromo son números sin puntos (27000) o null.
//     · precio null      → muestra "Consultá precio"
//     · precioPromo null → muestra solo el precio normal
//
// PARA PROBAR UNA FECHA sin esperar: abrí la página con ?fecha=2026-12-20
// (ej: http://localhost:3000/?fecha=2026-12-20). Solo cambia lo que ves vos.
// =============================================================

// Beneficio que aparece en TODAS las campañas (la única promo segura hoy).
export const BENEFICIO_BASE = '🚚 Envío bonificado en Rosario y zona';

// Línea fija debajo de las tarjetas.
export const LINEA_FIJA =
  'Pedidos por encargo, entrega en unos 2 días. Se confirman una vez abonados (transferencia o efectivo).';

// Textos de la sección y de la barra de arriba que no dependen de la campaña.
export const PROMOS_TEXTOS = {
  etiquetaSeccion: 'Promos por fecha',
  faltan: 'Faltan',
  dias: 'días',
  horas: 'hs',
  minutos: 'min',
  segundos: 'seg',
  botonBanner: 'Pedí por WhatsApp',
  botonProducto: 'Lo quiero',
  sinPrecio: 'Consultá precio 💬',
  despuesViene: 'Después viene:',
  limitePedidos: 'Pedidos hasta el',
  // Barra animada de arriba de todo
  barraFaltan: 'faltan',
  barraExtendido: 'extendido',
  barraTermina: 'termina en',
  barraVer: 'Ver promos',
  barraCerrar: 'Cerrar aviso',
};

export const CAMPANAS = [
  {
    id: 'black-friday',
    nombre: 'Black Friday',
    fechaInicio: '2026-11-16', // EDITAR si querés que arranque otro día
    fechaFin: '2026-11-30', // se extiende hasta el Cyber Monday
    fechaEvento: '2026-11-27',
    textoCuenta: 'para el Black Friday',
    textoExtension: '⚡ ¡Extendido hasta el Cyber Monday! Termina en',
    titulo: 'Black Friday DC7: los AirPods que querías, al precio que te va a gustar 🔥',
    subtitulo:
      'Auris, smartwatch y electrónica para darte el gusto (o regalar y quedar como un rey). Avisá rápido que vuela.',
    emoji: '🖤',
    imagen: '/promos/black-friday.png', // sello de la campaña (opcional, null = sin imagen)
    colorDestacado: 'negro',
    mensajeWhatsApp: '¡Hola DC7! 👋 Vengo por la promo de Black Friday 🔥',
    fechaLimitePedidos: null, // EDITAR: ej '2026-11-30'
    productos: [
      // EDITAR: precios y descuentos. Hoy no hay descuento cargado: precioPromo en null.
      { nombre: 'Auriculares tipo AirPods Pro', foto: '/productos/airpods-caja-anc.jpg', precio: 27000, precioPromo: null }, // EDITAR
      { nombre: 'Smartwatch Ultra + 7 mallas', foto: '/productos/smartwatch-ultra-10.jpg', precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Auriculares vincha inalámbricos', foto: '/productos/auriculares-vincha.jpg', precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Power bank 12.000 mAh', foto: '/productos/power-bank.jpg', precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Cable USB-C + cargador 20 W', foto: '/productos/cable-cargador.jpg', precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Freidora de aire Liliana 6,5 L', foto: '/productos/freidora-liliana.jpg', precio: null, precioPromo: null }, // EDITAR
    ],
  },
];

// CAMPAÑAS PAUSADAS: no se muestran. Para activar una, movela (cortar y pegar) al array CAMPANAS de arriba.
export const CAMPANAS_PAUSADAS = [
  {
    id: 'navidad',
    nombre: 'Navidad',
    fechaInicio: '2026-11-20', // EDITAR. Se superpone con Black Friday a propósito: aparece en la tira "Después viene"
    fechaFin: '2026-12-25',
    fechaEvento: '2026-12-25',
    textoCuenta: 'para Navidad',
    textoExtension: '🎄 ¡Hoy es Navidad! Último día de la promo',
    titulo: 'Armá tu Navidad sin gastar un montón 🎄',
    subtitulo:
      'Arbolitos, luces, adornos para el arbolito y regalos para toda la familia. Todo en un solo mensaje.',
    emoji: '🎄',
    colorDestacado: 'naranja',
    mensajeWhatsApp: '¡Hola DC7! 👋 Vengo por la promo de Navidad 🎄',
    fechaLimitePedidos: null, // EDITAR: ej '2026-12-21' para llegar antes del 24
    productos: [
      // EDITAR: sumá arbolitos, luces y adornos cuando tengas fotos (foto: null muestra un emoji).
      { nombre: 'Arbolito de Navidad', foto: null, precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Luces navideñas', foto: null, precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Combo matera + termo', foto: '/productos/matera-combo.jpg', precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Termo estampado con manija', foto: '/productos/termos-estampados.jpg', precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Espumador de leche', foto: '/productos/espumador-leche.jpg', precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Vaso térmico 1,2 L', foto: '/productos/vaso-1200-monos.jpg', precio: null, precioPromo: null }, // EDITAR
    ],
  },
  {
    id: 'reyes',
    nombre: 'Reyes Magos',
    fechaInicio: '2026-12-26', // EDITAR
    fechaFin: '2027-01-06',
    fechaEvento: '2027-01-06',
    textoCuenta: 'para Reyes',
    textoExtension: '👑 ¡Hoy es Reyes! Último día',
    titulo: 'Los Reyes llegan antes de lo que pensás 👑 Dejá resuelto el regalo',
    subtitulo:
      'Regalos para los más chicos y para toda la familia. Que los camellos no te agarren con las manos vacías.',
    emoji: '👑',
    colorDestacado: 'amarillo',
    mensajeWhatsApp: '¡Hola DC7! 👋 Vengo por la promo de Reyes 👑',
    fechaLimitePedidos: null, // EDITAR: ej '2027-01-03'
    productos: [
      // EDITAR: sumá juguetes o regalos para chicos cuando tengas fotos.
      { nombre: 'Botella térmica para el cole', foto: '/productos/botella-fucsia.jpg', precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Botella sport 750 ml', foto: '/productos/botella-sport-lila.jpg', precio: 12600, precioPromo: null }, // EDITAR: precio del cartel del local, confirmalo
      { nombre: 'Vaso térmico con sorbete', foto: '/productos/vaso-termico-lila.jpg', precio: null, precioPromo: null }, // EDITAR
      { nombre: 'Auriculares vincha inalámbricos', foto: '/productos/auriculares-vincha.jpg', precio: null, precioPromo: null }, // EDITAR
    ],
  },
];
