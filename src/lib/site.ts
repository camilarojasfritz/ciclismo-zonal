// Datos del local. Lo marcado como "confirmar" sale del sitio anterior
// y hay que validarlo con el negocio (ver docs/08-pendientes-a-confirmar.md).

export const site = {
  nombre: "Ciclismo Zonal",
  bajada: "Concept Store",
  descripcion:
    "Bicicletas, repuestos, accesorios e indumentaria. Taller oficial Shimano Service Center. Envíos a todo el país. Alvear 216, Santa Rosa, La Pampa.",
  direccion: "Marcelo T. de Alvear 216, Santa Rosa, La Pampa",
  direccionCorta: "M. T. de Alvear 216, Santa Rosa",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Marcelo+T.+de+Alvear+216+Santa+Rosa+La+Pampa",
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
  { href: "/#inicio", label: "Inicio" },
  { href: "/#catalogo", label: "Bicicletas" },
  { href: "/#catalogo", label: "Repuestos" },
  { href: "/#catalogo", label: "Accesorios" },
  { href: "/#catalogo", label: "Indumentaria" },
  { href: "/#taller", label: "Taller" },
  { href: "/#contacto", label: "Contacto" },
] as const;
