export default function TituloSeccion({ titulo, subtitulo, centrado = true, claro = false }) {
  return (
    <div className={`mb-8 max-w-2xl ${centrado ? 'mx-auto text-center' : ''}`}>
      <h2 className={`font-titulo text-3xl font-bold leading-tight sm:text-4xl ${claro ? 'text-blanco' : 'text-negro'}`}>
        {titulo}
      </h2>
      {subtitulo && (
        <p className={`mt-3 text-base sm:text-lg ${claro ? 'text-blanco/80' : 'text-negro/70'}`}>{subtitulo}</p>
      )}
    </div>
  );
}
