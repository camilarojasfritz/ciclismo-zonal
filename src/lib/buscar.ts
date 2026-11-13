import { categorias, type Producto } from "@/data/catalogo";

export type Resultado = { producto: Producto; categoria: string };

/** Minúsculas y sin tildes, para que "indumentária", "CASCO" o "piñon" encuentren igual. */
function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const indice = categorias.flatMap((c) =>
  c.productos.map((p) => ({
    resultado: { producto: p, categoria: c.titulo } satisfies Resultado,
    texto: normalizar([p.nombre, p.marca, p.linea, p.tipo, c.titulo].join(" ")),
  })),
);

/** Busca en nombre, marca, tipo y categoría. Tienen que aparecer todas las palabras. */
export function buscarProductos(consulta: string): Resultado[] {
  const palabras = normalizar(consulta).split(/\s+/).filter(Boolean);
  if (palabras.length === 0) return [];
  return indice.filter((i) => palabras.every((p) => i.texto.includes(p))).map((i) => i.resultado);
}
