import { ENVIOS } from '@/data/site';
import TituloSeccion from './TituloSeccion';

export default function Shipping() {
  return (
    <section id="envios" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-amarillo/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSeccion titulo={ENVIOS.titulo} subtitulo={ENVIOS.subtitulo} />
        <ul className="grid gap-4 md:grid-cols-3">
          {ENVIOS.items.map((e) => (
            <li
              key={e.titulo}
              className={`rounded-3xl p-6 ${e.destacado ? 'bg-naranja text-negro' : 'bg-blanco shadow-tarjeta'}`}
            >
              <span className="text-4xl" aria-hidden="true">
                {e.emoji}
              </span>
              <h3 className="mt-3 font-titulo text-xl font-bold">{e.titulo}</h3>
              <p className={`mt-1 ${e.destacado ? 'text-negro/85' : 'text-negro/70'}`}>{e.texto}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center font-titulo text-lg font-semibold">{ENVIOS.nota}</p>
      </div>
    </section>
  );
}
