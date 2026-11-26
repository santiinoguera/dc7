// Lógica de "Promos por fecha". Los datos viven en /data/promos.js.
// Todas las fechas se interpretan en hora de Argentina (UTC-3, sin horario de verano).

const OFFSET_AR = '-03:00';
const DIA_MS = 24 * 60 * 60 * 1000;

// '2026-11-27' → instante de las 00:00 de ese día en Argentina.
export function inicioDelDia(fecha) {
  return new Date(`${fecha}T00:00:00${OFFSET_AR}`).getTime();
}

// '2026-11-30' → instante de las 00:00 del día SIGUIENTE (fin del día inclusive).
export function finDelDia(fecha) {
  return inicioDelDia(fecha) + DIA_MS;
}

// Para cada campaña activa calcula hacia dónde cuenta y en qué etapa está.
function estadoCampana(campana, ahora) {
  const inicio = inicioDelDia(campana.fechaInicio);
  const fin = finDelDia(campana.fechaFin);
  if (ahora < inicio || ahora >= fin) return null;

  const evento = inicioDelDia(campana.fechaEvento);
  if (ahora < evento) {
    return { campana, objetivo: evento, etapa: 'previa' };
  }
  // Ya llegó el día del evento: cuenta hasta el final de la campaña (extensión).
  return { campana, objetivo: fin, etapa: 'extension' };
}

/**
 * Devuelve { actual, siguiente } para el instante `ahora` (ms).
 * - actual: la campaña activa cuya cuenta regresiva termina antes (la más próxima).
 * - siguiente: la que viene después (otra activa superpuesta, o la próxima en empezar).
 * Si no hay ninguna activa, actual es null y la sección se oculta.
 */
export function calcularPromos(campanas, ahora) {
  const activas = campanas
    .map((c) => estadoCampana(c, ahora))
    .filter(Boolean)
    .sort((a, b) => a.objetivo - b.objetivo);

  const actual = activas[0] || null;
  if (!actual) return { actual: null, siguiente: null };

  // Siguiente: otra activa (superposición) o, si no hay, la próxima que arranca.
  let siguiente = activas[1]?.campana || null;
  if (!siguiente) {
    siguiente =
      campanas
        .filter((c) => inicioDelDia(c.fechaInicio) > ahora)
        .sort((a, b) => inicioDelDia(a.fechaInicio) - inicioDelDia(b.fechaInicio))[0] || null;
  }

  return { actual, siguiente };
}

// Desarma milisegundos en días / horas / minutos / segundos.
export function desarmarTiempo(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    dias: Math.floor(total / 86400),
    horas: Math.floor((total % 86400) / 3600),
    minutos: Math.floor((total % 3600) / 60),
    segundos: total % 60,
  };
}

// '2026-12-21' → '21/12'
export function fechaCorta(fecha) {
  const [, mes, dia] = fecha.split('-');
  return `${dia}/${mes}`;
}

// Lee ?fecha=AAAA-MM-DD de la URL para simular otro día (solo para probar).
// Devuelve un desfase en ms para sumarle a Date.now(), o 0.
export function desfasePrueba() {
  if (typeof window === 'undefined') return 0;
  const fecha = new URLSearchParams(window.location.search).get('fecha');
  if (!fecha || !/^\d{4}-\d{2}-\d{2}$/.test(fecha)) return 0;
  // Simula ese día a las 12:00 de Argentina.
  return inicioDelDia(fecha) + 12 * 60 * 60 * 1000 - Date.now();
}
