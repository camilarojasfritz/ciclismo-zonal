"use client";

import { useEffect, useState } from "react";
import { agregar } from "@/lib/carrito";

/** Suma el producto al carrito y lo confirma un momento en el mismo botón. */
export default function BotonAgregar({ slug, nombre, grande = false }: { slug: string; nombre: string; grande?: boolean }) {
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
      className={`inline-flex items-center justify-center rounded-[10px] font-display font-bold uppercase tracking-[0.12em] text-white transition-colors ${
        grande ? "min-h-[60px] px-8 text-[13px]" : "min-h-11 px-4 text-[11px]"
      } ${agregado ? "bg-rojo" : grande ? "bg-rojo hover:bg-rojo-hover" : "bg-negro hover:bg-grafito"}`}
    >
      <span aria-live="polite">{agregado ? "Agregado ✓" : grande ? "Agregar al carrito" : "Agregar"}</span>
    </button>
  );
}
