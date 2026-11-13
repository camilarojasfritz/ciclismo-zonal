import Image from "next/image";
import Link from "next/link";
import { Boton, Eyebrow } from "@/components/ui";
import { destacados, formatearPrecio } from "@/data/productos";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";

const h2 = "font-display text-[clamp(26px,3.4vw,50px)] font-extrabold uppercase leading-[1.02]";

/** Un modelo en grande sobre fondo claro. Hoy es un ejemplo fijo. */
export function ModeloDestacado() {
  return (
    <section className="fundido-hueso relative overflow-hidden text-negro">
      <div aria-hidden="true" className="absolute top-1/2 -right-[2%] -translate-y-1/2 font-display text-[clamp(120px,18vw,264px)] leading-none font-extrabold tracking-[-0.02em] whitespace-nowrap text-[#e3e3e6] select-none">
        FOIL
      </div>
      <div className="relative mx-auto flex max-w-[1320px] flex-wrap items-center gap-x-14 gap-y-10 px-8 pt-[230px] pb-[250px]">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <Eyebrow oscuro>Modelo destacado · Scott · Ruta</Eyebrow>
          <h2 className="font-display text-[clamp(31px,4vw,62px)] font-extrabold uppercase leading-[1.02]">
            Scott Foil
            <br />
            RC Ultimate
          </h2>
          <p className="max-w-[440px] text-tinta">
            La aero de Scott para ir a fondo. Te asesoramos con el talle y la dejamos lista para
            salir a rodar desde nuestro taller.
          </p>
          <div className="flex items-baseline gap-3.5">
            <span className="text-[34px] font-bold tabular-nums">{formatearPrecio(null)}</span>
            <span className="text-sm text-tinta">Consultá cuotas y medios de pago</span>
          </div>
          <div className="flex flex-wrap gap-3.5">
            <Boton href={linkWhatsApp(mensajes.producto("Scott Foil RC Ultimate"))} tono="negro">
              Consultar por WhatsApp
            </Boton>
            <Boton href="/#catalogo" tono="bordeOscuro">
              Ver ficha
            </Boton>
          </div>
        </div>
        <div className="min-w-0 flex-[1.5_1_520px]">
          <Image src="/demo/foil-rc.jpg" alt="Scott Foil RC Ultimate, bicicleta de ruta negra, vista lateral" width={540} height={325} sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}

const chicas = [
  { n: "02", nombre: "Repuestos", texto: "Transmisión · Frenos · Cubiertas", rojo: true },
  { n: "03", nombre: "Accesorios", texto: "Luces · Candados · Bolsos", rojo: false },
  { n: "04", nombre: "Indumentaria", texto: "Cascos · Jerseys · Calzas", rojo: false },
];

export function Categorias() {
  return (
    <section id="catalogo" className="bg-[radial-gradient(ellipse_70%_60%_at_88%_12%,rgba(214,40,40,0.26)_0%,rgba(214,40,40,0)_70%)]">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-11 px-8 pt-18 pb-22">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Eyebrow>La tienda</Eyebrow>
            <h2 className={h2}>
              Todo para <span className="text-transparent [-webkit-text-stroke:1.5px_#fff]">rodar</span>
            </h2>
          </div>
          <Link href="/#catalogo" className="border-b border-[#55585f] py-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-niebla transition-colors hover:text-white">
            Ver todo el catálogo →
          </Link>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/#catalogo" className="group relative flex min-h-[420px] min-w-0 flex-[2.2_1_560px] flex-col justify-between overflow-hidden rounded-sm bg-hueso px-9 py-8 text-negro">
            <span className="font-display text-sm font-semibold text-tinta">01</span>
            <Image src="/demo/ransom-rc.jpg" alt="Scott Ransom RC, mountain bike de doble suspensión" width={540} height={325} sizes="(min-width: 1024px) 45vw, 75vw" className="absolute -right-[4%] bottom-[4%] h-auto w-[74%] mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03]" />
            <div className="relative flex max-w-[320px] flex-col gap-1">
              <span className="font-display text-[clamp(29px,3.2vw,48px)] leading-[1.02] font-extrabold uppercase">Bicicletas</span>
              <span className="text-[15px] text-tinta">MTB · Ruta · Urbanas · Infantiles · E-bikes</span>
            </div>
          </Link>
          <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
            {chicas.map((c) => (
              <Link
                key={c.n}
                href="/#catalogo"
                className={`flex min-h-[128px] flex-1 items-end justify-between gap-4 rounded-sm px-7 py-6 text-white transition-colors ${
                  c.rojo ? "bg-rojo hover:bg-rojo-hover" : "border border-linea bg-grafito hover:border-white"
                }`}
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-display text-[28px] leading-[1.02] font-extrabold uppercase">{c.nombre}</span>
                  <span className={`text-sm ${c.rojo ? "" : "text-niebla"}`}>{c.texto}</span>
                </div>
                <span className={`font-display text-sm font-semibold ${c.rojo ? "" : "text-niebla"}`}>{c.n}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Destacados() {
  return (
    <section className="fundido-blanco text-negro">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-11 px-8 pt-[230px] pb-[250px]">
        <div className="flex flex-col gap-3">
          <Eyebrow oscuro>Selección Zonal</Eyebrow>
          <h2 className={h2}>Máquinas que elegimos</h2>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
          {destacados.map((p) => (
            <li key={p.slug} className="flex flex-col overflow-hidden rounded-sm bg-hueso">
              <div className="relative px-5 pt-9 pb-3">
                {p.etiqueta && (
                  <span className={`absolute top-3.5 left-3.5 px-2.5 py-0.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white ${p.etiqueta.tono === "rojo" ? "bg-rojo" : "bg-negro"}`}>
                    {p.etiqueta.texto}
                  </span>
                )}
                <Image src={p.imagen} alt={p.alt} width={540} height={325} sizes="(min-width: 1024px) 25vw, 90vw" className="h-auto w-full mix-blend-multiply" />
              </div>
              <div className="flex flex-1 flex-col gap-1 px-5.5 pt-2 pb-5.5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tinta">
                  {p.marca} · {p.linea}
                </span>
                <h3 className="font-display text-[19px] leading-[1.1] font-bold uppercase">{p.nombre}</h3>
                <div className="mt-auto flex items-center justify-between gap-3 pt-4.5">
                  <span className="text-[21px] font-bold tabular-nums">{formatearPrecio(p.precio)}</span>
                  <Boton href={linkWhatsApp(mensajes.producto(`${p.marca} ${p.nombre}`))} tono="negro" tamano="sm">
                    {p.accion}
                  </Boton>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
