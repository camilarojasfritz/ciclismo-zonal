// Catálogo del sitio.
// - Bicicletas: modelos que vende el local (noviembre 2026). Precios y fotos de
//   referencia tomados de Tienda Scott (tiendascott.com): confirmarlos con el local.
// - Repuestos, accesorios e indumentaria: todavía son EJEMPLOS del catálogo
//   internacional de Scott / Syncros, sin precio.
// Cuando exista el panel de administración, estos datos van a salir de la base.

export type Especificacion = { clave: string; valor: string };

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
  /** Precio en pesos. null = todavía sin precio cargado. */
  precio: number | null;
  accion: "Agregar" | "Consultar";
  etiqueta?: "Nuevo" | "A pedido";
  /** Para la ficha del producto. */
  descripcion?: string;
  specs?: Especificacion[];
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
  /** Pestañas posibles, en orden; la primera es "todos". Solo se muestran las que tienen productos. */
  tipos: string[];
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
    "intro": "Mountain bikes Scott para el día a día y el trail. Te ayudamos a elegir el modelo y el talle.",
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
    "filtrosExtra": [
      {
        "titulo": "Rodado",
        "opciones": [
          "27.5",
          "29"
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
        "slug": "scott-contrail-30",
        "nombre": "Contrail 30",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Mountain bike",
        "imagen": "/bicis/contrail-30.jpg",
        "ancho": 800,
        "alto": 500,
        "alt": "Scott Contrail 30, mountain bike rígida verde claro, vista lateral",
        "precio": 1740000,
        "accion": "Agregar",
        "descripcion": "Mountain bike rígida (hardtail), modelo 2026, pensada para quienes se inician en el cross country y el trail.",
        "specs": [
          {
            "clave": "Cuadro",
            "valor": "Aluminio 6061 Custom Butted, geometría inspirada en el trail"
          },
          {
            "clave": "Horquilla",
            "valor": "Suntour XCE28, 100 mm de recorrido"
          },
          {
            "clave": "Transmisión",
            "valor": "Shimano CUES de 9 velocidades, monoplato"
          },
          {
            "clave": "Frenos",
            "valor": "Disco hidráulicos Tektro"
          },
          {
            "clave": "Cubiertas",
            "valor": "Maxxis Rekon Race, rodado 29"
          }
        ]
      },
      {
        "slug": "scott-contrail-20",
        "nombre": "Contrail 20",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Mountain bike",
        "imagen": "/bicis/contrail-20.jpg",
        "ancho": 800,
        "alto": 500,
        "alt": "Scott Contrail 20, mountain bike rígida negra, vista lateral",
        "precio": 2040000,
        "accion": "Agregar",
        "descripcion": "Mountain bike rígida de nivel inicial a intermedio, versátil para senderos recreativos y para la ciudad.",
        "specs": [
          {
            "clave": "Cuadro",
            "valor": "Aluminio 6061 con cableado interno"
          },
          {
            "clave": "Horquilla",
            "valor": "SR Suntour XCT30-HLO, 100 mm de recorrido, con bloqueo"
          },
          {
            "clave": "Transmisión",
            "valor": "Shimano CUES de 11 velocidades, monoplato 32T y cassette 11-50T"
          },
          {
            "clave": "Frenos",
            "valor": "Disco hidráulicos Tektro TKD 176, rotores de 160 mm"
          }
        ]
      },
      {
        "slug": "scott-contrail-10",
        "nombre": "Contrail 10",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Mountain bike",
        "imagen": "/bicis/contrail-10.jpg",
        "ancho": 800,
        "alto": 500,
        "alt": "Scott Contrail 10, mountain bike rígida celeste, vista lateral",
        "precio": 2430000,
        "accion": "Agregar",
        "descripcion": "Mountain bike rígida para recorridos de trail y aventuras en la naturaleza, con horquilla RockShox y frenos Shimano.",
        "specs": [
          {
            "clave": "Cuadro",
            "valor": "Aluminio 6061 Custom Butted, cableado interno"
          },
          {
            "clave": "Horquilla",
            "valor": "RockShox Judy Silver TK, 100 mm de recorrido, con ajuste de rebote y bloqueo"
          },
          {
            "clave": "Transmisión",
            "valor": "Shimano CUES de 11 velocidades, cassette 11-50T"
          },
          {
            "clave": "Frenos",
            "valor": "Disco hidráulicos Shimano MT200, rotores de 180 mm adelante y 160 mm atrás"
          },
          {
            "clave": "Cubiertas",
            "valor": "Maxxis Rekon Race"
          },
          {
            "clave": "Componentes",
            "valor": "Syncros, manubrio de 720 mm"
          }
        ]
      },
      {
        "slug": "scott-contessa-active-40",
        "nombre": "Contessa Active 40",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Mountain bike para mujer",
        "imagen": "/bicis/contessa-active-40.jpg",
        "ancho": 800,
        "alto": 500,
        "alt": "Scott Contessa Active 40, mountain bike rígida bordó para mujer, vista lateral",
        "precio": 1316000,
        "accion": "Agregar",
        "descripcion": "Mountain bike rígida diseñada para la anatomía y la comodidad de la mujer. Ideal para iniciarse en el MTB y para salidas recreativas.",
        "specs": [
          {
            "clave": "Cuadro",
            "valor": "Aluminio 6061 con cableado interno"
          },
          {
            "clave": "Horquilla",
            "valor": "Suntour XCT30-HLO, 100 mm de recorrido, con bloqueo"
          },
          {
            "clave": "Transmisión",
            "valor": "Shimano Altus de 18 velocidades (2x9), cassette 11-36T"
          },
          {
            "clave": "Frenos",
            "valor": "Disco hidráulicos Tektro"
          },
          {
            "clave": "Componentes",
            "valor": "Asiento Syncros Savona 2.5 V-Concept para mujer, llantas Syncros X-20"
          },
          {
            "clave": "Cubiertas",
            "valor": "Kenda Booster"
          }
        ]
      },
      {
        "slug": "scott-aspect-960",
        "nombre": "Aspect 960",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Mountain bike",
        "imagen": "/bicis/aspect-960.jpg",
        "ancho": 800,
        "alto": 500,
        "alt": "Scott Aspect 960, mountain bike rígida roja, vista lateral",
        "precio": 1162000,
        "accion": "Agregar",
        "descripcion": "Mountain bike rígida rodado 29 para quienes se inician, con un buen equilibrio entre precio y calidad.",
        "specs": [
          {
            "clave": "Cuadro",
            "valor": "Aluminio con guiado interno de cables"
          },
          {
            "clave": "Horquilla",
            "valor": "Suntour XCE28, 100 mm de recorrido"
          },
          {
            "clave": "Transmisión",
            "valor": "Shimano TX800 de 16 velocidades (2x8)"
          },
          {
            "clave": "Frenos",
            "valor": "Disco hidráulicos Tektro"
          },
          {
            "clave": "Componentes",
            "valor": "Syncros"
          },
          {
            "clave": "Cubiertas",
            "valor": "Kenda Booster, rodado 29"
          }
        ]
      },
      {
        "slug": "scott-aspect-950",
        "nombre": "Aspect 950",
        "marca": "Scott",
        "tipo": "Mountain Bike",
        "linea": "Mountain bike",
        "imagen": "/bicis/aspect-950.jpg",
        "ancho": 800,
        "alto": 500,
        "alt": "Scott Aspect 950, mountain bike rígida gris, vista lateral",
        "precio": 1316000,
        "accion": "Agregar",
        "descripcion": "Mountain bike rígida de entrada, ideal para principiantes o uso recreativo.",
        "specs": [
          {
            "clave": "Cuadro",
            "valor": "Aluminio 6061 con cableado interno"
          },
          {
            "clave": "Horquilla",
            "valor": "Suntour XCT30-HLO, 100 mm de recorrido, con bloqueo"
          },
          {
            "clave": "Transmisión",
            "valor": "Shimano Altus de 18 velocidades (2x9)"
          },
          {
            "clave": "Frenos",
            "valor": "Disco hidráulicos Tektro"
          },
          {
            "clave": "Cubiertas",
            "valor": "Kenda Booster, rodado 29"
          },
          {
            "clave": "Componentes",
            "valor": "Syncros"
          }
        ]
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
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
        "precio": null,
        "accion": "Agregar"
      }
    ]
  }
];

export function buscarCategoria(slug: string): Categoria | undefined {
  return categorias.find((c) => c.slug === slug);
}

export function buscarProducto(slug: string): { producto: Producto; categoria: Categoria } | undefined {
  for (const categoria of categorias) {
    const producto = categoria.productos.find((p) => p.slug === slug);
    if (producto) return { producto, categoria };
  }
  return undefined;
}

/** Productos que se muestran en la home. */
const slugsDestacados = ["scott-contrail-10", "scott-contrail-20", "scott-contessa-active-40", "scott-aspect-960"];
export const destacados: Producto[] = slugsDestacados.flatMap((s) => {
  const encontrado = buscarProducto(s);
  return encontrado ? [encontrado.producto] : [];
});

/** Modelo que aparece en grande en la home. */
export const SLUG_MODELO_DESTACADO = "scott-contrail-10";

export const PRECIO_PENDIENTE = "$ [PRECIO]";

export function formatearPrecio(precio: number | null): string {
  return precio === null ? PRECIO_PENDIENTE : `$ ${precio.toLocaleString("es-AR")}`;
}
