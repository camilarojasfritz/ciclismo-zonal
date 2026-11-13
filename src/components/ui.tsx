import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-3 rounded-[10px] font-display font-bold uppercase tracking-[0.12em] transition-colors";

const tonos = {
  rojo: "bg-rojo text-white hover:bg-rojo-hover",
  negro: "bg-negro text-white hover:bg-grafito",
  whatsapp: "bg-whatsapp text-negro hover:brightness-95",
  bordeClaro: "border border-white text-white hover:bg-white hover:text-negro",
  bordeOscuro: "border border-negro text-negro hover:bg-negro hover:text-white",
} as const;

const tamanos = {
  lg: "min-h-[60px] px-8 text-[13px]",
  md: "min-h-[54px] px-7 text-[13px]",
  sm: "min-h-[44px] px-4 text-[11px]",
} as const;

type BotonProps = {
  href: string;
  children: ReactNode;
  tono?: keyof typeof tonos;
  tamano?: keyof typeof tamanos;
  className?: string;
};

/** Botón con forma de link. Los links externos (WhatsApp, Maps) abren en otra pestaña. */
export function Boton({ href, children, tono = "rojo", tamano = "md", className = "" }: BotonProps) {
  const clases = `${base} ${tonos[tono]} ${tamanos[tamano]} ${className}`;
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={clases}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={clases}>
      {children}
    </Link>
  );
}

/** Etiqueta chica en mayúsculas con la línea roja adelante. */
export function Eyebrow({ children, oscuro = false }: { children: ReactNode; oscuro?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3.5 font-display text-[11px] font-semibold uppercase tracking-[0.26em] ${
        oscuro ? "text-tinta" : "text-niebla"
      }`}
    >
      <span aria-hidden="true" className="inline-block h-[3px] w-12 bg-rojo" />
      {children}
    </div>
  );
}

/** "CONCEPT STORE / CICLISMO ZONAL" con la letra del cartel del local. */
export function Wordmark({ tamano = "sm" }: { tamano?: "sm" | "md" | "lg" }) {
  const t = {
    sm: ["text-[8.5px]", "text-[13px]", "gap-1.5"],
    md: ["text-[9px]", "text-[15px]", "gap-[7px]"],
    lg: ["text-[clamp(11px,1.1vw,15px)]", "text-[clamp(24px,3.2vw,44px)]", "gap-2.5"],
  }[tamano];
  return (
    <span className={`flex flex-col leading-none font-display uppercase text-white ${t[2]}`}>
      <span className={`${t[0]} font-semibold tracking-[0.3em] whitespace-nowrap`}>Concept Store</span>
      <span className={`${t[1]} font-bold tracking-[0.24em] whitespace-nowrap`}>Ciclismo Zonal</span>
    </span>
  );
}

export function FlechaIcono() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
