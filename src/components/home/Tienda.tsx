import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Boton, Eyebrow } from "@/components/ui";
import { buscarProducto, categorias, destacados, formatearPrecio, SLUG_MODELO_DESTACADO } from "@/data/catalogo";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";

const h2 = "font-display text-[clamp(26px,3.4vw,50px)] font-extrabold uppercase leading-[1.02]";

/** Un modelo en grande, en un panel claro sobre el fondo negro (ver SLUG_MODELO_DESTACADO). */
export function ModeloDestacado() {
  const encontrado = buscarProducto(SLUG_MODELO_DESTACADO);
  if (!encontrado) return null;
  const { producto: p } = encontrado;
  return (
    <section className="px-4 pt-6 pb-22 sm:px-8">
      <div className="relative mx-auto max-w-[1256px] overflow-hidden rounded-[20px] bg-hueso text-negro">
        <div className="relative flex flex-wrap items-center gap-x-14 gap-y-10 px-[clamp(24px,4.5vw,64px)] py-[clamp(32px,5vw,76px)]">
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
            <Eyebrow oscuro>
              Modelo destacado · {p.marca} · {p.linea}
            </Eyebrow>
            <h2 className="font-display text-[clamp(31px,4vw,62px)] leading-[1.02] font-extrabold uppercase">
              {p.marca}
              <br />
              {p.nombre}
            </h2>
            {p.descripcion && <p className="max-w-[440px] text-tinta">{p.descripcion}</p>}
            <div className="flex flex-wrap items-baseline gap-x-3.5">
              <span className="text-[34px] font-bold tabular-nums">{formatearPrecio(p.precio)}</span>
              <span className="text-sm text-tinta">Consultá cuotas y medios de pago</span>
            </div>
            <div className="flex flex-wrap gap-3.5">
              <Boton href={`/producto/${p.slug}`} tono="negro">
                Ver ficha
              </Boton>
              <Boton href={linkWhatsApp(mensajes.producto(`${p.marca} ${p.nombre}`))} tono="bordeOscuro">
                Consultar por WhatsApp
              </Boton>
            </div>
          </div>
          <Link href={`/producto/${p.slug}`} tabIndex={-1} aria-hidden="true" className="block min-w-0 flex-[1.5_1_520px]">
            <Image src={p.imagen} alt="" width={p.ancho} height={p.alto} sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full mix-blend-multiply" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const textos: Record<string, string> = {
  bicicletas: "Contrail · Aspect · Contessa",
  repuestos: "Ruedas · Cockpits · Transmisión",
  accesorios: "Bolsos · Luces · Candados",
  indumentaria: "Cascos · Jerseys · Zapatillas",
};

export function Categorias() {
  const [principal, ...resto] = categorias;
  return (
    <section id="catalogo" className="bg-[radial-gradient(ellipse_70%_60%_at_88%_12%,rgba(214,40,40,0.26)_0%,rgba(214,40,40,0)_70%)]">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-11 px-8 pt-18 pb-22">
        <div className="flex flex-col gap-3">
          <Eyebrow>La tienda</Eyebrow>
          <h2 className={h2}>
            Todo para <span className="text-transparent [-webkit-text-stroke:1.5px_#fff]">rodar</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={`/catalogo/${principal.slug}`} className="group relative flex min-h-[420px] min-w-0 flex-[2.2_1_560px] flex-col justify-between overflow-hidden rounded-[14px] bg-hueso px-9 py-8 text-negro">
            <span className="font-display text-sm font-semibold text-tinta">{principal.numero}</span>
            <Image src="/bicis/contrail-30.jpg" alt="Scott Contrail 30, mountain bike rígida" width={800} height={500} sizes="(min-width: 1024px) 45vw, 75vw" className="absolute top-[10%] -right-[2%] h-auto w-[58%] mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03]" />
            <div className="relative flex max-w-[320px] flex-col gap-1">
              <span className="font-display text-[clamp(29px,3.2vw,48px)] leading-[1.02] font-extrabold uppercase">{principal.titulo}</span>
              <span className="text-[15px] text-tinta">{textos[principal.slug]}</span>
            </div>
          </Link>
          <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
            {resto.map((c, i) => (
              <Link
                key={c.slug}
                href={`/catalogo/${c.slug}`}
                className={`flex min-h-[128px] flex-1 items-end justify-between gap-4 rounded-[14px] px-7 py-6 text-white transition-colors ${
                  i === 0 ? "bg-rojo hover:bg-rojo-hover" : "border border-linea bg-grafito hover:border-white"
                }`}
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-display text-[28px] leading-[1.02] font-extrabold uppercase">{c.titulo}</span>
                  <span className={`text-sm ${i === 0 ? "" : "text-niebla"}`}>{textos[c.slug]}</span>
                </div>
                <span className={`font-display text-sm font-semibold ${i === 0 ? "" : "text-niebla"}`}>{c.numero}</span>
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
    <section>
      <div className="mx-auto flex max-w-[1320px] flex-col gap-11 px-8 pt-2 pb-26">
        <div className="flex flex-col gap-3">
          <Eyebrow>Selección Zonal</Eyebrow>
          <h2 className={h2}>Máquinas que elegimos</h2>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-5">
          {destacados.map((p) => (
            <li key={p.slug}>
              <ProductCard producto={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
