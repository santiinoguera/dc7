import Image from 'next/image';
import { formatoPrecio } from '@/lib/format';
import { mensajeProducto } from '@/lib/whatsapp';
import BotonWhatsApp from './BotonWhatsApp';

export default function ProductCard({ nombre, detalle, precio, foto, textoBoton, textoSinPrecio }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-blanco shadow-tarjeta">
      <div className="relative aspect-square bg-amarillo">
        <Image src={foto} alt={nombre} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="font-titulo text-base font-semibold leading-snug sm:text-lg">{nombre}</h3>
        {detalle && <p className="mt-1 hidden text-sm text-negro/60 sm:block">{detalle}</p>}
        <p className={`my-3 font-titulo font-bold ${precio != null ? 'text-xl sm:text-2xl' : 'text-sm text-negro/60'}`}>
          {precio != null ? formatoPrecio(precio) : textoSinPrecio}
        </p>
        <BotonWhatsApp mensaje={mensajeProducto(nombre)} tamano="chico" className="mt-auto w-full">
          {textoBoton}
        </BotonWhatsApp>
      </div>
    </article>
  );
}
