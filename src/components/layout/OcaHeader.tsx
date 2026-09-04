"use client";
import Link from "next/link";
import { MOCK_USUARIO } from "@/mocks/seguros";

export default function OcaHeader() {
  const nombre = MOCK_USUARIO.nombre;

  return (
    <header className="bg-white border-b border-[#e0e0e0] sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">

        {/* Hamburger */}
        <button aria-label="Menú principal" className="p-1 -ml-1">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <rect width="22" height="2.5" rx="1.25" fill="#1a1a1a" />
            <rect y="6.5" width="22" height="2.5" rx="1.25" fill="#1a1a1a" />
            <rect y="13" width="22" height="2.5" rx="1.25" fill="#1a1a1a" />
          </svg>
        </button>

        {/* Logo OCA */}
        <Link href="/seguros" aria-label="Inicio Seguros OCA">
          <span
            className="font-extrabold text-2xl tracking-tight select-none"
            style={{ color: "#006ed2", letterSpacing: "-0.5px", fontFamily: "Inter, system-ui, sans-serif" }}
          >
            OCA
          </span>
        </Link>

        {/* Acciones derecha */}
        <div className="flex items-center gap-3">
          {/* Buscar */}
          <button aria-label="Buscar" className="p-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="#1a1a1a" strokeWidth="1.8" />
              <path d="M13 13L17 17" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          {/* Nombre usuario */}
          <button
            aria-label={`Usuario: ${nombre}`}
            className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a]"
          >
            {nombre}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}
