"use client";

import { useEffect, useId, useState, type ReactNode } from "react";

/**
 * Envoltorio del menú.
 * - En compu no cambia nada: el menú queda fijo al costado.
 * - En celular solo se ve una barra con el logo y el botón de tres líneas;
 *   al tocarlo se abre el mismo menú a pantalla completa.
 */
export default function MenuMovil({ logo, children }: { logo: ReactNode; children: ReactNode }) {
  const id = useId();
  const [abierto, setAbierto] = useState(false);

  // Con el menú abierto: no se desplaza la página de atrás y Escape lo cierra
  useEffect(() => {
    if (!abierto) return;
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", alTeclear);
    return () => {
      document.body.style.overflow = previo;
      window.removeEventListener("keydown", alTeclear);
    };
  }, [abierto]);

  const botonBarra = "flex size-12 items-center justify-center rounded-[10px] text-white";

  return (
    <header className="sticky top-0 z-40 border-b border-linea-suave bg-negro lg:static lg:z-auto lg:w-[236px] lg:shrink-0 lg:border-r lg:border-b-0">
      {/* Barra del celular */}
      <div className="flex items-center justify-between gap-4 px-4 py-2 lg:hidden">
        {logo}
        <button type="button" onClick={() => setAbierto(true)} aria-label="Abrir menú" aria-expanded={abierto} aria-controls={id} className={botonBarra}>
          <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* El menú: pantalla completa en celular cuando está abierto, columna fija en compu */}
      <div
        id={id}
        // al tocar un link o enviar la búsqueda, el menú se cierra solo
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setAbierto(false);
        }}
        onSubmit={() => setAbierto(false)}
        className={`${
          abierto ? "fixed inset-0 z-50 flex overflow-y-auto" : "hidden"
        } flex-col gap-7 bg-negro px-5 pt-2 pb-8 lg:sticky lg:inset-auto lg:top-0 lg:z-auto lg:flex lg:h-dvh lg:max-h-[820px] lg:justify-between lg:gap-6 lg:overflow-y-auto lg:p-7`}
      >
        <div className="-mx-1 flex items-center justify-between gap-4 lg:hidden">
          {logo}
          <button type="button" onClick={() => setAbierto(false)} aria-label="Cerrar menú" className={botonBarra}>
            <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </header>
  );
}
