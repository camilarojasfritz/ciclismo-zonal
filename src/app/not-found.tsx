import Link from "next/link";

export default function NoEncontrada() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <Link href="/" className="text-orange-600 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
