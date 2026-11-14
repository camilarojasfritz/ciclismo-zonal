import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BotonAgregar from "@/components/carrito/BotonAgregar";
import ProductCard from "@/components/ProductCard";
import { Boton, Eyebrow } from "@/components/ui";
import { buscarProducto, categorias, formatearPrecio } from "@/data/catalogo";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";

type Props = PageProps<"/producto/[slug]">;

// Una ficha por producto, generadas al hacer el build.
export function generateStaticParams() {
  return categorias.flatMap((c) => c.productos.map((p) => ({ slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const encontrado = buscarProducto(slug);
  if (!encontrado) return {};
  const { producto: p, categoria } = encontrado;
  return {
    title: `${p.marca} ${p.nombre}`,
    description: p.descripcion ?? categoria.intro,
    openGraph: { images: [p.imagen] },
  };
}

export default async function FichaProducto({ params }: Props) {
  const { slug } = await params;
  const encontrado = buscarProducto(slug);
  if (!encontrado) notFound();
  const { producto: p, categoria } = encontrado;
  const nombreCompleto = `${p.marca} ${p.nombre}`;
  const relacionados = categoria.productos.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="bg-[radial-gradient(ellipse_60%_70%_at_90%_0%,rgba(214,40,40,0.26)_0%,rgba(214,40,40,0)_70%)]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-8 pt-14 pb-20">
          <nav aria-label="Ruta de navegación" className="flex flex-wrap gap-2.5 text-sm text-humo">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/catalogo/${categoria.slug}`} className="hover:text-white">{categoria.titulo}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{p.nombre}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-x-14 gap-y-10">
            <div className="relative min-w-0 flex-[1.3_1_480px] rounded-[20px] bg-hueso p-[clamp(20px,4vw,56px)]">
              {p.etiqueta && (
                <span className={`absolute top-5 left-5 z-10 rounded-md px-2.5 py-0.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white ${p.etiqueta === "A pedido" ? "bg-negro" : "bg-rojo"}`}>
                  {p.etiqueta}
                </span>
              )}
              <Image src={p.imagen} alt={p.alt} width={p.ancho} height={p.alto} priority sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full mix-blend-multiply" />
            </div>

            <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
              <Eyebrow>
                {p.marca} · {p.linea}
              </Eyebrow>
              <h1 className="font-display text-[clamp(34px,4.6vw,68px)] leading-[1.02] font-extrabold uppercase">{p.nombre}</h1>
              <div className="flex flex-col gap-1">
                <span className="text-[clamp(30px,3vw,40px)] font-bold tabular-nums">{formatearPrecio(p.precio)}</span>
                <span className="text-sm text-niebla">
                  Precio de referencia: te confirmamos el precio final, el stock y los medios de pago por WhatsApp.
                </span>
              </div>
              {p.descripcion && <p className="max-w-[520px] text-lg text-[#e4e5e8]">{p.descripcion}</p>}
              <div className="mt-1 flex flex-wrap gap-3.5">
                {p.accion === "Agregar" && <BotonAgregar slug={p.slug} nombre={nombreCompleto} grande />}
                <Boton href={linkWhatsApp(mensajes.producto(nombreCompleto))} tono="whatsapp" tamano="lg">
                  Consultar por WhatsApp
                </Boton>
              </div>
              <p className="text-sm text-niebla">Te ayudamos a elegir el talle. También podés venir a verla al local, en Alvear 216.</p>
            </div>
          </div>

          {p.specs && p.specs.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-18 gap-y-6 border-t border-linea pt-10">
              <h2 className="min-w-0 flex-[1_1_260px] font-display text-[clamp(24px,2.6vw,38px)] leading-[1.05] font-extrabold uppercase">
                Características
              </h2>
              <dl className="min-w-0 flex-[2_1_520px]">
                {p.specs.map((s) => (
                  <div key={s.clave} className="flex flex-wrap gap-x-6 gap-y-1 border-b border-linea py-4 first:border-t">
                    <dt className="w-[150px] flex-none font-display text-xs font-bold uppercase tracking-[0.14em] text-niebla">{s.clave}</dt>
                    <dd className="min-w-0 flex-1 basis-[240px] text-base">{s.valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </section>

      {relacionados.length > 0 && (
        <section>
          <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-8 pb-26">
            <div className="flex flex-wrap items-end justify-between gap-4 border-t border-linea pt-12">
              <h2 className="font-display text-[clamp(24px,2.6vw,38px)] leading-[1.05] font-extrabold uppercase">También te puede interesar</h2>
              <Link href={`/catalogo/${categoria.slug}`} className="border-b border-[#55585f] py-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-niebla hover:text-white">
                Ver todas →
              </Link>
            </div>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-5">
              {relacionados.map((r) => (
                <li key={r.slug}>
                  <ProductCard producto={r} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
