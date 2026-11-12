import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contacto" };

export default function Contacto() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="text-black/70">
        ¿Organizás una carrera o querés sumar información? Escribinos.
      </p>
    </div>
  );
}
