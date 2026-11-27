'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HERO } from '@/data/site';

// Fotos que pasan solas en el inicio. Se pueden deslizar con el dedo.
// Se pausa mientras el usuario la toca y no se mueve si el celu pide "reducir movimiento".
export default function HeroCarrusel() {
  const pista = useRef(null);
  const [actual, setActual] = useState(0);
  const pausa = useRef(false);
  const total = HERO.fotos.length;

  // Detecta qué foto se está viendo mientras se desliza
  useEffect(() => {
    const el = pista.current;
    if (!el) return;
    const onScroll = () => setActual(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Pasa sola cada HERO.segundos
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      const el = pista.current;
      if (!el || pausa.current || document.hidden) return;
      const sig = (Math.round(el.scrollLeft / el.clientWidth) + 1) % total;
      el.scrollTo({ left: sig * el.clientWidth, behavior: sig === 0 ? 'auto' : 'smooth' });
    }, HERO.segundos * 1000);
    return () => clearInterval(id);
  }, [total]);

  const ir = (i) => pista.current?.scrollTo({ left: i * pista.current.clientWidth, behavior: 'smooth' });

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-blanco shadow-tarjeta">
      <ul
        ref={pista}
        className="flex aspect-[4/3] snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onPointerDown={() => (pausa.current = true)}
        onPointerUp={() => setTimeout(() => (pausa.current = false), 4000)}
        onMouseEnter={() => (pausa.current = true)}
        onMouseLeave={() => (pausa.current = false)}
        aria-label="Productos destacados"
      >
        {HERO.fotos.map((f, i) => (
          <li key={f.src} className="relative h-full w-full shrink-0 snap-center" aria-roledescription="foto" aria-label={`${i + 1} de ${total}`}>
            <a href={f.href} className="block h-full w-full">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-4"
              />
              <span className="absolute bottom-10 left-4 rounded-full bg-negro/85 px-3 py-1 font-titulo text-sm font-semibold text-blanco">
                {f.alt}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {HERO.fotos.map((f, i) => (
          <button
            key={f.src}
            type="button"
            onClick={() => ir(i)}
            aria-label={`Ver foto ${i + 1}`}
            aria-current={i === actual}
            className={`h-2 rounded-full transition-all ${i === actual ? 'w-6 bg-naranja' : 'w-2 bg-negro/25'}`}
          />
        ))}
      </div>
    </div>
  );
}
