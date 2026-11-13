"use client";

import { useEffect, useState } from "react";
import { agregar } from "@/lib/carrito";

/** Suma el producto al carrito y lo confirma un momento en el mismo botón. */
export default function BotonAgregar({ slug, nombre }: { slug: string; nombre: string }) {
  const [agregado, setAgregado] = useState(false);

  useEffect(() => {
    if (!agregado) return;
    const t = setTimeout(() => setAgregado(false), 1600);
    return () => clearTimeout(t);
  }, [agregado]);

  return (
    <button
      type="button"
      onClick={() => {
        agregar(slug);
        setAgregado(true);
      }}
      aria-label={`Agregar ${nombre} al carrito`}
      className={`inline-flex min-h-11 items-center justify-center rounded-[10px] px-4 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors ${
        agregado ? "bg-rojo" : "bg-negro hover:bg-grafito"
      }`}
    >
      <span aria-live="polite">{agregado ? "Agregado ✓" : "Agregar"}</span>
    </button>
  );
}
