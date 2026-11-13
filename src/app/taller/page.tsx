import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BotonPedirServicio, TurnoForm, TurnoProvider } from "@/components/taller/Turno";
import { Boton, Eyebrow } from "@/components/ui";
import { formatearPrecioServicio, notaServicios, pasos, preguntas, servicios } from "@/data/taller";

export const metadata: Metadata = {
  title: "Taller Shimano Service Center",
  description:
    "Taller de bicicletas Shimano Service Center en Santa Rosa, La Pampa: diagnóstico, mantenimiento y puesta a punto. Pedí tu turno por WhatsApp.",
};

const h2 = "font-display text-[clamp(26px,3.4vw,50px)] leading-[1.04] font-extrabold uppercase";
const numero = (i: number) => String(i + 1).padStart(2, "0");

export default function Taller() {
  return (
    <TurnoProvider>
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_60%_90%_at_90%_0%,rgba(214,40,40,0.3)_0%,rgba(214,40,40,0)_70%)]">
        <div aria-hidden="true" className="absolute -bottom-[12%] -left-[1%] font-display text-[clamp(110px,17vw,250px)] leading-none font-extrabold whitespace-nowrap text-transparent select-none [-webkit-text-stroke:1.5px_#232428]">
          TALLER
        </div>
        <div className="relative mx-auto flex max-w-[1320px] flex-wrap items-center gap-x-14 gap-y-10 px-8 pt-14 pb-22">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5.5">
            <nav aria-label="Ruta de navegación" className="flex flex-wrap gap-2.5 text-sm text-humo">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Taller</span>
            </nav>
            <Eyebrow>Shimano Service Center</Eyebrow>
            <h1 className="font-display text-[clamp(36px,5.4vw,84px)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase">
              Tu bici,
              <br />
              en manos
              <br />
              <span className="text-rojo">expertas</span>
            </h1>
            <p className="max-w-[480px] text-lg text-[#e4e5e8]">
              Diagnóstico, mantenimiento y puesta a punto con repuestos originales, en el taller
              Shimano Service Center de Santa Rosa.
            </p>
            <div className="mt-1.5 flex flex-wrap gap-3.5">
              <Boton href="#turno" tamano="lg">Pedir turno</Boton>
              <Boton href="#servicios" tono="bordeClaro" tamano="lg">Ver servicios</Boton>
            </div>
          </div>
          <Image
            src="/taller/mecanico.jpg"
            alt="Mecánico con guantes ajustando el piñón de una mountain bike en el taller"
            width={1024}
            height={1280}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-[560px] min-w-0 flex-[1_1_420px] rounded-[14px] object-cover object-[40%_45%]"
          />
        </div>
      </section>

      <section id="servicios" className="scroll-mt-6">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-10 px-8 pt-6 pb-24">
          <div className="flex flex-col gap-3">
            <Eyebrow>Servicios y precios</Eyebrow>
            <h2 className={h2}>Qué hacemos</h2>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5">
            {servicios.map((s, i) => (
              <li key={s.nombre} className="flex flex-col gap-4 rounded-[14px] border border-linea bg-grafito p-7">
                <span className="font-display text-[13px] font-semibold text-humo">{numero(i)}</span>
                <h3 className="font-display text-xl leading-[1.15] font-extrabold break-words hyphens-auto uppercase">{s.nombre}</h3>
                {s.incluye.length > 0 && (
                  <ul className="flex flex-col gap-1.5 text-base text-niebla">
                    {s.incluye.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden="true" className="text-rojo">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto flex flex-col gap-0.5 border-t border-linea pt-4.5">
                  <span className="text-[26px] font-bold tabular-nums">{formatearPrecioServicio(s.precio)}</span>
                  {s.demora && <span className="text-sm text-humo">Demora: {s.demora}</span>}
                </div>
                <BotonPedirServicio servicio={s.nombre} />
              </li>
            ))}
          </ul>
          <p className="text-sm text-humo">{notaServicios}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[1320px] flex-col gap-10 px-8 pb-24">
          <div className="flex flex-col gap-3">
            <Eyebrow>Cómo funciona</Eyebrow>
            <h2 className={h2}>Cuatro pasos</h2>
          </div>
          <div className="flex flex-wrap items-stretch gap-x-12 gap-y-8">
            <Image
              src="/taller/cassette.jpg"
              alt="Manos con guantes desmontando un piñón con herramientas de taller"
              width={840}
              height={612}
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="h-[420px] min-w-0 flex-[1_1_380px] rounded-[14px] object-cover"
            />
            <ol className="grid min-w-0 flex-[1.3_1_440px] grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] content-center gap-7">
              {pasos.map((p, i) => (
                <li key={p.titulo} className="flex flex-col gap-2.5 border-t-2 border-linea pt-5.5">
                  <span className="font-display text-[clamp(34px,4vw,56px)] leading-none font-extrabold text-transparent [-webkit-text-stroke:1.5px_#fff]">
                    {numero(i)}
                  </span>
                  <strong className="font-display text-[17px] font-extrabold uppercase">{p.titulo}</strong>
                  <span className="text-base text-niebla">{p.texto}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="turno" className="scroll-mt-6 bg-[radial-gradient(ellipse_60%_70%_at_8%_60%,rgba(214,40,40,0.22)_0%,rgba(214,40,40,0)_70%)] px-4 pb-24 sm:px-8">
        <TurnoForm />
      </section>

      <section>
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-start gap-x-18 gap-y-8 px-8 pb-26">
          <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-3">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className={h2}>
              Antes de
              <br />
              traerla
            </h2>
          </div>
          <div className="min-w-0 flex-[2_1_480px] border-b border-linea">
            {preguntas.map((p) => (
              <details key={p.pregunta} className="group border-t border-linea py-1.5">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 font-display text-[15px] font-bold uppercase [&::-webkit-details-marker]:hidden">
                  {p.pregunta}
                  <span aria-hidden="true" className="text-[22px] text-rojo transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mb-4.5 max-w-[640px] text-niebla">
                  {p.respuesta ?? "[Respuesta a confirmar con el taller]"}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </TurnoProvider>
  );
}
