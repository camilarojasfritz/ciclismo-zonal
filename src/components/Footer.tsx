import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { linkWhatsApp } from "@/lib/whatsapp";
import { Wordmark } from "./ui";

const titulo = "mb-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-white";
const link = "py-1.5 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-negro">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-12 px-8 pt-18 pb-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-10">
          <div className="flex flex-col items-start gap-4">
            <Image src="/logo.png" alt="Ciclismo Zonal Bike Store" width={132} height={132} className="size-[132px] rounded-full object-cover" />
            <Wordmark tamano="md" />
            <span className="text-sm text-humo">Atendido por amantes del ciclismo.</span>
          </div>
          <nav aria-label="Tienda" className="flex flex-col text-[15px] text-niebla">
            <strong className={titulo}>Tienda</strong>
            {["Bicicletas", "Repuestos", "Accesorios", "Indumentaria"].map((c) => (
              <Link key={c} href="/#catalogo" className={link}>{c}</Link>
            ))}
          </nav>
          <nav aria-label="Taller" className="flex flex-col text-[15px] text-niebla">
            <strong className={titulo}>Taller</strong>
            {["Servicios y precios", "Pedir turno", "Shimano Service Center"].map((c) => (
              <Link key={c} href="/#taller" className={link}>{c}</Link>
            ))}
          </nav>
          <div className="flex flex-col text-[15px] text-niebla">
            <strong className={titulo}>Contacto</strong>
            <span className="py-1.5">{site.direccionCorta}</span>
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className={link}>{site.whatsappVisible}</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={link}>Instagram @ciclismozonal</a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={link}>Facebook /ciclismozonal</a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-linea-suave pt-6 text-[13px] text-humo">
          <span>© 2026 Ciclismo Zonal Bike Store</span>
        </div>
      </div>
    </footer>
  );
}
