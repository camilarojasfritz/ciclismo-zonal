import Image from "next/image";
import { Boton, FlechaIcono, Wordmark } from "@/components/ui";

const datos = [
  ["Shimano Service Center", "Taller oficial con repuestos originales"],
  ["Envíos a todo el país", "Lo coordinamos por WhatsApp"],
  ["Asesoramiento real", "Talle, modelo y compatibilidad"],
  ["Alvear 216", "Vení a conocer el local"],
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-negro">
      <Image
        src="/demo/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-drift object-cover object-[60%_50%]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,12,0.94)_0%,rgba(11,11,12,0.78)_38%,rgba(11,11,12,0.25)_72%,rgba(11,11,12,0.45)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[220px] bg-linear-to-b from-transparent to-negro" />

      <div className="relative mx-auto flex min-h-[800px] max-w-[1320px] flex-col justify-between gap-14 px-8 pt-24 pb-10">
        <div className="animate-rise flex max-w-[860px] flex-col gap-7">
          <div className="flex items-stretch gap-5">
            <span aria-hidden="true" className="block w-0.5 bg-white" />
            <span className="py-1.5">
              <Wordmark tamano="lg" />
            </span>
          </div>
          <h1 className="font-display text-[clamp(34px,5.8vw,89px)] font-extrabold uppercase leading-[1.02] tracking-[-0.01em]">
            Rodá más
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_#fff]">lejos.</span> Más
            <br />
            <span className="text-rojo">rápido.</span>
          </h1>
          <p className="max-w-[500px] text-lg text-[#e4e5e8]">
            Bicicletas de primer nivel, componentes y equipo técnico, con taller oficial Shimano y
            el respaldo de gente que vive el ciclismo.
          </p>
          <div className="flex flex-wrap gap-4">
            <Boton href="/#catalogo" tamano="lg">
              Explorar catálogo <FlechaIcono />
            </Boton>
            <Boton href="/#taller" tono="bordeClaro" tamano="lg">
              Pedir turno en el taller
            </Boton>
          </div>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] border-t border-white/30">
          {datos.map(([titulo, texto]) => (
            <li key={titulo} className="flex flex-col gap-0.5 pt-5 pr-6 pb-2">
              <span className="font-display text-[17px] font-bold uppercase tracking-[0.04em]">{titulo}</span>
              <span className="text-sm text-niebla">{texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
