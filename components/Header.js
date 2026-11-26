'use client';

import Image from 'next/image';
import { useState } from 'react';
import { HEADER, MENSAJE_GENERAL } from '@/data/site';
import BotonWhatsApp from './BotonWhatsApp';
import { IconoMenu } from './Icons';
import usePromos from './usePromos';

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const { actual } = usePromos(30000);
  const links = HEADER.menu.filter((l) => !l.soloConPromo || actual);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-negro/5 bg-blanco/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#inicio" className="flex items-center gap-2" aria-label="DaleClick7, volver al inicio">
          <Image src="/logo.png" alt="Logo DaleClick7" width={44} height={44} priority className="h-11 w-11" />
          <span className="hidden font-titulo text-xl font-bold sm:inline">
            DaleClick<span className="text-naranja-oscuro">7</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Secciones">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-titulo font-medium text-negro/80 transition-colors hover:text-naranja-oscuro ${
                l.soloConPromo ? 'rounded-full bg-amarillo px-3 py-1 text-negro' : ''
              }`}
            >
              {l.soloConPromo ? `🔥 ${l.texto}` : l.texto}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <BotonWhatsApp mensaje={MENSAJE_GENERAL} tamano="chico">
            <span className="hidden min-[380px]:inline">{HEADER.boton}</span>
            <span className="min-[380px]:hidden">Pedí</span>
          </BotonWhatsApp>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            className="rounded-full p-2 text-negro md:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          >
            <IconoMenu abierto={abierto} />
          </button>
        </div>
      </div>

      {abierto && (
        <nav id="menu-movil" className="border-t border-negro/5 bg-blanco px-4 pb-4 md:hidden" aria-label="Secciones">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAbierto(false)}
                  className="block py-3 font-titulo text-lg font-medium text-negro"
                >
                  {l.soloConPromo ? `🔥 ${l.texto}` : l.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
