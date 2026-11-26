import Image from 'next/image';
import { CONTACTO, FOOTER, MENSAJE_GENERAL } from '@/data/site';
import { linkWhatsApp } from '@/lib/whatsapp';
import { IconoInstagram, IconoWhatsApp } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-negro pb-28 pt-14 text-blanco sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo DaleClick7" width={56} height={56} className="h-14 w-14" />
            <span className="font-titulo text-2xl font-bold">
              DaleClick<span className="text-naranja">7</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-blanco/70">{FOOTER.frase}</p>
        </div>

        <ul className="flex flex-col gap-3">
          <li>
            <a href={CONTACTO.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-naranja">
              <IconoInstagram className="h-6 w-6" />
              {CONTACTO.instagramUsuario}
            </a>
          </li>
          <li>
            <a href={linkWhatsApp(MENSAJE_GENERAL)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-naranja">
              <IconoWhatsApp className="h-6 w-6" />
              {CONTACTO.whatsappVisible}
            </a>
          </li>
        </ul>

        <ul className="flex flex-col gap-3 text-blanco/80">
          <li>{FOOTER.zona}</li>
          <li>{FOOTER.horarioPrefijo} {CONTACTO.horario}</li>
          <li>{FOOTER.pagos}</li>
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-blanco/10 px-4 pt-6 text-sm text-blanco/50">
        © {new Date().getFullYear()} {FOOTER.derechos}
      </p>
    </footer>
  );
}
