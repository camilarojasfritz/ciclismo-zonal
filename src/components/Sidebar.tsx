import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";
import BarraBusqueda from "./buscar/BarraBusqueda";
import CarritoBoton from "./carrito/CarritoBoton";
import NavLinks, { NavLinksBase } from "./NavLinks";
import { Boton, Wordmark } from "./ui";

const botonCarrito =
  "flex min-h-[46px] items-center justify-center gap-2.5 rounded-[10px] border border-linea px-3.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-white";

export default function Sidebar() {
  return (
    <header className="border-b border-linea-suave bg-negro lg:w-[236px] lg:shrink-0 lg:border-r lg:border-b-0">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 lg:sticky lg:top-0 lg:h-dvh lg:max-h-[820px] lg:overflow-y-auto lg:flex-col lg:flex-nowrap lg:items-stretch lg:p-7">
        <Link href="/" aria-label="Ciclismo Zonal, inicio" className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2.5">
          <Image src="/logo.png" alt="" width={84} height={84} priority className="size-14 rounded-full object-cover lg:size-[84px]" />
          <Wordmark />
        </Link>

        <nav aria-label="Principal" className="order-last flex w-full flex-wrap gap-x-5 lg:order-none lg:w-auto lg:flex-col">
          <Suspense fallback={<NavLinksBase />}>
            <NavLinks />
          </Suspense>
        </nav>

        <div className="flex w-full flex-wrap items-center gap-2.5 lg:w-auto lg:flex-col lg:flex-nowrap lg:items-stretch lg:gap-3">
          <BarraBusqueda className="min-w-0 flex-1 basis-40 lg:flex-none lg:basis-auto" />
          <CarritoBoton className={botonCarrito} />
          <Boton href={linkWhatsApp(mensajes.consulta)} tono="whatsapp" tamano="sm" className="min-h-[48px] gap-2">
            <Image src="/whatsapp.png" alt="" width={24} height={24} className="size-6 shrink-0" />
            Pedir por WhatsApp
          </Boton>
        </div>
      </div>
    </header>
  );
}
