import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#f4f4f4]">
      <span className="text-5xl mb-4">🛡️</span>
      <h1 className="text-xl font-bold text-[#1a1a1a] mb-2">Pantalla no encontrada</h1>
      <p className="text-sm text-[#666] mb-6 text-center">
        La página que buscás no existe o fue movida.
      </p>
      <Link
        href="/seguros"
        className="bg-[#006ed2] text-white font-semibold px-6 py-3 rounded-xl text-sm"
      >
        Volver a Seguros
      </Link>
    </div>
  );
}
