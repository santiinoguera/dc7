import { linkWhatsApp } from '@/lib/whatsapp';
import { IconoWhatsApp } from './Icons';

const VARIANTES = {
  negro: 'bg-negro text-blanco hover:bg-black',
  naranja: 'bg-naranja text-negro hover:bg-naranja-claro',
  blanco: 'bg-blanco text-negro hover:bg-amarillo',
  borde: 'border-2 border-negro text-negro hover:bg-negro hover:text-blanco',
};

const TAMANOS = {
  chico: 'px-4 py-2 text-sm',
  normal: 'px-5 py-3 text-base',
  grande: 'px-7 py-4 text-lg',
};

// Botón redondeado que abre WhatsApp con el mensaje prellenado.
export default function BotonWhatsApp({
  mensaje,
  children,
  variante = 'negro',
  tamano = 'normal',
  className = '',
  icono = true,
}) {
  return (
    <a
      href={linkWhatsApp(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-titulo font-semibold transition-colors duration-150 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja ${VARIANTES[variante]} ${TAMANOS[tamano]} ${className}`}
    >
      {icono && <IconoWhatsApp className="h-5 w-5 shrink-0" />}
      <span>{children}</span>
    </a>
  );
}
