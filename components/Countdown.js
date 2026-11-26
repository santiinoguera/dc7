import { desarmarTiempo } from '@/lib/promos';
import { PROMOS_TEXTOS as T } from '@/data/promos';

const dosDigitos = (n) => String(n).padStart(2, '0');

// Cuenta regresiva: recibe los ms que faltan (se recalcula afuera cada segundo).
export default function Countdown({ restanteMs, estiloCaja }) {
  const { dias, horas, minutos, segundos } = desarmarTiempo(restanteMs);
  const partes = [
    { valor: dias, etiqueta: T.dias },
    { valor: dosDigitos(horas), etiqueta: T.horas },
    { valor: dosDigitos(minutos), etiqueta: T.minutos },
    { valor: dosDigitos(segundos), etiqueta: T.segundos },
  ];

  return (
    <div className="flex gap-2 sm:gap-3" role="timer" aria-live="off">
      {partes.map((p) => (
        <div key={p.etiqueta} className={`flex min-w-[4.25rem] flex-col items-center rounded-2xl px-2 py-3 sm:min-w-[5.5rem] ${estiloCaja}`}>
          <span className="font-titulo text-3xl font-bold tabular-nums leading-none sm:text-5xl">{p.valor}</span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-wide opacity-80 sm:text-sm">{p.etiqueta}</span>
        </div>
      ))}
    </div>
  );
}
