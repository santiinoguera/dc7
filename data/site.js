// =============================================================
// DATOS GENERALES Y TEXTOS DE LA LANDING DC7
// Todo el texto que se ve en la página sale de acá (o de los otros
// archivos de /data). Cambiá el texto entre comillas y listo.
// =============================================================

export const CONTACTO = {
  // Número en formato internacional, sin "+", sin espacios.
  whatsapp: '543412624326',
  whatsappVisible: '341 262-4326',
  instagram: 'https://instagram.com/daleclick7',
  instagramUsuario: '@daleclick7',
  horario: 'De 9 a 20 hs', // EDITAR: sumá los días si querés (ej: 'Lunes a sábados de 9 a 20 hs')
  zona: 'Rosario, Zona Sur',
};

// Mensaje que se precarga cuando alguien toca un botón general de WhatsApp.
export const MENSAJE_GENERAL = '¡Hola DC7! 👋 Vengo de la página y quiero hacer un pedido.';

export const SEO = {
  titulo: 'DaleClick7 · Bazar, regalería y electrónica en Rosario',
  descripcion:
    'Tienda online de Rosario, Zona Sur. Bazar, regalería, electrónica, deco y hogar. Pedís por WhatsApp, pagás en efectivo o transferencia. Envío bonificado en Rosario y zona.',
  url: 'https://daleclick7.vercel.app', // EDITAR cuando tengas la URL final (o dominio propio)
};

export const HEADER = {
  boton: 'Pedí por WhatsApp',
  menu: [
    { texto: 'Promos', href: '#promos', soloConPromo: true }, // se oculta solo si no hay campaña activa
    { texto: 'Productos', href: '#productos' },
    { texto: 'Cómo comprar', href: '#como-comprar' },
    { texto: 'Envíos', href: '#envios' },
    { texto: 'Preguntas', href: '#preguntas' },
  ],
};

export const HERO = {
  etiqueta: '📍 Rosario · Zona Sur',
  titulo: 'Todo lo que buscás,',
  tituloDestacado: 'a un click 👆',
  subtitulo:
    'Bazar, regalería, electrónica, deco y hogar. Elegís, nos escribís y te lo llevamos. Así de fácil, sin vueltas.',
  envio: '🚚 Envío bonificado en Rosario y zona',
  botonWhatsapp: 'Pedí por WhatsApp',
  botonProductos: 'Ver productos',
  foto: '/productos/termos-mates.jpg',
  fotoAlt: 'Termos y mates de colores en un estante de DC7',
};

export const DESTACADOS = {
  titulo: 'Lo que más sale 🔥',
  subtitulo: 'Una muestra de lo que tenemos. Si buscás algo que no ves, escribinos que seguro lo conseguimos.',
  boton: 'Pedir por WhatsApp',
  sinPrecio: 'Consultá precio 💬',
};

export const CATEGORIAS_TEXTOS = {
  titulo: '¿Qué andás buscando?',
  subtitulo: 'Tocá una categoría y preguntanos qué hay. Te mandamos fotos y precios al toque.',
};

export const NAVIDAD_TEXTOS = {
  titulo: 'Navidad y regalos 🎄',
  subtitulo: 'Armá el arbolito, decorá la casa y resolvé los regalos en un solo lugar. Sin correr el 24 a la tarde.',
  tituloRegalos: 'Ideas de regalo 🎁',
  boton: 'Consultar',
};

export const COMO_COMPRAR = {
  titulo: 'Cómo comprar',
  subtitulo: 'Cuatro pasos y listo. Más fácil que armar el mate.',
  pasos: [
    { emoji: '👀', titulo: 'Elegís', texto: 'Mirá los productos acá o en nuestro Instagram.' },
    { emoji: '💬', titulo: 'Nos escribís', texto: 'Mandanos un WhatsApp con lo que querés y te confirmamos.' },
    { emoji: '💸', titulo: 'Abonás', texto: 'Por transferencia o en efectivo. Así de simple.' },
    { emoji: '📦', titulo: 'Recibís o retirás', texto: 'Te lo llevamos o lo pasás a buscar por Zona Sur.' },
  ],
};

export const ENVIOS = {
  titulo: 'Envíos y retiros',
  subtitulo: 'Trabajamos por encargo: la entrega es en unos 2 días desde que se confirma el pedido.',
  items: [
    {
      emoji: '🛵',
      titulo: 'Rosario y zona',
      texto: 'Envío bonificado. Sí, no pagás el envío.',
      destacado: true,
    },
    {
      emoji: '🇦🇷',
      titulo: 'Todo el país',
      texto: 'Costo aproximado de $3.000 a $5.000, a confirmar según destino.', // EDITAR si cambian los costos
    },
    {
      emoji: '🤝',
      titulo: 'Retiro',
      texto: 'Por Zona Sur o en un punto de encuentro que arreglemos.',
    },
  ],
  nota: '⏱️ Pedidos por encargo · Entrega en unos 2 días',
};

export const PAGOS = {
  titulo: 'Medios de pago',
  metodos: [
    { emoji: '🏦', titulo: 'Transferencia' },
    { emoji: '💵', titulo: 'Efectivo' },
  ],
  aclaracion: 'Solamente efectivo o transferencia. Los pedidos se confirman una vez abonados.',
};

export const OPINIONES_TEXTOS = {
  titulo: 'Lo que dicen los que ya compraron',
  subtitulo: 'Gente del barrio que ya le dio click 😉',
};

export const FAQ_TEXTOS = {
  titulo: 'Preguntas frecuentes',
  subtitulo: '¿Te quedó alguna duda? Seguro está acá. Si no, escribinos.',
};

export const FOOTER = {
  frase: 'Tienda de bazar y más. Hecha en Rosario, con mucho mate de por medio. 🧉',
  zona: '📍 Entregas en Rosario, Zona Sur y alrededores',
  horarioPrefijo: '🕘',
  pagos: '💸 Efectivo o transferencia',
  derechos: 'DaleClick7',
};

export const FLOTANTE = {
  etiqueta: 'Escribinos por WhatsApp',
};
