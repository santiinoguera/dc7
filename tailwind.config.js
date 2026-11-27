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
      keyframes: {
        // Barra de promo: entra desde arriba
        'barra-entra': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        // Número que cambia: pequeño salto
        salto: {
          '0%': { transform: 'translateY(-35%)', opacity: '0.4' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // Brillo que cruza la barra
        brillo: {
          '0%': { transform: 'translateX(-100%)' },
          '60%, 100%': { transform: 'translateX(250%)' },
        },
        // Sello de la campaña flotando suave
        aparecer: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        subir: { '0%': { transform: 'translateY(100%)' }, '100%': { transform: 'translateY(0)' } },
        flotar: {
          '0%, 100%': { transform: 'translateY(0) rotate(-4deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
      },
      animation: {
        'barra-entra': 'barra-entra 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        salto: 'salto 0.25s ease-out',
        brillo: 'brillo 3.5s ease-in-out infinite',
        flotar: 'flotar 4s ease-in-out infinite',
        aparecer: 'aparecer 0.2s ease-out both',
        subir: 'subir 0.32s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
