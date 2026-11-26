/** @type {import('tailwindcss').Config} */
// Paleta DC7: usá SIEMPRE estos nombres (bg-naranja, text-negro, bg-amarillo...).
// No agregues colores sueltos en los componentes.
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        naranja: {
          DEFAULT: '#F97F10', // naranja del logo (centro del degradé)
          oscuro: '#E85A06', // hover / texto naranja sobre blanco
          claro: '#F8A219', // punta amarilla del degradé del logo
        },
        negro: '#141414',
        blanco: '#FFFFFF',
        amarillo: {
          DEFAULT: '#FFF3C4', // amarillo clarito, el detalle distintivo
          fuerte: '#FFE38A',
        },
      },
      fontFamily: {
        titulo: ['"Fredoka Variable"', 'system-ui', 'sans-serif'],
        cuerpo: ['"Nunito Variable"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'degrade-logo': 'linear-gradient(135deg, #F95F09 0%, #F97F10 50%, #F8A219 100%)',
      },
      boxShadow: {
        tarjeta: '0 10px 30px -12px rgba(20, 20, 20, 0.18)',
      },
    },
  },
  plugins: [],
};
