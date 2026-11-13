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
};
