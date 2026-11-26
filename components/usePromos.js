'use client';

import { useEffect, useState } from 'react';
import { CAMPANAS } from '@/data/promos';
import { calcularPromos, desfasePrueba } from '@/lib/promos';

// Devuelve { listo, ahora, actual, siguiente } y se actualiza cada `cadaMs`.
// En el servidor (y en el primer render) listo = false y no hay campaña,
// así la fecha se calcula siempre en el navegador del cliente y no queda
// congelada en el día del deploy.
export default function usePromos(cadaMs = 1000) {
  const [ahora, setAhora] = useState(null);

  useEffect(() => {
    const desfase = desfasePrueba();
    const tick = () => setAhora(Date.now() + desfase);
    tick();
    const id = setInterval(tick, cadaMs);
    return () => clearInterval(id);
  }, [cadaMs]);

  if (ahora === null) return { listo: false, ahora: null, actual: null, siguiente: null };
  return { listo: true, ahora, ...calcularPromos(CAMPANAS, ahora) };
}
