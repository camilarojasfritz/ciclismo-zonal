"use client";

import Image from "next/image";
import { useCarrito } from "@/lib/carrito";
import { armarMensajePedido, linkWhatsApp, mensajes } from "@/lib/whatsapp";

/**
 * Botón verde del menú. Con el carrito vacío abre WhatsApp con una consulta
 * general; con productos en el carrito, el mensaje ya los lleva listados.
 */
export default function BotonPedirWhatsApp() {
  const { items, unidades } = useCarrito();
  const mensaje =
    items.length > 0
      ? armarMensajePedido(items.map((i) => ({ nombre: `${i.producto.marca} ${i.producto.nombre}`, cantidad: i.cantidad })))
      : mensajes.consulta;

  return (
    <a
      href={linkWhatsApp(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-whatsapp px-4 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-negro transition hover:brightness-95"
    >
      <Image src="/whatsapp.png" alt="" width={24} height={24} className="size-6 shrink-0" />
      {unidades > 0 ? `Pedir carrito (${unidades})` : "Pedir por WhatsApp"}
    </a>
  );
}
