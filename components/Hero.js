import Image from 'next/image';
import { HERO, MENSAJE_GENERAL } from '@/data/site';
import BotonWhatsApp from './BotonWhatsApp';

export default function Hero() {
  return (
    <section id="inicio" style={{ paddingTop: 'calc(6.5rem + var(--barra, 0px))' }} className="relative overflow-hidden bg-blanco">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 md:grid-cols-2 md:pb-24">
        <div>
          <span className="inline-block rounded-full bg-amarillo px-4 py-1.5 font-titulo text-sm font-semibold text-negro">
            {HERO.etiqueta}
          </span>
          <h1 className="mt-5 font-titulo text-[2.6rem] font-bold leading-[1.05] text-negro sm:text-6xl">
            {HERO.titulo}{' '}
            <span className="bg-degrade-logo bg-clip-text text-transparent">{HERO.tituloDestacado}</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-negro/75">{HERO.subtitulo}</p>

          <p className="mt-5 inline-flex items-center rounded-2xl border-2 border-dashed border-naranja bg-amarillo/60 px-4 py-2 font-titulo font-semibold text-negro">
            {HERO.envio}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BotonWhatsApp mensaje={MENSAJE_GENERAL} tamano="grande" variante="negro">
              {HERO.botonWhatsapp}
            </BotonWhatsApp>
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded-full border-2 border-negro px-7 py-4 font-titulo text-lg font-semibold text-negro transition-colors hover:bg-negro hover:text-blanco"
            >
              {HERO.botonProductos} 👇
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-amarillo md:h-56 md:w-56" aria-hidden="true" />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-naranja/90" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-tarjeta">
            <Image
              src={HERO.foto}
              alt={HERO.fotoAlt}
              width={1200}
              height={675}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
