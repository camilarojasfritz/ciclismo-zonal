// Productos de EJEMPLO para maquetar la home. Los modelos, etiquetas y fotos
// son provisorios: se reemplazan por el catálogo real (backend) más adelante.

export type Producto = {
  slug: string;
  nombre: string;
  marca: string;
  linea: string;
  imagen: string;
  alt: string;
  /** null = todavía sin precio cargado */
  precio: number | null;
  etiqueta?: { texto: string; tono: "rojo" | "negro" };
  accion: "Agregar" | "Consultar";
};

export const destacados: Producto[] = [
  {
    slug: "scott-spark-rc-sl",
    nombre: "Spark RC SL",
    marca: "Scott",
    linea: "Cross Country",
    imagen: "/demo/spark-rc-sl.jpg",
    alt: "Scott Spark RC SL, mountain bike de cross country",
    precio: null,
    etiqueta: { texto: "Nuevo", tono: "rojo" },
    accion: "Agregar",
  },
  {
    slug: "scott-spark-rc-world-cup-evo",
    nombre: "Spark RC World Cup EVO",
    marca: "Scott",
    linea: "Cross Country",
    imagen: "/demo/spark-rc-evo.jpg",
    alt: "Scott Spark RC World Cup EVO, mountain bike blanca",
    precio: null,
    accion: "Agregar",
  },
  {
    slug: "scott-ransom-rc",
    nombre: "Ransom RC",
    marca: "Scott",
    linea: "Enduro",
    imagen: "/demo/ransom-rc.jpg",
    alt: "Scott Ransom RC, mountain bike de enduro",
    precio: null,
    accion: "Agregar",
  },
  {
    slug: "scott-foil-rc-ultimate",
    nombre: "Foil RC Ultimate",
    marca: "Scott",
    linea: "Ruta",
    imagen: "/demo/foil-rc.jpg",
    alt: "Scott Foil RC Ultimate, bicicleta de ruta aero",
    precio: null,
    etiqueta: { texto: "A pedido", tono: "negro" },
    accion: "Consultar",
  },
];

export function formatearPrecio(precio: number | null): string {
  if (precio === null) return "$ [PRECIO]";
  return `$ ${precio.toLocaleString("es-AR", { maximumFractionDigits: 0 })}`;
}
