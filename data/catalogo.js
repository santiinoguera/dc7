// =============================================================
// LISTA DE PRECIOS (sección "Precios")
// - precio: número entero sin puntos (38999, no 38.999). Se formatea solo.
// - unidad: texto chico al lado del precio (ej: 'c/u'). Opcional.
// - nota: aclaración debajo del nombre. Opcional.
// - foto: miniatura opcional ('/productos/x.jpg'). Si no hay, se muestra el emoji de la categoría.
// - Para sacar un producto, borrá su línea. Para sumar uno, copiá una línea y cambiala.
// - El orden de las categorías es el orden de los botones de filtro.
// =============================================================

export const CATALOGO_TEXTOS = {
  titulo: 'Lista de precios 💸',
  subtitulo: 'Elegí la categoría, tocá "Lo quiero" y te respondemos por WhatsApp.',
  boton: 'Lo quiero',
  pie: 'Precios en efectivo o transferencia.',
};

export const CATALOGO = [
  {
    id: 'tecnologia',
    nombre: 'Tecnología y electro',
    emoji: '🔌',
    productos: [
      { nombre: 'Cortadora de pelo Remington', precio: 38999 },
      { nombre: 'Cortadora de pelo patillera', precio: 13920 },
      { nombre: 'Secador de pelo Remington 2.200 W', precio: 58999 },
      { nombre: 'Afeitadora Remington F1 Style', precio: 39999 },
      { nombre: 'Aspiradora de mano 4 en 1', precio: 10500 },
      { nombre: 'Soporte TV 14" a 42"', precio: 4590 },
      { nombre: 'Soporte TV 26" a 63"', precio: 6960 },
      { nombre: 'Licuadora portátil USB 380 ml', precio: 10500, foto: '/productos/mini-licuadora.jpg' },
      { nombre: 'Pava eléctrica Liliana 1,7 L', precio: 35999 },
    ],
  },
  {
    id: 'hogar',
    nombre: 'Hogar y cocina',
    emoji: '🍽️',
    productos: [
      { nombre: 'Bandeja recta 30 × 40 × 10 cm', precio: 4200 },
      { nombre: 'Perchas x6 unidades', precio: 4999 },
      { nombre: 'Canasta matera', precio: 6500 },
      { nombre: 'Manopla para cocina', precio: 2300 },
      { nombre: 'Plato hondo de vidrio', precio: 1300 },
      { nombre: 'Plato playo de vidrio', precio: 1300 },
      { nombre: 'Copa Cristar 615 ml', precio: 2999 },
      { nombre: 'Jarra de vidrio 1,5 L', precio: 7540 },
      { nombre: 'Copa de vidrio', precio: 2900 },
      { nombre: 'Escurridor de metal 2 pisos', precio: 20700 },
      { nombre: 'Organizador Nórdica universal', precio: 3499 },
      { nombre: 'Cubetera con contenedor', precio: 3500 },
      { nombre: 'Cubetera individual', precio: 699, unidad: 'c/u' },
      { nombre: 'Pizzera N.º 35', precio: 3600 },
      { nombre: 'Set utensilios Carol x12', precio: 23500 },
      { nombre: 'Set esponja Skora', precio: 2550 },
    ],
  },
  {
    id: 'termos',
    nombre: 'Termos, mates y botellas',
    emoji: '🧉',
    productos: [
      { nombre: 'Botella deportiva 750 ml con pico de silicona', precio: 11500, foto: '/productos/botella-sport-crema.jpg' },
      { nombre: 'Termo de acero media manija 1 L', precio: 12999 },
      { nombre: 'Mate de algarrobo', precio: 12900 },
      { nombre: 'Termo media manija grabado 1 L', precio: 16900, nota: 'Diseños NOB y Boca' },
    ],
  },
  {
    id: 'navidad',
    nombre: 'Navidad y deco',
    emoji: '🎄',
    productos: [
      { nombre: 'Paraguas', precio: 3999 },
      { nombre: 'Bengalas de cumpleaños x40', precio: 14500 },
      { nombre: 'Gorro de Navidad de felpa', precio: 4350 },
      { nombre: 'Piñas x3', precio: 2499 },
      { nombre: 'Cascabel 3 cm × 9 cm', precio: 2755 },
      { nombre: 'Adorno moño 40 cm', precio: 3199 },
      { nombre: 'Perlas navideñas x5 metros', precio: 4930 }, // las azules no están disponibles
      { nombre: 'Boa 2 metros (modelo 1)', precio: 999 },
      { nombre: 'Boa 2 metros (modelo 2)', precio: 1900 },
      { nombre: 'Boa blanca brillante 2 metros', precio: 1999 },
      { nombre: 'Manzanas x6', precio: 2100 },
      { nombre: 'Luz piojito 3 metros', precio: 1999 },
      { nombre: 'Luz arroz blanca 5 metros', precio: 2500 },
      { nombre: 'Colgante navideño 22 cm', precio: 2699 },
    ],
  },
  {
    id: 'belleza',
    nombre: 'Belleza y cuidado',
    emoji: '💄',
    productos: [
      { nombre: 'Neceser multiuso', precio: 8700 },
      { nombre: 'Espejo aumento x2 de 15 cm', precio: 6525 },
      { nombre: 'Espejo 18 cm con aumento x2', precio: 7599 },
      { nombre: 'Espejo 19 × 19 cm', precio: 6699 },
      { nombre: 'Set esponja Skora', precio: 2550 },
      { nombre: 'Set esponja x4 (modelo 1)', precio: 1950 },
      { nombre: 'Set esponja x4 (modelo 2)', precio: 2250 },
    ],
  },
  {
    id: 'vasos',
    nombre: 'Vasos y accesorios',
    emoji: '🥤',
    productos: [
      { nombre: 'Vaso térmico con sorbete', precio: 6999, nota: 'Llevando 12: $6.215 c/u' },
    ],
  },
];
