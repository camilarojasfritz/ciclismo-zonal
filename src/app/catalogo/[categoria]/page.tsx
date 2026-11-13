import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Catalogo from "@/components/catalogo/Catalogo";
import { Boton, Eyebrow } from "@/components/ui";
import { buscarCategoria, categorias } from "@/data/catalogo";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";

type Props = PageProps<"/catalogo/[categoria]">;

// Una página por categoría, generadas al hacer el build.
export function generateStaticParams() {
  return categorias.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria: slug } = await params;
  const categoria = buscarCategoria(slug);
  if (!categoria) return {};
  return { title: categoria.titulo, description: categoria.intro };
}

export default async function PaginaCategoria({ params }: Props) {
  const { categoria: slug } = await params;
  const categoria = buscarCategoria(slug);
  if (!categoria) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_60%_90%_at_90%_0%,rgba(214,40,40,0.3)_0%,rgba(214,40,40,0)_70%)]">
        <div aria-hidden="true" className="absolute top-[80px] -right-[1%] hidden sm:block font-display text-[clamp(110px,17vw,250px)] leading-none font-extrabold whitespace-nowrap text-transparent select-none [-webkit-text-stroke:1.5px_#2e3035]">
          {categoria.fantasma}
        </div>
        <div className="relative mx-auto flex max-w-[1320px] flex-col px-8 pt-14 pb-24">
          <nav aria-label="Ruta de navegación" className="flex flex-wrap gap-2.5 text-sm text-humo">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#catalogo" className="hover:text-white">Tienda</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{categoria.titulo}</span>
          </nav>
          <div className="mt-5.5">
            <Eyebrow>La tienda · {categoria.numero}</Eyebrow>
          </div>
          <h1 className="mt-5.5 font-display text-[clamp(36px,6vw,92px)] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase">
            {categoria.titulo}
          </h1>
          <p className="mt-5.5 mb-8 max-w-[520px] text-lg text-[#e4e5e8]">{categoria.intro}</p>

          <Catalogo categoria={categoria} />
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_60%_80%_at_10%_100%,rgba(214,40,40,0.24)_0%,rgba(214,40,40,0)_70%)]">
        <div className="mx-auto max-w-[1320px] px-8 pb-26">
          <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-7 border-t border-linea pt-14">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
              <Eyebrow>Asesoramiento</Eyebrow>
              <h2 className="font-display text-[clamp(28px,3.6vw,54px)] leading-[1.04] font-extrabold uppercase">
                {categoria.ayuda.titulo[0]}
                <br />
                {categoria.ayuda.titulo[1]}
              </h2>
              <p className="max-w-[460px] text-niebla">{categoria.ayuda.texto}</p>
            </div>
            <Boton href={linkWhatsApp(mensajes.consulta)} tono="whatsapp" tamano="lg">
              Consultar por WhatsApp
            </Boton>
          </div>
        </div>
      </section>
    </>
  );
}
