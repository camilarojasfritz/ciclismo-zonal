"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { formatearPrecio } from "@/data/catalogo";
import { cambiarCantidad, quitar, useCarrito, vaciar } from "@/lib/carrito";
import { armarMensajePedido, linkWhatsApp, type DatosPedido } from "@/lib/whatsapp";

const etiqueta = "font-display text-[11px] font-bold uppercase tracking-[0.14em] text-negro";
const campo =
  "min-h-[50px] w-full rounded-[10px] border border-humo bg-white px-3.5 text-base text-negro placeholder:text-[#6b6e75]";
const paso =
  "flex size-11 items-center justify-center rounded-[10px] border border-linea text-lg text-white transition-colors hover:border-white disabled:opacity-40";

/** Carrito completo: lista de productos, datos del pedido y envío por WhatsApp. */
export default function Pedido() {
  const id = useId();
  const { items, unidades } = useCarrito();
  const [datos, setDatos] = useState<DatosPedido>({ nombre: "", entrega: "retiro", localidad: "", comentario: "" });
  const [enviado, setEnviado] = useState(false);
  const cambiar = (parte: Partial<DatosPedido>) => setDatos((d) => ({ ...d, ...parte }));

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-start gap-5 rounded-[14px] border border-linea bg-grafito p-8">
        <h2 className="font-display text-xl font-extrabold uppercase">
          {enviado ? "Listo, tu carrito quedó vacío" : "Tu carrito está vacío"}
        </h2>
        <p className="max-w-[460px] text-niebla">
          Agregá productos desde el catálogo y mandanos el pedido completo por WhatsApp.
        </p>
        <Link href="/catalogo/bicicletas" className="inline-flex min-h-[54px] items-center rounded-[10px] bg-rojo px-7 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-rojo-hover">
          Ir al catálogo
        </Link>
      </div>
    );
  }

  const faltan = [
    !datos.nombre.trim() && "tu nombre",
    datos.entrega === "envio" && !datos.localidad.trim() && "la localidad de envío",
  ].filter(Boolean) as string[];
  const mensaje = armarMensajePedido(
    items.map((i) => ({
        nombre: `${i.producto.marca} ${i.producto.nombre}`,
        cantidad: i.cantidad,
        precio: i.producto.precio === null ? undefined : formatearPrecio(i.producto.precio),
      })),
    datos,
  );

  return (
    <div className="flex flex-wrap items-start gap-x-10 gap-y-8">
      <ul className="flex min-w-0 flex-[1.4_1_520px] flex-col gap-4">
        {items.map(({ producto: p, cantidad }) => (
          <li key={p.slug} className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-[14px] border border-linea bg-grafito p-4">
            <div className="w-[120px] flex-none rounded-[10px] bg-hueso p-2">
              <Image src={p.imagen} alt="" width={p.ancho} height={p.alto} sizes="120px" className="h-auto w-full mix-blend-multiply" />
            </div>
            <div className="flex min-w-0 flex-[1_1_180px] flex-col gap-0.5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-humo">
                {p.marca} · {p.linea}
              </span>
              <Link href={`/producto/${p.slug}`} className="font-display text-lg leading-[1.15] font-bold uppercase hover:text-rojo">
                {p.nombre}
              </Link>
              <span className="text-sm text-niebla">
                {p.precio === null ? "Precio a confirmar" : `${formatearPrecio(p.precio)} c/u`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className={paso} onClick={() => cambiarCantidad(p.slug, cantidad - 1)} disabled={cantidad <= 1} aria-label={`Quitar una unidad de ${p.nombre}`}>
                −
              </button>
              <span aria-live="polite" aria-label={`Cantidad: ${cantidad}`} className="min-w-8 text-center text-lg font-bold tabular-nums">
                {cantidad}
              </span>
              <button type="button" className={paso} onClick={() => cambiarCantidad(p.slug, cantidad + 1)} aria-label={`Sumar una unidad de ${p.nombre}`}>
                +
              </button>
            </div>
            <button type="button" onClick={() => quitar(p.slug)} className="min-h-11 px-1 text-sm text-niebla underline transition-colors hover:text-white" aria-label={`Eliminar ${p.nombre} del carrito`}>
              Eliminar
            </button>
          </li>
        ))}
        <li className="flex flex-wrap items-center justify-between gap-3 pt-1 text-sm text-niebla">
          <span>
            {unidades} {unidades === 1 ? "producto" : "productos"} en el carrito
          </span>
          <Link href="/catalogo/bicicletas" className="underline transition-colors hover:text-white">
            Seguir mirando
          </Link>
        </li>
      </ul>

      <form className="flex min-w-0 flex-[1_1_380px] flex-col gap-5 rounded-[20px] bg-hueso p-[clamp(24px,3vw,40px)] text-negro" onSubmit={(e) => e.preventDefault()}>
        <h2 className="font-display text-[26px] leading-[1.05] font-extrabold uppercase">Tu pedido</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-nombre`} className={etiqueta}>Tu nombre</label>
          <input id={`${id}-nombre`} type="text" autoComplete="name" value={datos.nombre} onChange={(e) => cambiar({ nombre: e.target.value })} className={campo} />
        </div>
        <fieldset className="flex flex-col gap-2">
          <legend className={`mb-2 ${etiqueta}`}>Entrega</legend>
          {(
            [
              ["retiro", "Retiro en el local (Alvear 216)"],
              ["envio", "Envío"],
            ] as const
          ).map(([valor, texto]) => (
            <label key={valor} className="flex min-h-11 cursor-pointer items-center gap-3 text-base">
              <input type="radio" name={`${id}-entrega`} value={valor} checked={datos.entrega === valor} onChange={() => cambiar({ entrega: valor })} className="size-[18px] accent-rojo" />
              {texto}
            </label>
          ))}
        </fieldset>
        {datos.entrega === "envio" && (
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-localidad`} className={etiqueta}>Localidad y provincia</label>
            <input id={`${id}-localidad`} type="text" value={datos.localidad} onChange={(e) => cambiar({ localidad: e.target.value })} placeholder="Ej.: General Pico, La Pampa" className={campo} />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-comentario`} className={etiqueta}>Comentario (opcional)</label>
          <textarea id={`${id}-comentario`} rows={2} value={datos.comentario} onChange={(e) => cambiar({ comentario: e.target.value })} placeholder="Ej.: ¿la tienen en talle M?" className={`${campo} min-h-20 resize-y py-3`} />
        </div>

        <div className="flex flex-col gap-2">
          <span className={etiqueta}>Así llega tu mensaje</span>
          <div aria-live="polite" className="rounded-[16px_16px_16px_4px] bg-negro px-5 py-4.5 text-[15px] leading-[1.55] whitespace-pre-line text-white">
            {mensaje}
          </div>
        </div>

        {faltan.length === 0 ? (
          <a href={linkWhatsApp(mensaje)} target="_blank" rel="noopener noreferrer" onClick={() => setEnviado(true)} className="inline-flex min-h-[60px] items-center justify-center rounded-[10px] bg-whatsapp px-7 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-negro transition hover:brightness-95">
            Enviar pedido por WhatsApp
          </a>
        ) : (
          <>
            <button type="button" disabled className="inline-flex min-h-[60px] items-center justify-center rounded-[10px] bg-[#c9cbd0] px-7 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-tinta">
              Enviar pedido por WhatsApp
            </button>
            <p className="text-sm font-semibold text-tinta">Para enviarlo falta completar: {faltan.join(" y ")}.</p>
          </>
        )}
        <p className="text-sm text-tinta">
          Se abre WhatsApp con el pedido ya escrito. Los precios, el stock y el envío los confirma el local por ahí.
        </p>
        {enviado && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[10px] border border-humo bg-white p-4">
            <span className="text-sm font-semibold">¿Ya enviaste el pedido?</span>
            <button type="button" onClick={vaciar} className="min-h-11 rounded-[10px] bg-negro px-4 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              Vaciar carrito
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
