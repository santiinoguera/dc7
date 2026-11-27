'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PROMOS_TEXTOS as T } from '@/data/promos';
import usePromos from './usePromos';

const CLAVE = 'dc7-intro-vista';
const DURACION = 2600; // ms que se ve la animación antes de irse
const SALIDA = 450; // ms del fundido de salida

// Pantalla de entrada con el sello de la campaña activa (si tiene intro: true e imagen).
// Una vez por visita (sessionStorage). Se saltea tocando.
export default function IntroPromo() {
  const { listo, actual } = usePromos(60000);
  const [estado, setEstado] = useState('oculto'); // oculto | visible | saliendo

  const c = actual?.campana;
  const corresponde = listo && c?.intro && c?.imagen;

  useEffect(() => {
    if (!corresponde) return;
    try {
      if (sessionStorage.getItem(CLAVE) === '1') return;
      sessionStorage.setItem(CLAVE, '1');
    } catch {}
    setEstado('visible');
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => setEstado('saliendo'), DURACION);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = overflow;
    };
  }, [corresponde]);

  useEffect(() => {
    if (estado !== 'saliendo') return;
    const t = setTimeout(() => {
      setEstado('oculto');
      document.body.style.overflow = '';
    }, SALIDA);
    return () => clearTimeout(t);
  }, [estado]);

  if (estado === 'oculto' || !c) return null;

  const enExtension = actual.etapa === 'extension';

  return (
    <button
      type="button"
      onClick={() => setEstado('saliendo')}
      aria-label={T.introSaltar}
      className={`fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-negro px-6 text-center transition-opacity duration-500 ${
        estado === 'saliendo' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <span
        className="pointer-events-none absolute h-[22rem] w-[22rem] animate-intro-glow rounded-full bg-naranja/40 blur-3xl motion-reduce:animate-none sm:h-[30rem] sm:w-[30rem]"
        aria-hidden="true"
      />
      <div className="relative w-60 animate-intro-sello motion-reduce:animate-aparecer sm:w-80">
        <Image
          src={c.imagen}
          alt={`${c.nombre} DaleClick7`}
          width={640}
          height={640}
          priority
          className="h-auto w-full drop-shadow-[0_0_40px_rgba(249,127,16,0.6)]"
        />
      </div>
      <p className="relative mt-8 animate-intro-texto font-titulo text-2xl font-bold text-blanco motion-reduce:animate-none sm:text-4xl">
        {T.introTitulo.replace('{campana}', c.nombre)}
      </p>
      {enExtension && (
        <p className="relative mt-2 animate-intro-texto font-titulo text-lg font-semibold text-naranja motion-reduce:animate-none">
          {T.introExtension}
        </p>
      )}
      <span className="absolute bottom-[max(2rem,env(safe-area-inset-bottom))] animate-intro-texto text-sm text-blanco/50 motion-reduce:animate-none">
        {T.introSaltar}
      </span>
    </button>
  );
}
