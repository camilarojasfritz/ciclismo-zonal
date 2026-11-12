// Datos de ejemplo — reemplazar por los reales (o por una API/base de datos más adelante).

export type Evento = {
  id: string;
  nombre: string;
  fecha: string; // formato ISO: AAAA-MM-DD
  localidad: string;
  modalidad: "Ruta" | "MTB" | "Pista" | "Gravel";
  distanciaKm: number;
};

export const eventos: Evento[] = [
  {
    id: "ejemplo-1",
    nombre: "Carrera de ejemplo 1",
    fecha: "2026-12-06",
    localidad: "Localidad A",
    modalidad: "Ruta",
    distanciaKm: 80,
  },
  {
    id: "ejemplo-2",
    nombre: "Carrera de ejemplo 2",
    fecha: "2026-12-20",
    localidad: "Localidad B",
    modalidad: "MTB",
    distanciaKm: 45,
  },
  {
    id: "ejemplo-3",
    nombre: "Carrera de ejemplo 3",
    fecha: "2027-01-10",
    localidad: "Localidad C",
    modalidad: "Gravel",
    distanciaKm: 60,
  },
];

export function formatearFecha(iso: string): string {
  const [anio, mes, dia] = iso.split("-").map(Number);
  return new Date(anio, mes - 1, dia).toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
