import Hero from "@/components/home/Hero";
import { Marcas, Taller } from "@/components/home/Taller";
import { Categorias, Destacados, ModeloDestacado } from "@/components/home/Tienda";
import Visitanos from "@/components/home/Visitanos";

export default function Inicio() {
  return (
    <>
      <Hero />
      <ModeloDestacado />
      <Categorias />
      <Destacados />
      <Taller />
      <Marcas />
      <Visitanos />
    </>
  );
}
