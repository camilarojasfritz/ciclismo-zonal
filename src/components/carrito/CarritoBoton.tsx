"use client";

import Link from "next/link";
import { useCarrito } from "@/lib/carrito";

/** Ícono del carrito del menú, con la cantidad de unidades. */
export default function CarritoBoton({ className }: { className: string }) {
  const { unidades } = useCarrito();
  return (
    <Link
      href="/carrito"
      aria-label={unidades > 0 ? `Ver carrito, ${unidades} ${unidades === 1 ? "producto" : "productos"}` : "Ver carrito, vacío"}
      className={className}
    >
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h2l2.4 11h10.2L20 7H6.2" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
      <span>Carrito</span>
      {unidades > 0 && (
        <span aria-hidden="true" className="flex min-w-[22px] items-center justify-center rounded-full bg-rojo px-1.5 font-sans text-xs leading-[22px] font-bold tracking-normal text-white">
          {unidades}
        </span>
      )}
    </Link>
  );
}
