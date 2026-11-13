// Servicios del taller. Nombres y precios pasados por el local (noviembre 2026):
// son los trabajos más generales. Qué incluye cada uno, las demoras y las
// respuestas de las preguntas frecuentes todavía faltan
// (ver docs/08-pendientes-a-confirmar.md).

export type Servicio = {
  nombre: string;
  /** Qué incluye. Vacío = todavía no lo detalló el taller; no se muestra. */
  incluye: string[];
  /** Precio en pesos. null = a consultar. */
  precio: number | null;
  /** null = sin confirmar; no se muestra. */
  demora: string | null;
};

export const servicios: Servicio[] = [
  { nombre: "Servicio Técnico Completo", incluye: [], precio: 70000, demora: null },
  { nombre: "Servicio Técnico Profesional", incluye: [], precio: 90000, demora: null },
  { nombre: "Servicio de Tubeless con Productos Importados", incluye: [], precio: 110000, demora: null },
  { nombre: "Servicio de Sellantes Antipinchaduras Slime", incluye: [], precio: 50000, demora: null },
];

/** Aclaración que acompaña a la lista de servicios. */
export const notaServicios = "Estos son los servicios más pedidos. Para otros trabajos, consultanos.";

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

export function formatearPrecioServicio(precio: number | null): string {
  return precio === null ? "A consultar" : `$ ${precio.toLocaleString("es-AR")}`;
}

export const marcas = ["Scott", "Orbea", "Shimano", "Titan", "Leader", "Teknial"];
