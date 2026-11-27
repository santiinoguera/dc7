'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CATALOGO_TEXTOS as T, CATEGORIAS, PRODUCTOS } from '@/data/catalogo';
import { formatoPrecio } from '@/lib/format';
import { linkWhatsApp, mensajeProducto } from '@/lib/whatsapp';
import { IconoWhatsApp } from './Icons';
import TituloSeccion from './TituloSeccion';

const TODO = 'todo';
const emojiDe = (cat) => CATEGORIAS.find((c) => c.id === cat)?.emoji || '🛍️';
const quitarAcentos = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Para abrir el catálogo desde otras secciones:
//   <a href="#cat-deco">  → filtra la categoría y baja al catálogo
//   <a href="#prod-freidora-liliana"> → abre la ficha de ese producto
export default function Catalogo() {
  const [activa, setActiva] = useState(TODO);
  const [busqueda, setBusqueda] = useState('');
  const [abierto, setAbierto] = useState(null);
  const seccion = useRef(null);
  const chips = useRef(null);

  const irACategoria = useCallback((id) => {
    setActiva(id);
    setBusqueda('');
    seccion.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // centra el chip activo en la tira de filtros
    // (se mueve solo la tira, sin tocar el scroll de la página)
    requestAnimationFrame(() => {
      const tira = chips.current;
      const chip = tira?.querySelector(`[data-cat="${id}"]`);
      if (tira && chip) tira.scrollTo({ left: chip.offsetLeft - (tira.clientWidth - chip.offsetWidth) / 2, behavior: 'smooth' });
    });
  }, []);

  useEffect(() => {
    const leerHash = () => {
      const h = decodeURIComponent(window.location.hash.slice(1));
      if (h.startsWith('cat-')) {
        const id = h.slice(4);
        if (CATEGORIAS.some((c) => c.id === id)) irACategoria(id);
      } else if (h.startsWith('prod-')) {
        const p = PRODUCTOS.find((x) => x.id === h.slice(5));
        if (p) setAbierto(p);
      } else return;
      // limpia el hash para que tocar lo mismo otra vez vuelva a funcionar
      history.replaceState(null, '', window.location.pathname + window.location.search);
    };
    leerHash();
    window.addEventListener('hashchange', leerHash);
    return () => window.removeEventListener('hashchange', leerHash);
  }, [irACategoria]);

  const lista = useMemo(() => {
    const q = quitarAcentos(busqueda.trim());
    return PRODUCTOS.filter((p) => {
      if (q) return quitarAcentos(`${p.nombre} ${p.descripcion}`).includes(q);
      return activa === TODO || p.cat === activa;
    });
  }, [activa, busqueda]);

  const filtros = [{ id: TODO, nombre: 'Todo', emoji: '✨' }, ...CATEGORIAS];

  return (
    <section id="catalogo" ref={seccion} className="scroll-mt-[calc(4.5rem+var(--barra,0px))] bg-amarillo/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSeccion titulo={T.titulo} subtitulo={T.subtitulo} />

        <label className="relative mx-auto mb-4 block max-w-md">
          <span className="sr-only">{T.buscar}</span>
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true">🔎</span>
          <input
            id="buscar-producto"
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder={T.buscar}
            className="w-full rounded-full border-2 border-negro/10 bg-blanco py-3 pl-11 pr-4 text-base outline-none focus:border-naranja"
          />
        </label>

        {/* Filtros: se deslizan de costado en el celu */}
        <div ref={chips} className="-mx-4 mb-6 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-2" role="tablist" aria-label="Categorías">
            {filtros.map((c) => {
              const on = !busqueda && c.id === activa;
              return (
                <button
                  key={c.id}
                  data-cat={c.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => {
                    setActiva(c.id);
                    setBusqueda('');
                  }}
                  className={`whitespace-nowrap rounded-full px-4 py-2 font-titulo text-sm font-semibold transition-colors ${
                    on ? 'bg-negro text-blanco' : 'bg-blanco text-negro hover:bg-amarillo'
                  }`}
                >
                  <span aria-hidden="true">{c.emoji}</span> {c.nombre}
                </button>
              );
            })}
          </div>
        </div>

        {lista.length === 0 ? (
          <p className="rounded-3xl bg-blanco p-8 text-center font-titulo text-lg">{T.sinResultados}</p>
        ) : (
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {lista.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setAbierto(p)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-3xl bg-blanco text-left shadow-tarjeta transition-transform active:scale-[0.98]"
                >
                  <FotoProducto p={p} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />
                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <h3 className="font-titulo text-[15px] font-semibold leading-snug sm:text-base">{p.nombre}</h3>
                    <Precio p={p} chico />
                    <span className="mt-auto pt-2 font-titulo text-sm font-semibold text-naranja-oscuro group-hover:underline">
                      {T.verMas} →
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 text-center text-sm text-negro/60">{T.pie}</p>
      </div>

      {abierto && <Ficha p={abierto} onClose={() => setAbierto(null)} />}
    </section>
  );
}

function FotoProducto({ p, sizes }) {
  return (
    <div className="relative aspect-square w-full bg-blanco">
      {p.foto ? (
        <Image src={p.foto} alt={p.nombre} fill sizes={sizes} className="object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
      ) : (
        <span className="flex h-full items-center justify-center bg-amarillo text-6xl" aria-hidden="true">
          {emojiDe(p.cat)}
        </span>
      )}
    </div>
  );
}

function Precio({ p, chico }) {
  if (p.precio == null) return <p className="mt-1 text-sm font-semibold text-negro/60">{T.sinPrecio}</p>;
  return (
    <p className={`mt-1 font-titulo font-bold text-naranja-oscuro ${chico ? 'text-lg' : 'text-3xl'}`}>
      {formatoPrecio(p.precio)}
      {p.unidad && <span className="ml-1 text-sm font-semibold text-negro/60">{p.unidad}</span>}
    </p>
  );
}

// Ficha del producto: hoja que sube desde abajo en el celu, ventana centrada en la compu.
function Ficha({ p, onClose }) {
  const cerrarRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    cerrarRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-labelledby="ficha-titulo">
      <button type="button" aria-label={T.cerrar} onClick={onClose} className="absolute inset-0 animate-aparecer bg-negro/60 motion-reduce:animate-none" />
      <div className="relative max-h-[92dvh] w-full max-w-lg animate-subir overflow-y-auto rounded-t-[2rem] bg-blanco pb-[max(1.5rem,env(safe-area-inset-bottom))] motion-reduce:animate-none sm:rounded-[2rem]">
        <button
          ref={cerrarRef}
          type="button"
          onClick={onClose}
          aria-label={T.cerrar}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-negro/80 text-blanco"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <FotoProducto p={p} sizes="(min-width: 640px) 512px, 100vw" />
        <div className="px-5 pt-4 sm:px-6">
          <p className="font-titulo text-sm font-semibold text-negro/60">
            {emojiDe(p.cat)} {CATEGORIAS.find((c) => c.id === p.cat)?.nombre}
          </p>
          <h3 id="ficha-titulo" className="mt-1 font-titulo text-2xl font-bold leading-tight">{p.nombre}</h3>
          <Precio p={p} />
          <p className="mt-3 text-negro/80">{p.descripcion}</p>
          {p.colores?.length > 0 && (
            <div className="mt-4">
              <p className="font-titulo text-sm font-semibold">{T.colores}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {p.colores.map((c) => (
                  <li key={c} className="rounded-full bg-amarillo px-3 py-1 text-sm font-semibold">{c}</li>
                ))}
              </ul>
            </div>
          )}
          <a
            href={linkWhatsApp(mensajeProducto(p.nombre))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-negro px-6 py-4 font-titulo text-lg font-semibold text-blanco active:scale-[0.98]"
          >
            <IconoWhatsApp className="h-5 w-5" />
            {T.boton}
          </a>
        </div>
      </div>
    </div>
  );
}
