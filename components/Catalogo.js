'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CATALOGO, CATALOGO_TEXTOS as T } from '@/data/catalogo';
import { formatoPrecio } from '@/lib/format';
import { linkWhatsApp, mensajeProducto } from '@/lib/whatsapp';
import { IconoWhatsApp } from './Icons';
import TituloSeccion from './TituloSeccion';

export default function Catalogo() {
  const [activa, setActiva] = useState(CATALOGO[0].id);
  const categoria = CATALOGO.find((c) => c.id === activa) || CATALOGO[0];

  return (
    <section id="precios" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-amarillo/50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <TituloSeccion titulo={T.titulo} subtitulo={T.subtitulo} />

        {/* Filtros por categoría: se deslizan de costado en el celu */}
        <div className="-mx-4 mb-6 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-2" role="tablist" aria-label="Categorías">
            {CATALOGO.map((c) => {
              const on = c.id === activa;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="lista-precios"
                  onClick={() => setActiva(c.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 font-titulo text-sm font-semibold transition-colors ${
                    on ? 'bg-negro text-blanco' : 'bg-blanco text-negro hover:bg-amarillo'
                  }`}
                >
                  <span aria-hidden="true">{c.emoji}</span> {c.nombre}
                  <span className={`ml-1.5 text-xs ${on ? 'text-blanco/60' : 'text-negro/50'}`}>{c.productos.length}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ul id="lista-precios" role="tabpanel" className="divide-y divide-negro/5 overflow-hidden rounded-3xl bg-blanco shadow-tarjeta">
          {categoria.productos.map((p, i) => (
            <li key={`${categoria.id}-${i}`} className="flex items-center gap-3 px-4 py-3 sm:px-5">
              {p.foto ? (
                <Image src={p.foto} alt="" width={96} height={96} className="h-12 w-12 shrink-0 rounded-2xl object-cover" />
              ) : (
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amarillo text-xl" aria-hidden="true">
                  {categoria.emoji}
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="font-titulo font-semibold leading-snug">{p.nombre}</p>
                {p.nota && <p className="text-sm text-negro/60">{p.nota}</p>}
                <p className="font-titulo text-lg font-bold text-naranja-oscuro">
                  {formatoPrecio(p.precio)}
                  {p.unidad && <span className="ml-1 text-sm font-semibold text-negro/60">{p.unidad}</span>}
                </p>
              </div>
              <a
                href={linkWhatsApp(mensajeProducto(p.nombre))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${T.boton}: ${p.nombre}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-negro px-3.5 py-2 font-titulo text-sm font-semibold text-blanco transition-colors hover:bg-black active:scale-[0.98]"
              >
                <IconoWhatsApp className="h-4 w-4" />
                <span>{T.boton}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-center text-sm text-negro/60">{T.pie}</p>
      </div>
    </section>
  );
}
