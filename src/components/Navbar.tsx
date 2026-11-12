import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/calendario", label: "Calendario" },
  { href: "/resultados", label: "Resultados" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Ciclismo Zonal
        </Link>
        <ul className="flex gap-5 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-orange-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
