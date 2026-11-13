"use client";

import { createContext, useContext, useId, useState, type ReactNode } from "react";
import { SERVICIO_OTRO, servicios } from "@/data/taller";
import { linkWhatsApp } from "@/lib/whatsapp";

type Contexto = { servicio: string; setServicio: (s: string) => void };
const TurnoContexto = createContext<Contexto | null>(null);

function useTurno(): Contexto {
  const ctx = useContext(TurnoContexto);
  if (!ctx) throw new Error("Falta <TurnoProvider>");
  return ctx;
}

/** Comparte el servicio elegido entre las tarjetas de servicios y el formulario. */
export function TurnoProvider({ children }: { children: ReactNode }) {
  const [servicio, setServicio] = useState(servicios[0].nombre);
  return <TurnoContexto.Provider value={{ servicio, setServicio }}>{children}</TurnoContexto.Provider>;
}

/** Botón de cada tarjeta: deja el servicio elegido y baja al formulario. */
export function BotonPedirServicio({ servicio }: { servicio: string }) {
  const { setServicio } = useTurno();
  return (
    <a
      href="#turno"
      onClick={() => setServicio(servicio)}
      className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-white px-4 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-negro"
    >
      Pedir este servicio
    </a>
  );
}

/** "2026-12-03" -> "jueves 3/12". Devuelve también si cae domingo. */
function leerDia(valor: string): { texto: string; domingo: boolean } | null {
  const [anio, mes, dia] = valor.split("-").map(Number);
  if (!anio || !mes || !dia) return null;
  const fecha = new Date(anio, mes - 1, dia);
  return {
    texto: fecha.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "numeric" }),
    domingo: fecha.getDay() === 0,
  };
}

const etiqueta = "font-display text-[11px] font-bold uppercase tracking-[0.14em] text-negro";
const campo =
  "min-h-[50px] w-full rounded-[10px] border border-humo bg-white px-3.5 text-base text-negro placeholder:text-[#6b6e75]";

/** Formulario de turno: arma el mensaje y lo abre en WhatsApp. No guarda nada. */
export function TurnoForm() {
  const id = useId();
  const { servicio, setServicio } = useTurno();
  const [bici, setBici] = useState("");
  const [problema, setProblema] = useState("");
  const [dia, setDia] = useState("");
  const [franja, setFranja] = useState("Mañana");
  const [nombre, setNombre] = useState("");

  const fecha = dia ? leerDia(dia) : null;
  const faltan = [
    !bici.trim() && "tu bicicleta",
    (!fecha || fecha.domingo) && "el día",
    !nombre.trim() && "tu nombre",
  ].filter(Boolean) as string[];
  const completo = faltan.length === 0;

  const lineas = [
    "¡Hola Ciclismo Zonal! Quiero pedir un turno para el taller:",
    "",
    `Servicio: ${servicio}`,
    `Bicicleta: ${bici.trim() || "—"}`,
    ...(problema.trim() ? [`Problema: ${problema.trim()}`] : []),
    `Día preferido: ${fecha && !fecha.domingo ? fecha.texto : "—"} — ${franja.toLowerCase()}`,
    `Nombre: ${nombre.trim() || "—"}`,
  ];
  const mensaje = lineas.join("\n");

  return (
    <div className="mx-auto flex max-w-[1256px] flex-wrap items-start gap-x-14 gap-y-10 rounded-[20px] bg-hueso p-[clamp(28px,4.5vw,64px)] text-negro">
      <form className="flex min-w-0 flex-[1.2_1_420px] flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3.5 font-display text-[11px] font-semibold uppercase tracking-[0.26em] text-tinta">
            <span aria-hidden="true" className="inline-block h-[3px] w-12 bg-rojo" />
            Pedí tu turno
          </div>
          <h2 className="font-display text-[clamp(26px,3.4vw,50px)] leading-[1.04] font-extrabold uppercase">
            Contanos qué necesitás
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-servicio`} className={etiqueta}>Servicio</label>
          <select id={`${id}-servicio`} value={servicio} onChange={(e) => setServicio(e.target.value)} className={campo}>
            {servicios.map((s) => (
              <option key={s.nombre}>{s.nombre}</option>
            ))}
            <option>{SERVICIO_OTRO}</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-bici`} className={etiqueta}>Tu bicicleta</label>
          <input id={`${id}-bici`} type="text" value={bici} onChange={(e) => setBici(e.target.value)} placeholder="Ej.: MTB Scott rodado 29" className={campo} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-problema`} className={etiqueta}>¿Qué le pasa? (opcional)</label>
          <textarea id={`${id}-problema`} rows={3} value={problema} onChange={(e) => setProblema(e.target.value)} placeholder="Ej.: hacen ruido los cambios" className={`${campo} min-h-24 resize-y py-3`} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-dia`} className={etiqueta}>Día preferido</label>
            <input id={`${id}-dia`} type="date" value={dia} onChange={(e) => setDia(e.target.value)} aria-describedby={fecha?.domingo ? `${id}-dia-error` : undefined} aria-invalid={fecha?.domingo || undefined} className={campo} />
            {fecha?.domingo && (
              <p id={`${id}-dia-error`} className="text-sm font-semibold text-rojo-hover">
                Los domingos el local está cerrado. Elegí otro día.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-franja`} className={etiqueta}>Franja</label>
            <select id={`${id}-franja`} value={franja} onChange={(e) => setFranja(e.target.value)} className={campo}>
              <option>Mañana</option>
              <option>Tarde</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-nombre`} className={etiqueta}>Tu nombre</label>
          <input id={`${id}-nombre`} type="text" autoComplete="name" value={nombre} onChange={(e) => setNombre(e.target.value)} className={campo} />
        </div>
      </form>

      <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4.5">
        <span className={etiqueta}>Así llega tu mensaje</span>
        <div aria-live="polite" className="rounded-[16px_16px_16px_4px] bg-negro px-6 py-5.5 leading-[1.55] whitespace-pre-line text-white">
          {mensaje}
        </div>
        {completo ? (
          <a href={linkWhatsApp(mensaje)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[60px] items-center justify-center rounded-[10px] bg-whatsapp px-7 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-negro transition hover:brightness-95">
            Enviar por WhatsApp
          </a>
        ) : (
          <>
            <button type="button" disabled className="inline-flex min-h-[60px] items-center justify-center rounded-[10px] bg-[#c9cbd0] px-7 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-tinta">
              Enviar por WhatsApp
            </button>
            <p className="text-sm font-semibold text-tinta">Para enviarlo falta completar: {faltan.join(", ")}.</p>
          </>
        )}
        <p className="text-sm text-tinta">
          Se abre WhatsApp con el mensaje ya escrito. El turno queda confirmado cuando el taller te responde.
        </p>
      </div>
    </div>
  );
}
