import Image from 'next/image';
import { CATEGORIAS } from '@/data/catalogo';
import { CATEGORIAS_TEXTOS } from '@/data/site';
import TituloSeccion from './TituloSeccion';

// Cada tarjeta lleva al catálogo con esa categoría ya filtrada (#cat-<id>).
export default function Categories() {
  return (
    <section id="categorias" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-blanco py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSeccion titulo={CATEGORIAS_TEXTOS.titulo} subtitulo={CATEGORIAS_TEXTOS.subtitulo} />
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {CATEGORIAS.map((c) => (
            <li key={c.id}>
              <a
                href={`#cat-${c.id}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-amarillo p-4 shadow-tarjeta transition-transform active:scale-[0.98] sm:aspect-[4/3] sm:p-6"
              >
                {c.foto && (
                  <Image
                    src={c.foto}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-contain p-4 pb-16 transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="relative rounded-2xl bg-blanco/90 px-3 py-2 backdrop-blur-sm">
                  <h3 className="font-titulo text-lg font-bold leading-tight sm:text-xl">
                    <span aria-hidden="true">{c.emoji} </span>
                    {c.nombre}
                  </h3>
                  <p className="mt-0.5 hidden text-sm text-negro/70 sm:block">{c.descripcion}</p>
                  <span className="mt-1 inline-block font-titulo text-sm font-semibold text-naranja-oscuro">Ver productos →</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
