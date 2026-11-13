"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navegacion } from "@/lib/site";

/** Links del menú lateral. Marca en rojo la sección en la que estás. */
export default function NavLinks({ pathname: fijo }: { pathname?: string }) {
  const actual = usePathname();
  const pathname = fijo ?? actual;
  return (
    <>
      {navegacion.map((item) => {
        const activo = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={activo ? "page" : undefined}
            className={`block border-l-[3px] py-2 pl-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-white ${
              activo ? "border-rojo text-white" : "border-transparent text-niebla"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

/** Mismo menú sin sección activa, mientras se resuelve la ruta. */
export function NavLinksBase() {
  return (
    <>
      {navegacion.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="block border-l-[3px] border-transparent py-2 pl-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-niebla"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
