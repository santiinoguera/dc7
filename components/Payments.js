import { PAGOS } from '@/data/site';

export default function Payments() {
  return (
    <section id="pagos" className="scroll-mt-20 bg-blanco py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-[2rem] bg-negro p-8 text-center text-blanco sm:p-12">
          <h2 className="font-titulo text-3xl font-bold sm:text-4xl">{PAGOS.titulo}</h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {PAGOS.metodos.map((m) => (
              <li key={m.titulo} className="rounded-full bg-blanco px-6 py-3 font-titulo text-lg font-semibold text-negro">
                <span aria-hidden="true">{m.emoji}</span> {m.titulo}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-md text-blanco/80">{PAGOS.aclaracion}</p>
        </div>
      </div>
    </section>
  );
}
