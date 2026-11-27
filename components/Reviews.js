import { MOSTRAR_OPINIONES, OPINIONES } from '@/data/reviews';
import { OPINIONES_TEXTOS } from '@/data/site';
import TituloSeccion from './TituloSeccion';

export default function Reviews() {
  if (!MOSTRAR_OPINIONES) return null;
  return (
    <section id="opiniones" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-amarillo/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSeccion titulo={OPINIONES_TEXTOS.titulo} subtitulo={OPINIONES_TEXTOS.subtitulo} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OPINIONES.map((o) => (
            <li key={o.nombre} className="flex flex-col rounded-3xl bg-blanco p-6 shadow-tarjeta">
              <p className="text-naranja" aria-label={`${o.estrellas} de 5 estrellas`}>
                {'★'.repeat(o.estrellas)}
                <span className="text-negro/15">{'★'.repeat(5 - o.estrellas)}</span>
              </p>
              <blockquote className="mt-3 flex-1 text-negro/80">“{o.texto}”</blockquote>
              <p className="mt-4 font-titulo font-semibold">
                {o.nombre}
                {o.barrio && <span className="font-normal text-negro/60"> · {o.barrio}</span>}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
