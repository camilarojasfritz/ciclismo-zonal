// Servicios de EJEMPLO. La lista, lo que incluye cada uno y los precios
// los define el taller (ver docs/08-pendientes-a-confirmar.md).

export type Servicio = { nombre: string; detalle: string; precioDesde: number | null };

export const servicios: Servicio[] = [
  { nombre: "Service básico", detalle: "Limpieza, lubricación, ajuste de cambios y frenos.", precioDesde: null },
  { nombre: "Service completo", detalle: "Desarme, limpieza profunda y ajuste general.", precioDesde: null },
  { nombre: "Puesta a punto Shimano", detalle: "Ajuste fino de transmisión y frenos.", precioDesde: null },
  { nombre: "Purgado de frenos hidráulicos", detalle: "Purga y cambio de fluido.", precioDesde: null },
  { nombre: "Centrado de ruedas", detalle: "Alineado y tensado de rayos.", precioDesde: null },
];

export const marcas = ["Scott", "Orbea", "Shimano", "Titan", "Leader", "Teknial"];
