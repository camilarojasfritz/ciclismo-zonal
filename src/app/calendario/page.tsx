import type { Metadata } from "next";
import { eventos, formatearFecha } from "@/data/eventos";

export const metadata: Metadata = { title: "Calendario" };

export default function Calendario() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Calendario</h1>
      <table className="w-full text-left text-sm">
        <thead className="border-b border-black/10 text-black/60">
          <tr>
            <th className="py-2">Fecha</th>
            <th>Carrera</th>
            <th>Localidad</th>
            <th>Modalidad</th>
            <th className="text-right">Distancia</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento) => (
            <tr key={evento.id} className="border-b border-black/5">
              <td className="py-3">{formatearFecha(evento.fecha)}</td>
              <td className="font-medium">{evento.nombre}</td>
              <td>{evento.localidad}</td>
              <td>{evento.modalidad}</td>
              <td className="text-right">{evento.distanciaKm} km</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
