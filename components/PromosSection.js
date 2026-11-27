'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PRODUCTOS } from '@/data/catalogo';
import { BENEFICIO_BASE, LINEA_FIJA, PROMOS_TEXTOS as T } from '@/data/promos';
import { formatoPrecio } from '@/lib/format';
import { fechaCorta } from '@/lib/promos';
import { mensajeProductoPromo } from '@/lib/whatsapp';
import BotonWhatsApp from './BotonWhatsApp';
import Countdown from './Countdown';
import usePromos from './usePromos';

// Estilos por colorDestacado. Solo colores de la paleta DC7.
const TEMAS = {
  negro: {
    banner: 'bg-negro text-blanco',
    acento: 'text-naranja',
    caja: 'bg-blanco/10 text-blanco',
    chip: 'bg-amarillo text-negro',
    boton: 'naranja',
  },
  naranja: {
    banner: 'bg-degrade-logo text-negro',
    acento: 'text-blanco',
    caja: 'bg-blanco text-negro',
    chip: 'bg-negro text-blanco',
    boton: 'negro',
  },
  amarillo: {
    banner: 'bg-amarillo text-negro',
    acento: 'text-naranja-oscuro',
    caja: 'bg-blanco text-negro',
    chip: 'bg-negro text-blanco',
    boton: 'negro',
  },
  blanco: {
    banner: 'bg-blanco text-negro border-2 border-negro',
    acento: 'text-naranja-oscuro',
    caja: 'bg-amarillo text-negro',
    chip: 'bg-negro text-blanco',
    boton: 'negro',
  },
};

const INICIALES = 12; // cuántos productos se ven antes de tocar "Ver todos"

// Lista de productos de la campaña: propia o todo el catálogo.
function productosDe(c) {
  if (c.productos !== 'catalogo') return c.productos;
  const promo = c.preciosPromo || {};
  return PRODUCTOS.map((p) => ({ nombre: p.nombre, foto: p.foto, precio: p.precio, precioPromo: promo[p.id] ?? null }));
}

