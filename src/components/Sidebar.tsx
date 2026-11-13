import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";
import BarraBusqueda from "./buscar/BarraBusqueda";
import CarritoBoton from "./carrito/CarritoBoton";
import MenuMovil from "./MenuMovil";
import NavLinks, { NavLinksBase } from "./NavLinks";
import { Boton, Wordmark } from "./ui";

const botonCarrito =
  "flex min-h-[46px] items-center justify-center gap-2.5 rounded-[10px] border border-linea px-3.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-white";

/** Menú del sitio: columna fija en compu, botón de tres líneas en celular (ver MenuMovil). */
export default function Sidebar() {
  return (
    <MenuMovil
      logo={
        <Link href="/" aria-label="Ciclismo Zonal, inicio" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={48} height={48} priority className="size-12 rounded-full object-cover" />
          <Wordmark />
        </Link>
      }
    >
      <Link href="/" aria-label="Ciclismo Zonal, inicio" className="hidden flex-col items-start gap-2.5 lg:flex">
        <Image src="/logo.png" alt="" width={84} height={84} priority className="size-[84px] rounded-full object-cover" />
        <Wordmark />
      </Link>

      <nav aria-label="Principal" className="flex flex-col">
        <Suspense fallback={<NavLinksBase />}>
          <NavLinks />
        </Suspense>
      </nav>

      <div className="flex flex-col gap-3">
        <BarraBusqueda />
        <CarritoBoton className={botonCarrito} />
        <Boton href={linkWhatsApp(mensajes.consulta)} tono="whatsapp" tamano="sm" className="min-h-[48px] gap-2">
          <Image src="/whatsapp.png" alt="" width={24} height={24} className="size-6 shrink-0" />
          Pedir por WhatsApp
        </Boton>
      </div>
    </MenuMovil>
  );
}
