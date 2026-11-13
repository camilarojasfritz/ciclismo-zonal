import { Boton } from "@/components/ui";

export default function NoEncontrada() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1320px] flex-col items-start justify-center gap-6 px-8 py-24">
      <h1 className="font-display text-[clamp(34px,5vw,72px)] font-extrabold uppercase leading-none">
        404 · Te saliste del camino
      </h1>
      <p className="text-niebla">La página que buscás no existe o cambió de lugar.</p>
      <Boton href="/">Volver al inicio</Boton>
    </section>
  );
}
