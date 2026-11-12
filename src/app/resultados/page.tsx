import type { Metadata } from "next";

export const metadata: Metadata = { title: "Resultados" };

export default function Resultados() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Resultados</h1>
      <p className="text-black/70">
        Acá van a aparecer los resultados de cada carrera.
      </p>
    </div>
  );
}
