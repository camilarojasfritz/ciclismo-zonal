import { Boton, Eyebrow } from "@/components/ui";
import { formatearDesde, marcas, servicios } from "@/data/taller";

export function Taller() {
  return (
    <section id="taller" className="relative overflow-hidden bg-[radial-gradient(ellipse_60%_70%_at_8%_85%,rgba(214,40,40,0.24)_0%,rgba(214,40,40,0)_70%)]">
      <div aria-hidden="true" className="absolute -bottom-[6%] -left-[1%] font-display text-[clamp(108px,15.6vw,240px)] leading-none font-extrabold whitespace-nowrap text-transparent select-none [-webkit-text-stroke:1.5px_#232428]">
        TALLER
      </div>
      <div className="relative mx-auto flex max-w-[1320px] flex-wrap items-start gap-x-18 gap-y-14 px-8 pt-18 pb-26">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
          <Eyebrow>Shimano Service Center</Eyebrow>
          <h2 className="font-display text-[clamp(31px,4.1vw,62px)] leading-[1.02] font-extrabold uppercase">
            Tu bici,
            <br />
            en manos
            <br />
            <span className="text-rojo">expertas</span>
          </h2>
          <p className="max-w-[440px] text-niebla">
            Diagnóstico, mantenimiento y puesta a punto con repuestos originales. Pedí tu turno,
            traé la bici y te avisamos cuando está lista.
          </p>
          <div className="mt-2 flex flex-wrap gap-3.5">
            <Boton href="/taller#turno" tono="whatsapp" tamano="lg">
              Pedir turno
            </Boton>
            <Boton href="/taller" tono="bordeClaro" tamano="lg">
              Servicios y precios
            </Boton>
          </div>
        </div>
        <div className="flex min-w-0 flex-[1.2_1_480px] flex-col">
          <ol>
            {servicios.map((s, i) => (
              <li key={s.nombre} className="flex flex-wrap items-baseline gap-x-5.5 gap-y-2 border-t border-linea py-6">
                <span className="w-[30px] flex-none font-display text-[13px] font-semibold text-humo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <h3 className="font-display text-[22px] leading-[1.1] font-bold uppercase">{s.nombre}</h3>
                  <span className="text-sm text-humo">{s.detalle}</span>
                </div>
                <span className="w-full flex-none pl-[52px] text-[15px] font-semibold whitespace-nowrap sm:w-auto sm:pl-0">
                  {formatearDesde(s.precioDesde)}
                </span>
              </li>
            ))}
          </ol>
          <p className="border-t border-linea pt-4 text-[13px] text-humo">Los repuestos se presupuestan aparte.</p>
        </div>
      </div>
    </section>
  );
}

export function Marcas() {
  const fila = (oculta: boolean) => (
    <ul aria-hidden={oculta || undefined} className="flex gap-14 pr-14">
      {marcas.map((m) => (
        <li key={m} className="flex gap-14">
          <span>{m}</span>
          <span aria-hidden="true">/</span>
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label="Marcas con las que trabajamos" className="franja-roja overflow-hidden py-5.5">
      <div className="animate-marquee flex w-max font-display text-[28px] font-extrabold uppercase tracking-[0.06em] whitespace-nowrap text-white">
        {fila(false)}
        {fila(true)}
        {fila(true)}
        {fila(true)}
      </div>
    </section>
  );
}
