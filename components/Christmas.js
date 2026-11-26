import Image from 'next/image';
import { DECO_NAVIDAD, IDEAS_REGALO } from '@/data/navidad';
import { DESTACADOS, NAVIDAD_TEXTOS } from '@/data/site';
import { linkWhatsApp } from '@/lib/whatsapp';
import ProductCard from './ProductCard';
import TituloSeccion from './TituloSeccion';

export default function Christmas() {
  return (
    <section id="navidad" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-negro py-16 text-blanco sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSeccion titulo={NAVIDAD_TEXTOS.titulo} subtitulo={NAVIDAD_TEXTOS.subtitulo} claro />

        <ul className="grid gap-3 sm:grid-cols-3 sm:gap-5">
          {DECO_NAVIDAD.map((d) => (
            <li key={d.id}>
              <a
                href={linkWhatsApp(d.mensaje)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center gap-4 rounded-3xl bg-blanco/10 p-5 transition-colors hover:bg-blanco/15 sm:flex-col sm:items-start sm:p-6"
              >
                {d.foto ? (
                  <Image src={d.foto} alt={d.nombre} width={400} height={400} className="h-20 w-20 rounded-2xl object-cover sm:h-auto sm:w-full" />
                ) : (
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amarillo text-4xl" aria-hidden="true">
                    {d.emoji}
                  </span>
                )}
                <div className="flex-1">
                  <h3 className="font-titulo text-xl font-semibold">{d.nombre}</h3>
                  <p className="mt-1 text-sm text-blanco/75">{d.texto}</p>
                  <span className="mt-2 inline-block font-titulo text-sm font-semibold text-naranja">
                    {NAVIDAD_TEXTOS.boton} →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <h3 className="mb-6 mt-14 text-center font-titulo text-2xl font-bold sm:text-3xl">{NAVIDAD_TEXTOS.tituloRegalos}</h3>
        <ul className="grid grid-cols-2 gap-3 text-negro sm:gap-5 lg:grid-cols-4">
          {IDEAS_REGALO.map((r) => (
            <li key={r.id}>
              <ProductCard
                nombre={r.nombre}
                detalle={r.para}
                precio={r.precio}
                foto={r.foto}
                textoBoton={DESTACADOS.boton}
                textoSinPrecio={DESTACADOS.sinPrecio}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
