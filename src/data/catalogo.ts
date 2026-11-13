// Catálogo de EJEMPLO para maquetar el sitio.
// Los productos salen del catálogo internacional de Scott / Syncros: no reflejan
// el stock real del local. Se reemplaza por los datos del backend más adelante.

export type Producto = {
  slug: string;
  nombre: string;
  marca: string;
  /** Pestaña de la categoría a la que pertenece (ver `tipos`). */
  tipo: string;
  /** Texto corto que se muestra en la tarjeta. */
  linea: string;
  imagen: string;
  ancho: number;
  alto: number;
  alt: string;
  accion: "Agregar" | "Consultar";
  etiqueta?: "Nuevo" | "A pedido";
};

export type Categoria = {
  slug: string;
  titulo: string;
  numero: string;
  /** Palabra gigante de fondo en el encabezado. */
  fantasma: string;
  intro: string;
  /** [singular, plural] para el contador: "1 bicicleta" / "12 bicicletas". */
  unidad: [string, string];
  /** Pestañas; la primera es "todos". */
  tipos: string[];
  marcas: string[];
  /** Filtros que todavía no filtran: faltan esos datos en los productos. */
  filtrosExtra: { titulo: string; opciones: string[] }[];
  ayuda: { titulo: [string, string]; texto: string };
  productos: Producto[];
};

