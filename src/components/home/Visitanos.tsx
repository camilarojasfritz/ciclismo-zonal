import Image from "next/image";
import { Boton, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";

export default function Visitanos() {
  return (
    <section id="contacto" className="bg-[radial-gradient(ellipse_60%_70%_at_92%_90%,rgba(214,40,40,0.22)_0%,rgba(214,40,40,0)_70%)]">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-stretch gap-14 px-8 pt-24 pb-28">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5.5">
          <Eyebrow>Visitanos</Eyebrow>
          <h2 className="font-display text-[clamp(48px,7.2vw,114px)] leading-none font-extrabold uppercase">
            Alvear
            <br />
            <span className="text-rojo">216</span>
          </h2>
          <p className="mt-2 text-niebla">
            {site.direccion}.
            <br />
            Un punto de encuentro para los que viven el ciclismo.
          </p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-7 gap-y-2.5 border-t border-linea pt-5.5 text-[15px]">
            {site.horarios.map((h) => (
              <div key={h.dias} className="contents">
                <dt className="font-semibold">{h.dias}</dt>
                <dd className="text-niebla">{h.horas}</dd>
              </div>
            ))}
            <dt className="font-semibold">WhatsApp</dt>
            <dd className="text-niebla">{site.whatsappVisible}</dd>
          </dl>
          <div className="mt-1.5 flex flex-wrap gap-3.5">
            <Boton href={site.mapsUrl} tono="bordeClaro">Cómo llegar</Boton>
            <Boton href={linkWhatsApp(mensajes.consulta)} tono="whatsapp">Escribinos</Boton>
          </div>
        </div>
        <div className="grid min-w-0 flex-[1.1_1_480px] grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
          <Image
            src="/local/vidriera.jpg"
            alt="Vidriera de Ciclismo Zonal con bicicletas exhibidas en la vereda"
            width={1200}
            height={1800}
            sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
            className="h-full max-h-[620px] min-h-[420px] w-full rounded-[14px] object-cover"
          />
          <div className="flex min-h-[420px] flex-col overflow-hidden rounded-[14px] border border-linea bg-grafito">
            <iframe
              src={site.mapsEmbedUrl}
              title="Mapa: Ciclismo Zonal en Marcelo T. de Alvear 216, Santa Rosa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-1 border-0 grayscale-[0.2]"
            />
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-4 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-rojo">
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
