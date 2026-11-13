import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { site } from "@/lib/site";
import "./globals.css";

// Montserrat: la letra del cartel del local. Source Sans 3: textos de lectura.
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });
const sourceSans = Source_Sans_3({ variable: "--font-source-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ciclismo Zonal | Bicicletería y taller Shimano en Santa Rosa, La Pampa",
    template: "%s | Ciclismo Zonal",
  },
  description: site.descripcion,
};

// En celular la barra muestra solo el primer mensaje, para que entre en una línea
const [avisoCorto, ...restoAviso] = site.aviso.split(" · ");
const avisoResto = restoAviso.join(" · ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${montserrat.variable} ${sourceSans.variable} antialiased`}>
      <body>
        <div className="flex min-h-dvh flex-col lg:flex-row">
          <Sidebar />
          <div className="min-w-0 flex-1 overflow-x-clip">
            <div className="franja-roja px-4 py-2 text-center font-display text-[11px] font-semibold uppercase tracking-[0.2em]">
              {avisoCorto}
              <span className="hidden sm:inline"> · {avisoResto}</span>
            </div>
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