export const categorias: Categoria[] = [
  {
    "slug": "bicicletas",
    "titulo": "Bicicletas",
    "numero": "01",
    "fantasma": "BIKES",
    "intro": "Mountain bike, ruta, gravel, urbanas e infantiles. Te ayudamos a elegir el modelo y el talle.",
    "unidad": [
      "bicicleta",
      "bicicletas"
    ],
    "tipos": [
      "Todas",
      "Mountain Bike",
      "Ruta",
      "Gravel",
      "Urbanas",
      "Infantiles",
      "E-bikes"
    ],
    "marcas": [
      "Scott",
      "Orbea",
      "Titan",
      "Teknial"
    ],
    "filtrosExtra": [
      {
        "titulo": "Rodado",
        "opciones": [
          "20",
          "26",
          "27.5",
          "29",
          "700c"
        ]
      }
    ],
    "ayuda": {
      "titulo": [
        "¿No encontrás",
        "la que buscás?"
      ],
      "texto": "Contanos qué uso le vas a dar y tu altura. Te recomendamos modelo y talle, y te decimos si la podemos conseguir."
    },
    "productos": [
      {
        "slug": "scott-spark-rc-sl",
        "nombre": "Spark RC SL",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Cross Country",
        "imagen": "/demo/spark-rc-sl.jpg",
        "ancho": 540,
        "alto": 325,
        "alt": "Scott Spark RC SL, mountain bike de cross country",
        "accion": "Agregar",
        "etiqueta": "Nuevo"
      },
      {
        "slug": "scott-spark-rc-world-cup-evo",
        "nombre": "Spark RC World Cup EVO",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Cross Country",
        "imagen": "/demo/spark-rc-evo.jpg",
        "ancho": 540,
        "alto": 325,
        "alt": "Scott Spark RC World Cup EVO, mountain bike blanca",
        "accion": "Agregar"
      },
      {
        "slug": "scott-spark-rc-world-cup",
        "nombre": "Spark RC World Cup",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Cross Country",
        "imagen": "/demo/spark-rc-wc.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Spark RC World Cup, mountain bike blanca y negra",
        "accion": "Agregar"
      },
      {
        "slug": "scott-ransom-rc",
        "nombre": "Ransom RC",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Enduro",
        "imagen": "/demo/ransom-rc.jpg",
        "ancho": 540,
        "alto": 325,
        "alt": "Scott Ransom RC, mountain bike de enduro",
        "accion": "Agregar"
      },
      {
        "slug": "scott-ransom-10",
        "nombre": "Ransom 10",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Enduro",
        "imagen": "/demo/ransom-10.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Ransom 10, mountain bike de enduro gris",
        "accion": "Agregar"
      },
      {
        "slug": "scott-foil-rc-ultimate",
        "nombre": "Foil RC Ultimate",
        "marca": "Scott",
        "tipo": "Ruta",
        "linea": "Ruta",
        "imagen": "/demo/foil-rc.jpg",
        "ancho": 540,
        "alto": 325,
        "alt": "Scott Foil RC Ultimate, bicicleta de ruta aero",
        "accion": "Consultar",
        "etiqueta": "A pedido"
      },
      {
        "slug": "scott-foil-rc-pro",
        "nombre": "Foil RC Pro",
        "marca": "Scott",
        "tipo": "Ruta",
        "linea": "Ruta",
        "imagen": "/demo/foil-rc-pro.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Foil RC Pro, bicicleta de ruta aero",
        "accion": "Agregar"
      },
      {
        "slug": "scott-addict-10",
        "nombre": "Addict 10",
        "marca": "Scott",
        "tipo": "Ruta",
        "linea": "Ruta",
        "imagen": "/demo/addict-10.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Addict 10, bicicleta de ruta blanca",
        "accion": "Agregar"
      },
      {
        "slug": "scott-addict-gravel-10",
        "nombre": "Addict Gravel 10",
        "marca": "Scott",
        "tipo": "Gravel",
        "linea": "Gravel",
        "imagen": "/demo/addict-gravel-10.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Addict Gravel 10, bicicleta de gravel",
        "accion": "Agregar"
      },
      {
        "slug": "scott-metrix-10",
        "nombre": "Metrix 10",
        "marca": "Scott",
        "tipo": "Urbanas",
        "linea": "Urbana",
        "imagen": "/demo/metrix-10.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Metrix 10, bicicleta urbana con portaequipaje",
        "accion": "Agregar"
      },
      {
        "slug": "scott-sub-cross-10",
        "nombre": "Sub Cross 10",
        "marca": "Scott",
        "tipo": "Urbanas",
        "linea": "Urbana",
        "imagen": "/demo/sub-cross-10.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Sub Cross 10, bicicleta urbana negra",
        "accion": "Agregar"
      },
      {
        "slug": "scott-scale-rc-200",
        "nombre": "Scale RC 200",
        "marca": "Scott",
        "tipo": "Infantiles",
        "linea": "Infantil",
        "imagen": "/demo/scale-rc-200.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Scale RC 200, mountain bike infantil",
        "accion": "Agregar"
      }
    ]
  },
  {
    "slug": "repuestos",
    "titulo": "Repuestos",
    "numero": "02",
    "fantasma": "PARTS",
    "intro": "Ruedas, cockpits y componentes para ruta, gravel y MTB. Te asesoramos con la compatibilidad y lo instalamos en nuestro taller.",
    "unidad": [
      "repuesto",
      "repuestos"
    ],
    "tipos": [
      "Todos",
      "Ruedas",
      "Manubrios y cockpits",
      "Transmisión",
      "Frenos",
      "Cubiertas"
    ],
    "marcas": [
      "Syncros",
      "Shimano"
    ],
    "filtrosExtra": [
      {
        "titulo": "Disciplina",
        "opciones": [
          "MTB",
          "Ruta",
          "Gravel"
        ]
      }
    ],
    "ayuda": {
      "titulo": [
        "¿No sabés si",
        "es compatible?"
      ],
      "texto": "Pasanos el modelo de tu bici y te decimos qué repuesto le va. También lo colocamos en el taller."
    },
    "productos": [
      {
        "slug": "syncros-silverton-cf-ii",
        "nombre": "Silverton CF II",
        "marca": "Syncros",
        "tipo": "Ruedas",
        "linea": "Ruedas",
        "imagen": "/demo/silverton-cf.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros Silverton CF II, par de ruedas de carbono",
        "accion": "Agregar"
      },
      {
        "slug": "syncros-capital-10-40",
        "nombre": "Capital 1.0 40",
        "marca": "Syncros",
        "tipo": "Ruedas",
        "linea": "Ruedas",
        "imagen": "/demo/capital-40.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros Capital 1.0 40, par de ruedas de ruta",
        "accion": "Agregar"
      },
      {
        "slug": "syncros-capital-sl-aero-80",
        "nombre": "Capital SL Aero 80",
        "marca": "Syncros",
        "tipo": "Ruedas",
        "linea": "Ruedas",
        "imagen": "/demo/capital-sl-80.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros Capital SL Aero de 80 mm, rueda delantera",
        "accion": "Consultar",
        "etiqueta": "A pedido"
      },
      {
        "slug": "syncros-r501-cf-ii",
        "nombre": "R501-CF II",
        "marca": "Syncros",
        "tipo": "Manubrios y cockpits",
        "linea": "Cockpit de ruta",
        "imagen": "/demo/r501-cockpit.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros R501-CF II, cockpit integrado de ruta",
        "accion": "Agregar"
      },
      {
        "slug": "syncros-ic-m100-sl1",
        "nombre": "iC-M100-SL1",
        "marca": "Syncros",
        "tipo": "Manubrios y cockpits",
        "linea": "Cockpit MTB",
        "imagen": "/demo/ic-m100.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros iC-M100-SL1, cockpit integrado de MTB",
        "accion": "Agregar"
      },
      {
        "slug": "syncros-ic-r100-sl",
        "nombre": "IC-R100-SL",
        "marca": "Syncros",
        "tipo": "Manubrios y cockpits",
        "linea": "Cockpit de ruta",
        "imagen": "/demo/ic-r100.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros IC-R100-SL, cockpit integrado de ruta",
        "accion": "Agregar"
      }
    ]
  },
  {
    "slug": "accesorios",
    "titulo": "Accesorios",
    "numero": "03",
    "fantasma": "GEAR",
    "intro": "Bolsos, luces, candados y todo lo que suma a cada salida.",
    "unidad": [
      "accesorio",
      "accesorios"
    ],
    "tipos": [
      "Todos",
      "Bolsos",
      "Luces",
      "Candados",
      "Hidratación",
      "Herramientas"
    ],
    "marcas": [
      "Syncros",
      "Leader"
    ],
    "filtrosExtra": [
      {
        "titulo": "Ubicación",
        "opciones": [
          "Cuadro",
          "Manubrio",
          "Asiento"
        ]
      }
    ],
    "ayuda": {
      "titulo": [
        "¿Armando la bici",
        "para un viaje?"
      ],
      "texto": "Contanos qué querés llevar y por dónde vas a rodar. Te armamos el equipo que le va a tu bici."
    },
    "productos": [
      {
        "slug": "syncros-is-gravel-frame-bag",
        "nombre": "IS Gravel Frame Bag",
        "marca": "Syncros",
        "tipo": "Bolsos",
        "linea": "Bolso de cuadro",
        "imagen": "/demo/gravel-frame-bag.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros IS Gravel Frame Bag, bolso de cuadro con anclajes",
        "accion": "Agregar"
      },
      {
        "slug": "syncros-frame-pack",
        "nombre": "Frame Pack",
        "marca": "Syncros",
        "tipo": "Bolsos",
        "linea": "Bolso de cuadro",
        "imagen": "/demo/frame-pack.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros Frame Pack, bolso de cuadro montado en la bici",
        "accion": "Agregar"
      },
      {
        "slug": "syncros-toptube-bag",
        "nombre": "Toptube Bag",
        "marca": "Syncros",
        "tipo": "Bolsos",
        "linea": "Bolso de caño superior",
        "imagen": "/demo/toptube-bag.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros Toptube Bag, bolso para el caño superior",
        "accion": "Agregar",
        "etiqueta": "Nuevo"
      },
      {
        "slug": "syncros-handlebar-bag",
        "nombre": "Handlebar Bag",
        "marca": "Syncros",
        "tipo": "Bolsos",
        "linea": "Bolso de manubrio",
        "imagen": "/demo/handlebar-bag.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros Handlebar Bag, bolso de manubrio",
        "accion": "Agregar"
      },
      {
        "slug": "syncros-saddle-pack",
        "nombre": "Saddle Pack",
        "marca": "Syncros",
        "tipo": "Bolsos",
        "linea": "Bolso de asiento",
        "imagen": "/demo/saddle-pack.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros Saddle Pack, bolso bajo asiento",
        "accion": "Agregar"
      },
      {
        "slug": "syncros-is-road-frame-bag",
        "nombre": "IS Road Frame Bag",
        "marca": "Syncros",
        "tipo": "Bolsos",
        "linea": "Bolso de cuadro",
        "imagen": "/demo/road-frame-bag.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Syncros IS Road Frame Bag, bolso de cuadro para ruta",
        "accion": "Agregar"
      }
    ]
  },
  {
    "slug": "indumentaria",
    "titulo": "Indumentaria",
    "numero": "04",
    "fantasma": "WEAR",
    "intro": "Cascos, jerseys, camperas, zapatillas y guantes para rodar cómodo todo el año.",
    "unidad": [
      "producto",
      "productos"
    ],
    "tipos": [
      "Todo",
      "Cascos",
      "Jerseys",
      "Camperas",
      "Zapatillas",
      "Guantes"
    ],
    "marcas": [
      "Scott",
      "Leader"
    ],
    "filtrosExtra": [
      {
        "titulo": "Para",
        "opciones": [
          "Hombre",
          "Mujer",
          "Unisex"
        ]
      },
      {
        "titulo": "Talle",
        "opciones": [
          "S",
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "ayuda": {
      "titulo": [
        "¿Dudás",
        "con el talle?"
      ],
      "texto": "Escribinos con tus medidas y te decimos qué talle te va. También podés venir a probártelo al local."
    },
    "productos": [
      {
        "slug": "scott-cadence-mips",
        "nombre": "Cadence Mips",
        "marca": "Scott",
        "tipo": "Cascos",
        "linea": "Casco",
        "imagen": "/demo/helmet-cadence.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Cadence Mips, casco aero negro",
        "accion": "Agregar"
      },
      {
        "slug": "scott-arx-mips",
        "nombre": "Arx Mips",
        "marca": "Scott",
        "tipo": "Cascos",
        "linea": "Casco",
        "imagen": "/demo/helmet-arx.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Arx Mips, casco gris",
        "accion": "Agregar"
      },
      {
        "slug": "scott-rc-pro",
        "nombre": "RC Pro",
        "marca": "Scott",
        "tipo": "Jerseys",
        "linea": "Jersey hombre",
        "imagen": "/demo/jersey-rc-pro.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott RC Pro, jersey de manga corta amarillo y blanco",
        "accion": "Agregar",
        "etiqueta": "Nuevo"
      },
      {
        "slug": "scott-pro-cargo",
        "nombre": "Pro Cargo",
        "marca": "Scott",
        "tipo": "Jerseys",
        "linea": "Jersey mujer",
        "imagen": "/demo/jersey-pro-cargo.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Pro Cargo, jersey de manga corta gris para mujer",
        "accion": "Agregar"
      },
      {
        "slug": "scott-pro-waterproof",
        "nombre": "Pro Waterproof",
        "marca": "Scott",
        "tipo": "Camperas",
        "linea": "Campera",
        "imagen": "/demo/jacket-pro-wp.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Pro Waterproof, campera impermeable gris",
        "accion": "Agregar"
      },
      {
        "slug": "scott-road-rc",
        "nombre": "Road RC",
        "marca": "Scott",
        "tipo": "Zapatillas",
        "linea": "Zapatillas de ruta",
        "imagen": "/demo/shoe-road-rc.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Road RC, zapatillas de ruta blancas",
        "accion": "Agregar"
      },
      {
        "slug": "scott-road-comp",
        "nombre": "Road Comp",
        "marca": "Scott",
        "tipo": "Zapatillas",
        "linea": "Zapatillas de ruta",
        "imagen": "/demo/shoe-road-comp.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Road Comp, zapatillas de ruta negras",
        "accion": "Agregar"
      },
      {
        "slug": "scott-ultd",
        "nombre": "Ultd.",
        "marca": "Scott",
        "tipo": "Guantes",
        "linea": "Guantes",
        "imagen": "/demo/glove-ultd.jpg",
        "ancho": 334,
        "alto": 250,
        "alt": "Scott Ultd., guantes largos bordó",
        "accion": "Agregar"
      }
    ]
  }
];

export function buscarCategoria(slug: string): Categoria | undefined {
  return categorias.find((c) => c.slug === slug);
}

/** Productos que se muestran en la home. */
const slugsDestacados = [
  "scott-spark-rc-sl",
  "scott-spark-rc-world-cup-evo",
  "scott-ransom-rc",
  "scott-foil-rc-ultimate",
];
export const destacados: Producto[] = slugsDestacados.flatMap((s) =>
  categorias.flatMap((c) => c.productos.filter((p) => p.slug === s)),
);

/** Todavía no hay precios cargados. */
export const PRECIO_PENDIENTE = "$ [PRECIO]";