export default function PromosSection() {
  const { listo, ahora, actual, siguiente } = usePromos(1000);
  const [todos, setTodos] = useState(false);

  // Sin campaña activa (o antes de calcular en el navegador): no se renderiza nada.
  if (!listo || !actual) return null;

  const c = actual.campana;
  const productos = productosDe(c);
  const tema = TEMAS[c.colorDestacado] || TEMAS.naranja;
  const restante = actual.objetivo - ahora;
  const textoCuenta = actual.etapa === 'previa' ? `${T.faltan} ${c.textoCuenta}` : c.textoExtension;

  return (
    <section id="promos" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-blanco py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Banner */}
        <div className={`relative overflow-hidden rounded-[2rem] p-6 sm:p-10 ${tema.banner}`}>
          {!c.imagen && (
            <span className="pointer-events-none absolute -right-4 -top-6 select-none text-[9rem] leading-none opacity-15 sm:text-[12rem]" aria-hidden="true">
              {c.emoji}
            </span>
          )}

          {c.imagen && (
            <>
              {/* resplandor naranja detrás del sello */}
              <span className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-naranja/30 blur-3xl sm:h-96 sm:w-96" aria-hidden="true" />
              <div className="relative mx-auto mb-6 w-44 animate-flotar motion-reduce:animate-none sm:absolute sm:right-8 sm:top-8 sm:mb-0 sm:w-56 lg:right-12 lg:w-72">
                <Image
                  src={c.imagen}
                  alt={`${c.nombre} DaleClick7`}
                  width={640}
                  height={640}
                  sizes="(min-width: 1024px) 288px, (min-width: 640px) 224px, 176px"
                  className="h-auto w-full drop-shadow-[0_10px_30px_rgba(249,127,16,0.45)]"
                />
              </div>
            </>
          )}

          <div className={`relative ${c.imagen ? 'sm:pr-64 lg:pr-80' : ''}`}>
            <div className="flex flex-wrap gap-2">
              <span className={`rounded-full px-4 py-1.5 font-titulo text-sm font-semibold ${tema.chip}`}>
                {c.emoji} {T.etiquetaSeccion}: {c.nombre}
              </span>
              <span className="rounded-full bg-blanco px-4 py-1.5 font-titulo text-sm font-semibold text-negro">
                {BENEFICIO_BASE}
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl font-titulo text-3xl font-bold leading-tight sm:text-5xl">{c.titulo}</h2>
            <p className="mt-3 max-w-2xl text-base opacity-85 sm:text-lg">{c.subtitulo}</p>

            <p className={`mt-6 font-titulo text-lg font-semibold ${tema.acento}`}>{textoCuenta}</p>
            <div className="mt-3">
              <Countdown restanteMs={restante} estiloCaja={tema.caja} />
            </div>

            {c.fechaLimitePedidos && (
              <p className="mt-4 font-semibold">
                📅 {T.limitePedidos} {fechaCorta(c.fechaLimitePedidos)}
              </p>
            )}

            <BotonWhatsApp mensaje={c.mensajeWhatsApp} variante={tema.boton} tamano="grande" className="mt-7 w-full sm:w-auto">
              {T.botonBanner}
            </BotonWhatsApp>
          </div>
        </div>

        {/* Productos de la campaña */}
        {productos.length > 0 && (
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {(todos ? productos : productos.slice(0, INICIALES)).map((p) => (
              <li key={p.nombre} className="flex flex-col overflow-hidden rounded-3xl bg-blanco shadow-tarjeta">
                <div className="relative aspect-square bg-blanco">
                  {p.foto ? (
                    <Image src={p.foto} alt={p.nombre} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain p-2" />
                  ) : (
                    <span className="flex h-full items-center justify-center bg-amarillo text-6xl" aria-hidden="true">
                      {c.emoji}
                    </span>
                  )}
                  {p.precioPromo != null && (
                    <span className="absolute left-3 top-3 rounded-full bg-naranja px-3 py-1 font-titulo text-xs font-bold text-negro">
                      PROMO
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <h3 className="font-titulo text-base font-semibold leading-snug sm:text-lg">{p.nombre}</h3>
                  <Precio precio={p.precio} precioPromo={p.precioPromo} />
                  <BotonWhatsApp
                    mensaje={mensajeProductoPromo(p.nombre, c.nombre)}
                    tamano="chico"
                    className="mt-auto w-full"
                  >
                    {T.botonProducto}
                  </BotonWhatsApp>
                </div>
              </li>
            ))}
          </ul>
        )}

        {productos.length > INICIALES && (
          <button
            type="button"
            onClick={() => setTodos((v) => !v)}
            className="mx-auto mt-6 flex rounded-full border-2 border-negro px-6 py-3 font-titulo font-semibold transition-colors hover:bg-negro hover:text-blanco"
          >
            {todos ? T.verMenos : T.verTodos.replace('{n}', productos.length)}
          </button>
        )}

        {/* Línea fija */}
        <p className="mt-6 rounded-2xl bg-amarillo px-5 py-4 text-center font-semibold text-negro">⏱️ {LINEA_FIJA}</p>

        {/* Tira con la campaña que sigue */}
        {siguiente && (
          <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border-2 border-dashed border-negro/20 px-5 py-4">
            <p className="font-titulo text-lg">
              <span className="text-negro/60">{T.despuesViene}</span>{' '}
              <strong className="font-semibold">
                {siguiente.nombre} {siguiente.emoji}
              </strong>
            </p>
            <span className="shrink-0 text-sm text-negro/60">{fechaCorta(siguiente.fechaEvento)}</span>
          </div>
        )}
      </div>
    </section>
  );
}

function Precio({ precio, precioPromo }) {
  if (precio == null && precioPromo == null) {
    return <p className="my-3 text-sm font-semibold text-negro/60">{T.sinPrecio}</p>;
  }
  if (precioPromo != null) {
    return (
      <p className="my-3 flex flex-wrap items-baseline gap-x-2">
        <span className="font-titulo text-xl font-bold text-naranja-oscuro sm:text-2xl">{formatoPrecio(precioPromo)}</span>
        {precio != null && <span className="text-sm text-negro/50 line-through">{formatoPrecio(precio)}</span>}
      </p>
    );
  }
  return <p className="my-3 font-titulo text-xl font-bold sm:text-2xl">{formatoPrecio(precio)}</p>;
}
