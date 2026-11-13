import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Resultados from "@/components/buscar/Resultados";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Buscá bicicletas, repuestos, accesorios e indumentaria en Ciclismo Zonal.",
  robots: { index: false },
};

export default function Buscar() {
  return (
    <section className="bg-[radial-gradient(ellipse_60%_60%_at_90%_0%,rgba(214,40,40,0.26)_0%,rgba(214,40,40,0)_70%)]">
      <div className="mx-auto flex min-h-[70vh] max-w-[1320px] flex-col px-8 pt-14 pb-26">
        <nav aria-label="Ruta de navegación" className="flex flex-wrap gap-2.5 text-sm text-humo">
          <Link href="/" className="hover:text-white">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white">Buscar</span>
        </nav>
        <div className="mt-5.5">
          <Eyebrow>La tienda</Eyebrow>
        </div>
        <h1 className="mt-5.5 mb-8 font-display text-[clamp(36px,5.4vw,84px)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase">
          Buscar
        </h1>
        {/* La búsqueda lee la dirección (?q=), que recién se conoce en el navegador */}
        <Suspense fallback={<p className="text-niebla">Cargando buscador…</p>}>
          <Resultados />
        </Suspense>
      </div>
    </section>
  );
}
