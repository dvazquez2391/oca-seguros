"use client";
import Link from "next/link";

// Pantalla de error de contratación — referencia: seguros-13
export default function ErrorContratacionClient() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* NavBar mínimo */}
      <div className="bg-white flex items-center px-4 py-3 border-b border-[#f0f0f0]">
        <Link
          href="/seguros"
          className="flex items-center gap-1 text-[#1a1a1a] text-sm font-medium"
          aria-label="Volver a seguros"
        >
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M6 1L1 6L6 11" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Seguros
        </Link>
      </div>

      {/* Contenido centrado */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Ícono de error */}
        <div className="w-20 h-20 rounded-full bg-[#fdecea] flex items-center justify-center mb-6">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <circle cx="18" cy="18" r="17" stroke="#dc3545" strokeWidth="1.5" />
            <path
              d="M18 10v9M18 23v2"
              stroke="#dc3545"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Títulos */}
        <h1 className="text-xl font-bold text-[#1a1a1a] text-center mb-2">
          Algo salió mal
        </h1>
        <p className="text-sm text-[#666] text-center leading-relaxed mb-2 max-w-xs">
          No pudimos procesar tu contratación en este momento.
        </p>
        <p className="text-sm text-[#666] text-center leading-relaxed mb-8 max-w-xs">
          Intentá nuevamente en unos minutos.
        </p>

        {/* Detalle técnico amigable */}
        <div className="w-full bg-white rounded-2xl px-4 py-4 mb-8 border border-[#f0f0f0]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#fff3e0] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6" stroke="#f57c00" strokeWidth="1.2" />
                <path d="M7 4v3.5M7 9.5v.5" stroke="#f57c00" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a1a1a] mb-0.5">¿Qué podés hacer?</p>
              <ul className="text-xs text-[#666] space-y-1 leading-relaxed">
                <li>• Verificá tu conexión a internet</li>
                <li>• Intentá nuevamente en unos minutos</li>
                <li>• Si el problema persiste, llamá a Addiuva al <span className="font-semibold text-[#006ed2]">0800-8031</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="w-full space-y-3">
          <Link
            href="/seguros/contratar?producto=asistencia-365"
            className="flex items-center justify-center gap-2 w-full bg-[#6a4c9c] hover:bg-[#5a3d8a] text-white font-semibold py-4 rounded-2xl transition-colors text-sm"
            aria-label="Reintentar contratación"
          >
            Reintentar
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </Link>
          <Link
            href="/seguros"
            className="flex items-center justify-center w-full border border-[#e0e0e0] text-[#666] font-medium py-3.5 rounded-2xl hover:bg-[#f5f5f5] transition-colors text-sm"
            aria-label="Volver al inicio de seguros"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
