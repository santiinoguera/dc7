import { COMO_COMPRAR } from '@/data/site';
import TituloSeccion from './TituloSeccion';

export default function HowToBuy() {
  return (
    <section id="como-comprar" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-blanco py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSeccion titulo={COMO_COMPRAR.titulo} subtitulo={COMO_COMPRAR.subtitulo} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMO_COMPRAR.pasos.map((p, i) => (
            <li key={p.titulo} className="relative rounded-3xl bg-amarillo/60 p-6">
              <span className="absolute right-5 top-4 font-titulo text-5xl font-bold text-naranja/40" aria-hidden="true">
                {i + 1}
              </span>
              <span className="text-4xl" aria-hidden="true">
                {p.emoji}
              </span>
              <h3 className="mt-3 font-titulo text-xl font-bold">
                <span className="sr-only">Paso {i + 1}: </span>
                {p.titulo}
              </h3>
              <p className="mt-1 text-negro/70">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
