import { FLOTANTE, MENSAJE_GENERAL } from '@/data/site';
import { linkWhatsApp } from '@/lib/whatsapp';
import { IconoWhatsApp } from './Icons';

export default function WhatsAppFloat() {
  return (
    <a
      href={linkWhatsApp(MENSAJE_GENERAL)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={FLOTANTE.etiqueta}
      className="fixed bottom-5 right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-naranja text-negro shadow-[0_10px_30px_-6px_rgba(249,127,16,0.7)] ring-4 ring-blanco transition-transform hover:scale-105 active:scale-95"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
    >
      <IconoWhatsApp className="h-8 w-8" />
    </a>
  );
}
