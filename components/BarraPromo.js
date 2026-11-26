'use client';

import { useEffect, useState } from 'react';
import { PROMOS_TEXTOS as T } from '@/data/promos';
import { desarmarTiempo } from '@/lib/promos';
import usePromos from './usePromos';

const ALTO = '2.5rem'; // alto de la barra; el header y el hero bajan esto mismo
const CLAVE_CERRADA = 'dc7-barra-cerrada';

const dd = (n) => String(n).padStart(2, '0');

// Barra fina arriba de todo con la cuenta regresiva de la campaña activa.
// Se oculta sola si no hay campaña, y el usuario la puede cerrar (por esta visita).
export default function BarraPromo() {
  const { actual, ahora } = usePromos(1000);
  const [cerrada, setCerrada] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(CLAVE_CERRADA) === '1') setCerrada(true);
    } catch {}
  }, []);

  const visible = Boolean(actual) && !cerrada;

  // Le avisa al resto de la página cuánto espacio ocupa la barra.
  useEffect(() => {
    document.documentElement.style.setProperty('--barra', visible ? ALTO : '0px');
  }, [visible]);

  if (!visible) return null;

  const c = actual.campana;
  const { dias, horas, minutos, segundos } = desarmarTiempo(actual.objetivo - ahora);
  const enExtension = actual.etapa === 'extension';

  const cerrar = () => {
    setCerrada(true);
    try {
      sessionStorage.setItem(CLAVE_CERRADA, '1');
    } catch {}
  };

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 animate-barra-entra overflow-hidden bg-negro text-blanco motion-reduce:animate-none"
      style={{ height: ALTO }}
      role="region"
      aria-label={`Promo ${c.nombre}`}
    >
      {/* brillo que cruza */}
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-brillo bg-gradient-to-r from-transparent via-naranja/25 to-transparent motion-reduce:hidden"
        aria-hidden="true"
      />
      <a
        href="#promos"
        className="relative mx-auto flex h-full max-w-6xl items-center justify-center gap-2 pl-4 pr-10 font-titulo text-[13px] font-semibold sm:gap-3 sm:text-sm"
      >
        <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-naranja opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-naranja" />
        </span>

        <span className="truncate uppercase tracking-wide text-naranja">
          {enExtension ? `⚡ ${c.nombre} ${T.barraExtendido}` : `🔥 ${c.nombre}`}
        </span>

        <span className="hidden text-blanco/60 min-[400px]:inline">{enExtension ? T.barraTermina : T.barraFaltan}</span>

        <span className="flex items-center gap-0.5 rounded-full bg-blanco/10 px-2.5 py-0.5 tabular-nums" aria-live="off">
          {dias > 0 && <span>{dias}d&nbsp;</span>}
          <span>{dd(horas)}</span>:<span>{dd(minutos)}</span>:
          <span key={segundos} className="inline-block animate-salto text-naranja-claro motion-reduce:animate-none">
            {dd(segundos)}
          </span>
        </span>

        <span className="hidden whitespace-nowrap text-amarillo underline-offset-4 hover:underline sm:inline">{T.barraVer} →</span>
      </a>

      <button
        type="button"
        onClick={cerrar}
        aria-label={T.barraCerrar}
        className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-blanco/60 hover:bg-blanco/10 hover:text-blanco"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}
