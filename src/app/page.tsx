import Link from "next/link";
import { eventos, formatearFecha } from "@/data/eventos";

export default function Inicio() {
  const proximos = eventos.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Ciclismo Zonal</h1>
        <p className="max-w-2xl text-lg text-black/70">
          Toda la información del ciclismo de la zona en un solo lugar:
          calendario de carreras, resultados y novedades.
        </p>
        <Link
          href="/calendario"
          className="inline-block rounded-full bg-orange-600 px-5 py-2 text-white hover:bg-orange-700"
        >
          Ver calendario
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Próximas carreras</h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {proximos.map((evento) => (
            <li
              key={evento.id}
              className="rounded-xl border border-black/10 p-4"
            >
              <p className="text-xs uppercase text-orange-600">
                {evento.modalidad}
              </p>
              <h3 className="font-semibold">{evento.nombre}</h3>
              <p className="text-sm text-black/60">
                {formatearFecha(evento.fecha)} · {evento.localidad}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
