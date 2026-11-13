// Datos de EJEMPLO del taller. La lista de servicios, lo que incluye cada uno,
// los precios, las demoras y las respuestas las define el taller
// (ver docs/08-pendientes-a-confirmar.md).

export type Servicio = {
  nombre: string;
  /** Resumen de una línea, para la home. */
  detalle: string;
  incluye: string[];
  /** null = todavía sin precio cargado */
  precioDesde: number | null;
  /** null = todavía sin confirmar */
  demora: string | null;
};

export const servicios: Servicio[] = [
  {
    nombre: "Service básico",
    detalle: "Limpieza, lubricación, ajuste de cambios y frenos.",
    incluye: ["Limpieza y lubricación", "Ajuste de cambios y frenos", "Control de presión"],
    precioDesde: null,
    demora: null,
  },
  {
    nombre: "Service completo",
    detalle: "Desarme, limpieza profunda y ajuste general.",
    incluye: ["Desarme y limpieza profunda", "Engrase de rodamientos", "Ajuste general"],
    precioDesde: null,
    demora: null,
  },
  {
    nombre: "Puesta a punto Shimano",
    detalle: "Ajuste fino de transmisión y frenos.",
    incluye: ["Ajuste fino de transmisión", "Ajuste fino de frenos"],
    precioDesde: null,
    demora: null,
  },
  {
    nombre: "Purgado de frenos hidráulicos",
    detalle: "Purga y cambio de fluido.",
    incluye: ["Purga del circuito", "Cambio de fluido"],
    precioDesde: null,
    demora: null,
  },
  {
    nombre: "Centrado de ruedas",
    detalle: "Alineado y tensado de rayos.",
    incluye: ["Alineado de llantas", "Tensado de rayos"],
    precioDesde: null,
    demora: null,
  },
  {
    nombre: "Armado de bicicleta",
    detalle: "Armado completo, regulación y control final.",
    incluye: ["Armado completo", "Regulación y control final"],
    precioDesde: null,
    demora: null,
  },
];

/** Opción extra del formulario, para quien no sabe qué servicio necesita. */
export const SERVICIO_OTRO = "Otro / no sé";

export const pasos = [
  { titulo: "Pedí tu turno", texto: "Completá el formulario y te respondemos por WhatsApp." },
  { titulo: "Traé tu bici", texto: "La recibimos en el local, en Alvear 216." },
  { titulo: "Te avisamos", texto: "Te escribimos cuando está lista." },
  { titulo: "Retirala", texto: "Pasás a buscarla y salís a rodar." },
];

/** respuesta: null = falta que la escriba el taller. */
export const preguntas: { pregunta: string; respuesta: string | null }[] = [
  { pregunta: "¿Cada cuánto conviene hacer un service?", respuesta: null },
  { pregunta: "¿Trabajan con todas las marcas?", respuesta: null },
  { pregunta: "¿Cuánto tarda un service?", respuesta: null },
  { pregunta: "¿Puedo dejar la bici sin turno?", respuesta: null },
  { pregunta: "¿Hacen presupuesto antes de trabajar?", respuesta: null },
];

export function formatearDesde(precio: number | null): string {
  return precio === null ? "Desde $ [PRECIO]" : `Desde $ ${precio.toLocaleString("es-AR")}`;
}

export const marcas = ["Scott", "Orbea", "Shimano", "Titan", "Leader", "Teknial"];
