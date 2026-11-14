import Image from "next/image";
import Link from "next/link";
import { formatearPrecio, type Producto } from "@/data/catalogo";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";
import BotonAgregar from "./carrito/BotonAgregar";
import { Boton } from "./ui";

/** Tarjeta clara de producto, pensada para ir sobre el fondo negro. */
export default function ProductCard({ producto: p, sizes }: { producto: Producto; sizes?: string }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[14px] bg-hueso text-negro">
      <div className="relative px-5 pt-9 pb-3">
        {p.etiqueta && (
          <span
            className={`absolute top-3.5 left-3.5 z-10 rounded-md px-2.5 py-0.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white ${
              p.etiqueta === "A pedido" ? "bg-negro" : "bg-rojo"
            }`}
          >
            {p.etiqueta}
          </span>
        )}
        {/* La foto también lleva a la ficha; para lectores de pantalla alcanza con el link del nombre */}
        <Link href={`/producto/${p.slug}`} tabIndex={-1} aria-hidden="true" className="block">
          <Image
            src={p.imagen}
            alt=""
            width={p.ancho}
            height={p.alto}
            sizes={sizes ?? "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"}
            className="h-auto w-full mix-blend-multiply transition-transform duration-300 hover:scale-[1.03]"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-1 px-5.5 pt-2 pb-5.5">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tinta">
          {p.marca} · {p.linea}
        </span>
        <h3 className="font-display text-lg leading-[1.15] font-bold uppercase">
          <Link href={`/producto/${p.slug}`} className="hover:text-rojo">
            {p.nombre}
          </Link>
        </h3>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4.5">
          <span className="text-[21px] font-bold tabular-nums">{formatearPrecio(p.precio)}</span>
          {p.accion === "Agregar" ? (
            <BotonAgregar slug={p.slug} nombre={`${p.marca} ${p.nombre}`} />
          ) : (
            <Boton href={linkWhatsApp(mensajes.producto(`${p.marca} ${p.nombre}`))} tono="negro" tamano="sm">
              {p.accion}
            </Boton>
          )}
        </div>
      </div>
    </article>
  );
}
