import Image from 'next/image';
import { CATEGORIAS } from '@/data/categories';
import { CATEGORIAS_TEXTOS } from '@/data/site';
import { linkWhatsApp } from '@/lib/whatsapp';
import TituloSeccion from './TituloSeccion';

export default function Categories() {
  return (
    <section id="categorias" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-amarillo/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSeccion titulo={CATEGORIAS_TEXTOS.titulo} subtitulo={CATEGORIAS_TEXTOS.subtitulo} />
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {CATEGORIAS.map((c, i) => {
            // Si quedan impares, la última ocupa todo el ancho en el celu
            const sola = CATEGORIAS.length % 2 === 1 && i === CATEGORIAS.length - 1;
            return (
            <li key={c.id} className={sola ? 'col-span-2 md:col-span-1' : ''}>
              <a
                href={linkWhatsApp(c.mensaje)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex ${sola ? 'aspect-[2/1] md:aspect-[4/3]' : 'aspect-[4/5] sm:aspect-[4/3]'} flex-col justify-end overflow-hidden rounded-3xl bg-naranja p-4 shadow-tarjeta sm:p-6`}
              >
                {c.foto ? (
                  <>
                    <Image
                      src={c.foto}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-negro/85 via-negro/25 to-transparent" aria-hidden="true" />
                  </>
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center pb-10 text-7xl sm:text-8xl" aria-hidden="true">
                    {c.emoji}
                  </span>
                )}
                <div className="relative">
                  <h3 className={`font-titulo text-xl font-bold sm:text-2xl ${c.foto ? 'text-blanco' : 'text-negro'}`}>
                    {c.foto && <span aria-hidden="true">{c.emoji} </span>}
                    {c.nombre}
                  </h3>
                  <p className={`mt-1 text-sm ${c.foto ? 'text-blanco/85' : 'text-negro/80'}`}>{c.descripcion}</p>
                </div>
              </a>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
