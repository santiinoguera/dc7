import Image from 'next/image';
import { PRODUCTOS } from '@/data/catalogo';
import { DESTACADOS } from '@/data/site';
import { formatoPrecio } from '@/lib/format';
import TituloSeccion from './TituloSeccion';

// Muestra los productos con destacado: true. Al tocar, abre su ficha en el catálogo.
export default function FeaturedProducts() {
  const lista = PRODUCTOS.filter((p) => p.destacado);
  return (
    <section id="productos" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-blanco py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="px-4">
          <TituloSeccion titulo={DESTACADOS.titulo} subtitulo={DESTACADOS.subtitulo} />
        </div>
        {/* Tira deslizable en el celu, grilla en la compu */}
        <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {lista.map((p) => (
            <li key={p.id} className="w-[44%] shrink-0 snap-start sm:w-auto">
              <a href={`#prod-${p.id}`} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-blanco shadow-tarjeta transition-transform active:scale-[0.98]">
                <div className="relative aspect-square bg-blanco">
                  <Image src={p.foto} alt={p.nombre} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 44vw" className="object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <h3 className="font-titulo text-[15px] font-semibold leading-snug sm:text-base">{p.nombre}</h3>
                  <p className="mt-1 font-titulo text-lg font-bold text-naranja-oscuro">{formatoPrecio(p.precio)}</p>
                  <span className="mt-auto pt-2 font-titulo text-sm font-semibold text-negro/70 group-hover:underline">{DESTACADOS.boton} →</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
