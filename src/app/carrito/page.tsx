import type { Metadata } from "next";
import Link from "next/link";
import Pedido from "@/components/carrito/Pedido";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Armá tu pedido y envialo por WhatsApp a Ciclismo Zonal.",
  robots: { index: false },
};

export default function Carrito() {
  return (
    <section className="bg-[radial-gradient(ellipse_60%_60%_at_90%_0%,rgba(214,40,40,0.26)_0%,rgba(214,40,40,0)_70%)]">
      <div className="mx-auto flex max-w-[1320px] flex-col px-8 pt-14 pb-26">
        <nav aria-label="Ruta de navegación" className="flex flex-wrap gap-2.5 text-sm text-humo">
          <Link href="/" className="hover:text-white">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white">Carrito</span>
        </nav>
        <div className="mt-5.5">
          <Eyebrow>Pedido por WhatsApp</Eyebrow>
        </div>
        <h1 className="mt-5.5 font-display text-[clamp(36px,5.4vw,84px)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase">
          Tu carrito
        </h1>
        <p className="mt-5.5 mb-10 max-w-[560px] text-lg text-[#e4e5e8]">
          Juntá todo lo que te interesa y mandanos el pedido completo. No se paga por acá: el
          local te confirma precio, stock y entrega por WhatsApp.
        </p>
        <Pedido />
      </div>
    </section>
  );
}
