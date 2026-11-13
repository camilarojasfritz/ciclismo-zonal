// Datos del local. Lo marcado como "confirmar" sale del sitio anterior
// y hay que validarlo con el negocio (ver docs/08-pendientes-a-confirmar.md).

export const site = {
  nombre: "Ciclismo Zonal",
  bajada: "Concept Store",
  descripcion:
    "Bicicletas, repuestos, accesorios e indumentaria. Taller oficial Shimano Service Center. Envíos a todo el país. Alvear 216, Santa Rosa, La Pampa.",
  direccion: "Marcelo T. de Alvear 216, Santa Rosa, La Pampa",
  direccionCorta: "M. T. de Alvear 216, Santa Rosa",
  // Ficha del local en Google Maps
  mapsUrl:
    "https://www.google.com/maps/place/Ciclismo+Zonal/@-36.6168736,-64.2909396,17z/data=!3m1!4b1!4m6!3m5!1s0x95c2cd661e06f03f:0xdf35ef4c33d0fa33!8m2!3d-36.6168779!4d-64.2883647!16s%2Fg%2F11f6s827d0",
  // Mapa incrustado, centrado en el local
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Ciclismo+Zonal,+Marcelo+T.+de+Alvear+216,+Santa+Rosa,+La+Pampa&ll=-36.6168779,-64.2883647&z=16&hl=es&output=embed",
  // confirmar
  whatsapp: "5492954668450",
  whatsappVisible: "+54 9 2954 66-8450",
  instagram: "https://www.instagram.com/ciclismozonal/",
  facebook: "https://www.facebook.com/ciclismozonal/",
  // confirmar
  horarios: [
    { dias: "Lunes a viernes", horas: "8:30 a 12:30 · 16:00 a 20:00" },
    { dias: "Sábados", horas: "9:00 a 13:00" },
  ],
  aviso: "Envíos a todo el país · Shimano Service Center · Santa Rosa, La Pampa",
} as const;

export const navegacion = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo/bicicletas", label: "Bicicletas" },
  { href: "/catalogo/repuestos", label: "Repuestos" },
  { href: "/catalogo/accesorios", label: "Accesorios" },
  { href: "/catalogo/indumentaria", label: "Indumentaria" },
  { href: "/#taller", label: "Taller" },
  { href: "/#contacto", label: "Contacto" },
] as const;
