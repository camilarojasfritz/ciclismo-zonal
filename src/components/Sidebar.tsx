import Image from "next/image";
import Link from "next/link";
import { navegacion } from "@/lib/site";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";
import { Boton, Wordmark } from "./ui";

const botonIcono =
  "flex size-[46px] items-center justify-center rounded-[10px] border border-linea text-white transition-colors hover:border-white";

export default function Sidebar() {
  return (
    <header className="border-b border-linea-suave bg-negro lg:w-[236px] lg:shrink-0 lg:border-r lg:border-b-0">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 lg:sticky lg:top-0 lg:h-dvh lg:max-h-[820px] lg:flex-col lg:flex-nowrap lg:items-stretch lg:p-7">
        <Link href="/#inicio" aria-label="Ciclismo Zonal, inicio" className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2.5">
          <Image src="/logo.png" alt="" width={84} height={84} priority className="size-14 rounded-full object-cover lg:size-[84px]" />
          <Wordmark />
        </Link>

        <nav aria-label="Principal" className="order-last flex w-full flex-wrap gap-x-5 lg:order-none lg:w-auto lg:flex-col">
          {navegacion.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block border-l-[3px] py-2 pl-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-white ${
                i === 0 ? "border-rojo text-white" : "border-transparent text-niebla"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 lg:flex-col lg:items-stretch lg:gap-3">
          <div className="flex gap-2.5">
            <button type="button" aria-label="Buscar" className={botonIcono}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
            <button type="button" aria-label="Abrir carrito" className={botonIcono}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h2l2.4 11h10.2L20 7H6.2" />
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="17" cy="19" r="1.5" />
              </svg>
            </button>
          </div>
          <Boton href={linkWhatsApp(mensajes.consulta)} tono="whatsapp" tamano="sm" className="min-h-[48px]">
            Pedir por WhatsApp
          </Boton>
        </div>
      </div>
    </header>
  );
}
