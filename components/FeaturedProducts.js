import { PRODUCTOS } from '@/data/products';
import { DESTACADOS } from '@/data/site';
import ProductCard from './ProductCard';
import TituloSeccion from './TituloSeccion';

export default function FeaturedProducts() {
  return (
    <section id="productos" className="scroll-mt-[calc(5rem+var(--barra,0px))] bg-blanco py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <TituloSeccion titulo={DESTACADOS.titulo} subtitulo={DESTACADOS.subtitulo} />
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {PRODUCTOS.map((p) => (
            <li key={p.id}>
              <ProductCard {...p} textoBoton={DESTACADOS.boton} textoSinPrecio={DESTACADOS.sinPrecio} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
