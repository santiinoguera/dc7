'use client';

import { useState } from 'react';
import { PREGUNTAS } from '@/data/faq';
import { FAQ_TEXTOS } from '@/data/site';
import { IconoMas } from './Icons';
import TituloSeccion from './TituloSeccion';

export default function Faq() {
  const [abierta, setAbierta] = useState(0);

  return (
    <section id="preguntas" className="scroll-mt-20 bg-blanco py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <TituloSeccion titulo={FAQ_TEXTOS.titulo} subtitulo={FAQ_TEXTOS.subtitulo} />
        <ul className="flex flex-col gap-3">
          {PREGUNTAS.map((p, i) => {
            const estaAbierta = abierta === i;
            const id = `faq-${i}`;
            return (
              <li key={p.pregunta} className={`rounded-3xl transition-colors ${estaAbierta ? 'bg-amarillo' : 'bg-amarillo/40'}`}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setAbierta(estaAbierta ? -1 : i)}
                    aria-expanded={estaAbierta}
                    aria-controls={id}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-titulo text-lg font-semibold"
                  >
                    {p.pregunta}
                    <span className="shrink-0 rounded-full bg-negro p-1 text-blanco">
                      <IconoMas abierto={estaAbierta} />
                    </span>
                  </button>
                </h3>
                <div id={id} hidden={!estaAbierta} className="px-6 pb-6 text-negro/80">
                  {p.respuesta}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
