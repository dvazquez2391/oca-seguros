"use client";
import Link from "next/link";
import type { PolizaContratada } from "@/types/seguros";
import NavBar from "@/components/layout/NavBar";

interface Props {
  polizas: PolizaContratada[];
}

export default function MisSegurosClient({ polizas }: Props) {
  return (
    <div className="pb-8">
      <NavBar backLabel="Seguros" backHref="/seguros" />

      <div className="bg-white px-4 pt-2 pb-4">
        <h1 className="text-2xl font-bold text-[#1a1a1a]">Seguros contratados</h1>
      </div>

      <div className="px-4 mt-3 space-y-3">
        {polizas.length === 0 ? (
          /* Estado vacío */
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="font-semibold text-[#1a1a1a] mb-2">No tenés seguros contratados</h2>
            <p className="text-sm text-[#666] mb-5">Conocé qué tenemos para vos</p>
            <Link
              href="/seguros"
              className="bg-[#006ed2] text-white font-semibold py-3 px-6 rounded-xl text-sm"
            >
              Ver seguros disponibles
            </Link>
          </div>
        ) : (
          <>
            {polizas.map((poliza) => (
              <Link
                key={poliza.id}
                href={`/seguros/mis-seguros/${poliza.id}`}
                className="block bg-white rounded-2xl border border-[#e0e0e0] hover:border-[#006ed2] transition-colors"
                aria-label={`Ver detalle de ${poliza.productoNombre}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 pt-4 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{poliza.productoIcono}</span>
                    <span className="font-semibold text-sm text-[#1a1a1a]">{poliza.productoNombre}</span>
                  </div>
                  <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
                    <path d="M1 1L4 4.5L1 8" stroke="#999" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Divisor */}
                <div className="border-t border-[#f0f0f0] mx-4" />

                {/* Datos */}
                <div className="px-4 py-3 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#999]">Asegurado por</span>
                    <span className="text-xs font-semibold text-[#1a1a1a]">{poliza.aseguradora}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#999]">¿Necesitás asistencia?</span>
                    <span className="text-xs font-semibold text-[#006ed2]">{poliza.telefonoAsistencia}</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Botón ver más */}
            <Link
              href="/seguros"
              className="block w-full border border-[#1a1a1a] text-[#1a1a1a] font-semibold py-3 rounded-xl text-sm text-center hover:bg-[#f4f4f4] transition-colors"
              aria-label="Ver más seguros disponibles"
            >
              Ver más seguros
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
