"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useId, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { buscarProductos } from "@/lib/buscar";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";

const sugerencias = ["Scott", "Mountain bike", "Ruta", "Casco", "Ruedas", "Bolso"];

/** Campo grande de búsqueda con resultados que se actualizan mientras se escribe. */
export default function Resultados() {
  const id = useId();
  const router = useRouter();
  const inicial = useSearchParams().get("q") ?? "";
  const [consulta, setConsulta] = useState(inicial);

  const cambiar = (valor: string) => {
    setConsulta(valor);
    // la dirección acompaña a la búsqueda, así se puede compartir o volver atrás
    router.replace(valor.trim() ? `/buscar?q=${encodeURIComponent(valor.trim())}` : "/buscar", { scroll: false });
  };

  const limpia = consulta.trim();
  const resultados = buscarProductos(limpia);

  return (
    <>
      <form role="search" className="relative max-w-[720px]" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor={`${id}-q`} className="sr-only">
          Buscar productos
        </label>
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-niebla">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          id={`${id}-q`}
          type="search"
          value={consulta}
          onChange={(e) => cambiar(e.target.value)}
          placeholder="Bici, casco, ruedas, marca…"
          autoComplete="off"
          autoFocus
          className="min-h-16 w-full rounded-[14px] border border-linea bg-grafito pr-5 pl-14 text-xl text-white placeholder:text-humo focus:border-white"
        />
      </form>

      <p aria-live="polite" className="mt-8 font-display text-xs font-bold uppercase tracking-[0.16em]">
        {limpia
          ? `${resultados.length} ${resultados.length === 1 ? "resultado" : "resultados"} para “${limpia}”`
          : "Escribí qué estás buscando"}
      </p>

      {!limpia && (
        <div className="mt-5 flex flex-wrap gap-2.5">
          {sugerencias.map((s) => (
            <button key={s} type="button" onClick={() => cambiar(s)} className="inline-flex min-h-11 items-center rounded-full border border-[#55585f] px-5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#e4e5e8] transition-colors hover:border-white">
              {s}
            </button>
          ))}
        </div>
      )}

      {resultados.length > 0 && (
        <ul className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-5">
          {resultados.map(({ producto }) => (
            <li key={producto.slug}>
              <ProductCard producto={producto} />
            </li>
          ))}
        </ul>
      )}

      {limpia && resultados.length === 0 && (
        <div className="mt-6 flex max-w-[720px] flex-col items-start gap-4 rounded-[14px] border border-linea bg-grafito p-8">
          <h2 className="font-display text-xl font-extrabold uppercase">No encontramos nada con eso</h2>
          <p className="text-niebla">
            Probá con otra palabra o escribinos: puede que lo tengamos en el local y todavía no esté cargado.
          </p>
          <a href={linkWhatsApp(mensajes.buscando(limpia))} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[54px] items-center rounded-[10px] bg-whatsapp px-7 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-negro transition hover:brightness-95">
            Preguntar por WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
