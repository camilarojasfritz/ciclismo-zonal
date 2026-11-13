import Form from "next/form";

/** Barra de búsqueda del menú. Lleva a /buscar con lo que se escribió. */
export default function BarraBusqueda({ className = "" }: { className?: string }) {
  return (
    <Form action="/buscar" role="search" className={`relative ${className}`}>
      <label htmlFor="busqueda-menu" className="sr-only">
        Buscar productos
      </label>
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-niebla">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
      <input
        id="busqueda-menu"
        type="search"
        name="q"
        placeholder="Buscar productos"
        autoComplete="off"
        className="min-h-[46px] w-full rounded-[10px] border border-linea bg-grafito pr-3 pl-10 text-[15px] text-white transition-colors placeholder:text-humo hover:border-[#55585f] focus:border-white"
      />
    </Form>
  );
}
