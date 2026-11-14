import { site } from "./site";

/** Arma el link de WhatsApp del local, con un mensaje opcional ya escrito. */
export function linkWhatsApp(mensaje?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export const mensajes = {
  consulta: "¡Hola Ciclismo Zonal! Quería hacer una consulta.",
  turno: "¡Hola Ciclismo Zonal! Quiero pedir un turno para el taller.",
  producto: (nombre: string) =>
    `¡Hola Ciclismo Zonal! Quería consultar por este producto: ${nombre}`,
  buscando: (texto: string) => `¡Hola Ciclismo Zonal! Estoy buscando: ${texto}. ¿Lo tienen?`,
};

export type DatosPedido = {
  nombre: string;
  entrega: "retiro" | "envio";
  localidad: string;
  comentario: string;
};

/**
 * Arma el texto del pedido con todos los productos del carrito.
 * Sin `datos` (pedido rápido desde el menú) lleva solo la lista de productos.
 */
export function armarMensajePedido(
  items: { nombre: string; cantidad: number; precio?: string }[],
  datos?: DatosPedido,
): string {
  const lineas = [
    "¡Hola Ciclismo Zonal! Quiero hacer este pedido:",
    "",
    ...items.map((i, n) => `${n + 1}) ${i.nombre} × ${i.cantidad}${i.precio ? ` — ${i.precio} c/u` : ""}`),
  ];
  if (datos) {
    lineas.push(
      "",
      `Nombre: ${datos.nombre.trim() || "—"}`,
      datos.entrega === "retiro"
        ? "Entrega: retiro en el local"
        : `Entrega: envío a ${datos.localidad.trim() || "—"}`,
    );
    if (datos.comentario.trim()) lineas.push(`Comentario: ${datos.comentario.trim()}`);
  }
  lineas.push("", "¿Me confirman precio y disponibilidad?");
  return lineas.join("\n");
}
