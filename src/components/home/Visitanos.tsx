import { Boton, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";

export default function Visitanos() {
  return (
    <section id="contacto" className="fundido-hueso text-negro">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-stretch gap-14 px-8 pt-[240px] pb-[260px]">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5.5">
          <Eyebrow oscuro>Visitanos</Eyebrow>
          <h2 className="font-display text-[clamp(48px,7.2vw,114px)] leading-none font-extrabold uppercase">
            Alvear
            <br />
            <span className="text-rojo">216</span>
          </h2>
          <p className="mt-2 text-tinta">
            {site.direccion}.
            <br />
            Un punto de encuentro para los que viven el ciclismo.
          </p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-7 gap-y-2.5 border-t border-niebla pt-5.5 text-[15px]">
            {site.horarios.map((h) => (
              <div key={h.dias} className="contents">
                <dt className="font-semibold">{h.dias}</dt>
                <dd className="text-tinta">{h.horas}</dd>
              </div>
            ))}
            <dt className="font-semibold">WhatsApp</dt>
            <dd className="text-tinta">{site.whatsappVisible}</dd>
          </dl>
          <div className="mt-1.5 flex flex-wrap gap-3.5">
            <Boton href={site.mapsUrl} tono="negro">Cómo llegar</Boton>
            <Boton href={linkWhatsApp(mensajes.consulta)} tono="whatsapp">Escribinos</Boton>
          </div>
        </div>
        {/* Pendiente: foto real del frente del local y mapa de Google */}
        <div className="flex min-h-[460px] min-w-0 flex-[1.1_1_480px] items-center justify-center rounded-sm bg-grafito bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0_14px,transparent_14px_28px)] p-6">
          <span className="border border-dashed border-[#6b6e75] px-3 py-1.5 text-center text-xs uppercase tracking-[0.14em] text-niebla">
            Foto del frente del local + mapa de Google
          </span>
        </div>
      </div>
    </section>
  );
}
