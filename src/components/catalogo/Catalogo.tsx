"use client";

import { useId, useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Categoria } from "@/data/catalogo";
import { linkWhatsApp, mensajes } from "@/lib/whatsapp";

type Orden = "destacados" | "nombre" | "precio-asc" | "precio-desc";

const titulo = "mb-2.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-white";
const opcion = "flex min-h-9 cursor-pointer items-center gap-3 text-base text-[#e4e5e8]";
const casilla = "size-[18px] accent-rojo";
const campo =
  "min-h-[46px] w-full min-w-0 rounded-[10px] border border-linea bg-negro px-3 text-[15px] text-white placeholder:text-humo";

/**
 * Pestañas, filtros y grilla de una categoría.
 * Filtran de verdad las pestañas, la marca y el orden. Las pestañas y las marcas
 * salen de los productos cargados: si no hay productos de un tipo, no aparece.
 * Precio, stock y los filtros propios de cada categoría están dibujados pero
 * todavía no tienen datos detrás.
 */
export default function Catalogo({ categoria }: { categoria: Categoria }) {
  const id = useId();
  const todos = categoria.tipos[0];
  const tiposConProductos = categoria.tipos.filter((t, i) => i === 0 || categoria.productos.some((p) => p.tipo === t));
  // con un solo tipo de producto, las pestañas no aportan nada
  const mostrarPestanas = tiposConProductos.length > 2;
  const marcasDisponibles = [...new Set(categoria.productos.map((p) => p.marca))].sort((a, b) => a.localeCompare(b, "es"));
  const [tipo, setTipo] = useState(todos);
  const [marcas, setMarcas] = useState<string[]>([]);
  const [orden, setOrden] = useState<Orden>("destacados");
  // En celular los filtros arrancan cerrados, para ver los productos enseguida
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);

  const visibles = useMemo(() => {
    const lista = categoria.productos.filter(
      (p) => (tipo === todos || p.tipo === tipo) && (marcas.length === 0 || marcas.includes(p.marca)),
    );
    if (orden === "nombre") return [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
    if (orden === "precio-asc" || orden === "precio-desc") {
      const signo = orden === "precio-asc" ? 1 : -1;
      // los productos sin precio van siempre al final
      return [...lista].sort((a, b) =>
        a.precio === null ? (b.precio === null ? 0 : 1) : b.precio === null ? -1 : signo * (a.precio - b.precio),
      );
    }
    return lista;
  }, [categoria.productos, tipo, todos, marcas, orden]);

  const hayFiltros = tipo !== todos || marcas.length > 0;
  const limpiar = () => {
    setTipo(todos);
    setMarcas([]);
  };
  const alternarMarca = (m: string) =>
    setMarcas((actual) => (actual.includes(m) ? actual.filter((x) => x !== m) : [...actual, m]));

  return (
    <>
      {mostrarPestanas && (
      <div role="group" aria-label="Tipo de producto" className="flex flex-wrap gap-2.5">
        {tiposConProductos.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={tipo === t}
            onClick={() => setTipo(t)}
            className={`inline-flex min-h-11 items-center rounded-full border px-5 font-display text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
              tipo === t ? "border-white bg-white text-negro" : "border-[#55585f] text-[#e4e5e8] hover:border-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3.5 border-t border-linea pt-6">
        <p aria-live="polite" className="font-display text-xs font-bold uppercase tracking-[0.16em]">
          {visibles.length} {visibles.length === 1 ? categoria.unidad[0] : categoria.unidad[1]}
        </p>
        <button
          type="button"
          onClick={() => setFiltrosAbiertos((v) => !v)}
          aria-expanded={filtrosAbiertos}
          aria-controls={`${id}-filtros`}
          className="inline-flex min-h-[46px] items-center gap-2.5 rounded-[10px] border border-linea px-4 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:hidden"
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M7 12h10M10 18h4" />
          </svg>
          {filtrosAbiertos ? "Ocultar filtros" : "Filtros"}
          {marcas.length > 0 && <span className="rounded-full bg-rojo px-1.5 font-sans text-xs leading-[20px] tracking-normal">{marcas.length}</span>}
        </button>
        <label htmlFor={`${id}-orden`} className="flex items-center gap-3 text-[15px] text-niebla">
          Ordenar por
          <select
            id={`${id}-orden`}
            value={orden}
            onChange={(e) => setOrden(e.target.value as Orden)}
            className="min-h-[46px] rounded-[10px] border border-linea bg-grafito px-3.5 text-[15px] text-white"
          >
            <option value="destacados">Destacados</option>
            <option value="precio-asc">Menor precio</option>
            <option value="precio-desc">Mayor precio</option>
            <option value="nombre">Nombre A–Z</option>
          </select>
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-start gap-x-8 gap-y-7">
        <aside id={`${id}-filtros`} aria-label="Filtros" className={`${filtrosAbiertos ? "flex" : "hidden"} w-full min-w-0 flex-col sm:flex rounded-[14px] border border-linea bg-grafito px-5.5 py-2.5 sm:max-w-[320px] sm:flex-[1_1_230px]`}>
          <div className="flex items-baseline justify-between gap-3 pt-2.5 pb-3">
            <h2 className="font-display text-[17px] font-extrabold uppercase">Filtros</h2>
            <button type="button" onClick={limpiar} disabled={!hayFiltros} className="min-h-11 text-sm text-niebla underline disabled:opacity-40">
              Limpiar
            </button>
          </div>

          {marcasDisponibles.length > 1 && (
          <fieldset className="flex flex-col gap-1.5 border-t border-linea py-5">
            <legend className={`float-left w-full ${titulo}`}>Marca</legend>
            {marcasDisponibles.map((m) => (
              <label key={m} className={opcion}>
                <input type="checkbox" className={casilla} checked={marcas.includes(m)} onChange={() => alternarMarca(m)} />
                {m}
              </label>
            ))}
          </fieldset>
          )}

          {/* A partir de acá, filtros sin datos todavía (ver comentario del componente) */}
          <fieldset className="flex flex-col gap-1.5 border-t border-linea py-5">
            <legend className={`float-left w-full ${titulo}`}>Precio</legend>
            <div className="flex items-center gap-2.5">
              <label htmlFor={`${id}-min`} className="sr-only">Precio mínimo</label>
              <input id={`${id}-min`} type="text" inputMode="numeric" placeholder="Mínimo" className={campo} />
              <span aria-hidden="true" className="text-humo">–</span>
              <label htmlFor={`${id}-max`} className="sr-only">Precio máximo</label>
              <input id={`${id}-max`} type="text" inputMode="numeric" placeholder="Máximo" className={campo} />
            </div>
          </fieldset>
          {categoria.filtrosExtra.map((f) => (
            <fieldset key={f.titulo} className="flex flex-col gap-1.5 border-t border-linea py-5">
              <legend className={`float-left w-full ${titulo}`}>{f.titulo}</legend>
              {f.opciones.map((o) => (
                <label key={o} className={opcion}>
                  <input type="checkbox" className={casilla} />
                  {o}
                </label>
              ))}
            </fieldset>
          ))}
          <fieldset className="flex flex-col gap-1.5 border-t border-linea py-5">
            <legend className={`float-left w-full ${titulo}`}>Disponibilidad</legend>
            <label className={opcion}>
              <input type="checkbox" className={casilla} />
              Solo con stock
            </label>
          </fieldset>
        </aside>

        <div id="grilla" className="min-w-0 flex-[999_1_560px]">
          {visibles.length > 0 ? (
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(250px,100%),1fr))] gap-5">
              {visibles.map((p) => (
                <li key={p.slug}>
                  <ProductCard producto={p} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-start gap-4 rounded-[14px] border border-linea bg-grafito p-8">
              <h2 className="font-display text-xl font-extrabold uppercase">Todavía no cargamos productos acá</h2>
              <p className="max-w-[440px] text-niebla">
                Escribinos y te contamos qué tenemos en el local, o probá con otra combinación de filtros.
              </p>
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={limpiar} className="inline-flex min-h-11 items-center rounded-[10px] border border-white px-4 font-display text-[11px] font-bold uppercase tracking-[0.12em]">
                  Limpiar filtros
                </button>
                <a href={linkWhatsApp(mensajes.consulta)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-[10px] bg-whatsapp px-4 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-negro">
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
