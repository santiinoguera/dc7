'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PRODUCTO_ESTRELLA as P } from '@/data/products';
import { formatoPrecio } from '@/lib/format';
import { mensajeProducto } from '@/lib/whatsapp';
import BotonWhatsApp from './BotonWhatsApp';

export default function StarProduct() {
  const [fotoActiva, setFotoActiva] = useState(0);
  const foto = P.fotos[fotoActiva];

  return (
    <section id="estrella" className="bg-negro py-16 text-blanco sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-[2rem] bg-blanco">
            <Image
              key={foto.src}
              src={foto.src}
              alt={foto.alt}
              width={1200}
              height={1200}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="mt-4 flex gap-3">
            {P.fotos.map((f, i) => (
              <button
                key={f.src}
                type="button"
                onClick={() => setFotoActiva(i)}
                aria-label={`Ver foto ${i + 1}`}
                aria-pressed={i === fotoActiva}
                className={`overflow-hidden rounded-2xl border-[3px] transition-colors ${
                  i === fotoActiva ? 'border-naranja' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <Image src={f.src} alt="" width={160} height={160} className="h-16 w-16 object-cover sm:h-20 sm:w-20" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-amarillo px-4 py-1.5 font-titulo text-sm font-semibold text-negro">
            {P.etiqueta}
          </span>
          <h2 className="mt-5 font-titulo text-3xl font-bold leading-tight sm:text-5xl">{P.titulo}</h2>
          <p className="mt-2 font-titulo text-lg text-naranja-claro">{P.nombre}</p>
          <p className="mt-4 text-lg text-blanco/80">{P.descripcion}</p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {P.caracteristicas.map((c) => (
              <li key={c} className="rounded-2xl bg-blanco/10 px-4 py-3 text-blanco/90">
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="font-titulo text-5xl font-bold text-naranja">{formatoPrecio(P.precio)}</p>
            <BotonWhatsApp mensaje={mensajeProducto(P.nombre)} variante="naranja" tamano="grande">
              {P.boton}
            </BotonWhatsApp>
          </div>
        </div>
      </div>
    </section>
  );
}
