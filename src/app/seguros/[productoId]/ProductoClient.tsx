"use client";
import { useState } from "react";
import Link from "next/link";
import type { Producto } from "@/types/seguros";
import NavBar from "@/components/layout/NavBar";

interface Props {
  producto: Producto;
}

const HERO_COLORS: Record<string, string> = {
  "asistencia-365": "linear-gradient(135deg, #6a4c9c 0%, #9c6ba5 100%)",
  "mascotas": "linear-gradient(135deg, #2e7d32 0%, #43a047 100%)",
  "viajes": "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
  "celulares": "linear-gradient(135deg, #006ed2 0%, #0091ea 100%)",
  "equipos-electronicos": "linear-gradient(135deg, #37474f 0%, #546e7a 100%)",
  "bolso-protegido": "linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)",
  "proteccion-financiera": "linear-gradient(135deg, #b71c1c 0%, #c62828 100%)",
  "garantia-alquiler": "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
  "bicicletas": "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
};

// Descripción comercial específica por producto (seguros-7)
const DESCRIPCIONES_COMERCIALES: Record<string, string> = {
  "asistencia-365": "Con Asistencia 365 tenés acceso a servicios para el hogar, asistencia legal, médica y vial, todo el año, las 24 horas. Un servicio pensado para que nunca estés solo ante un imprevisto.",
};

export default function ProductoClient({ producto }: Props) {
  const [expanded, setExpanded] = useState(false);
  const heroBg = HERO_COLORS[producto.id] || "linear-gradient(135deg, #006ed2 0%, #0091ea 100%)";
  const visibleCoberturas = expanded ? producto.coberturas : producto.coberturas.slice(0, 4);
  const hasMore = producto.coberturas.length > 4;
  const descripcionComercial = DESCRIPCIONES_COMERCIALES[producto.id];
  const esAsistencia365 = producto.id === "asistencia-365";

  return (
    <div className="pb-36">
      <NavBar backLabel="Seguros" backHref="/seguros" />

      {/* Hero banner */}
      <div
        className="relative mx-4 mt-2 rounded-2xl overflow-hidden h-44"
        style={{ background: heroBg }}
        aria-hidden="true"
      >
        {/* Badge aseguradora */}
        <div className="absolute top-3 left-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2.5 py-1">
            <span className="text-white text-xs font-semibold">{producto.aseguradora}</span>
          </div>
        </div>
        {/* Badge descuento */}
        {producto.badgeDescuento && (
          <div className="absolute top-3 right-3">
            <span className="bg-[#2e7d32] text-white text-[10px] font-bold px-2 py-1 rounded-full">
              {producto.badgeDescuento}
            </span>
          </div>
        )}
        {/* Ícono grande */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl opacity-25">{producto.icono}</span>
        </div>
        {/* Nombre + descripción */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-bold text-lg leading-tight">{producto.nombre}</p>
          <p className="text-white/80 text-xs mt-0.5 leading-snug">{producto.descripcion}</p>
        </div>
      </div>

      {/* Descripción comercial — solo A365 */}
      {descripcionComercial && (
        <div className="bg-white mx-4 mt-3 rounded-2xl px-4 py-4">
          <p className="text-sm text-[#444] leading-relaxed">{descripcionComercial}</p>
        </div>
      )}

      {/* Coberturas */}
      <section className="bg-white rounded-2xl mx-4 mt-3 px-4 py-4">
        <h2 className="font-semibold text-[#1a1a1a] text-sm mb-4">
          {esAsistencia365 ? "¿Qué incluye tu Asistencia 365?" : "Tu servicio de asistencia incluye:"}
        </h2>
        <div className="divide-y divide-[#f0f0f0]">
          {visibleCoberturas.map((cob, i) => (
            <div key={i} className="flex items-start gap-3 py-3">
              <span className="text-lg w-6 flex-shrink-0 mt-0.5">{cob.icono}</span>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">{cob.titulo}</p>
                {cob.descripcion && (
                  <p className="text-xs text-[#666] mt-0.5 leading-relaxed">{cob.descripcion}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-[#6a4c9c] text-sm font-medium mt-3"
            aria-expanded={expanded}
            aria-label={expanded ? "Ver menos servicios" : "Ver más servicios"}
          >
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            >
              <path d="M1 1L6 6L11 1" stroke="#6a4c9c" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {expanded ? "Ver menos servicios" : `Ver los ${producto.coberturas.length - 4} servicios restantes`}
          </button>
        )}

        {/* Links legales — seguros-7 */}
        <div className="mt-4 pt-3 border-t border-[#f0f0f0] space-y-2">
          <button
            className="flex items-center gap-2 text-[#6a4c9c] text-xs font-medium"
            aria-label="Ver póliza y coberturas completas"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="#6a4c9c" strokeWidth="1.2"/>
              <path d="M4 5h6M4 7.5h6M4 10h4" stroke="#6a4c9c" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Póliza y coberturas completas
          </button>
          <button
            className="flex items-center gap-2 text-[#6a4c9c] text-xs font-medium"
            aria-label="Ver condiciones generales del servicio"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" stroke="#6a4c9c" strokeWidth="1.2"/>
              <path d="M7 6v4M7 4.5v.5" stroke="#6a4c9c" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Condiciones generales del servicio
          </button>
          {producto.coberturaProveedorTexto && (
            <p className="text-[10px] text-[#999] pt-1">{producto.coberturaProveedorTexto}</p>
          )}
        </div>
      </section>

      {/* CTA fijo en bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e0e0] px-4 py-4 z-40">
        <div className="max-w-md mx-auto">
          {producto.precioDesde && (
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-xs text-[#666]">Solo por</span>
              <span className="text-lg font-bold text-[#1a1a1a]">${producto.precioDesde}</span>
              <span className="text-xs text-[#666]">al mes</span>
              {producto.badgeDescuento && (
                <span className="ml-auto bg-[#e8f5e9] text-[#2e7d32] text-[9px] font-bold px-2 py-0.5 rounded-full">
                  {producto.badgeDescuento}
                </span>
              )}
            </div>
          )}
          <Link
            href={producto.id === "viajes" ? "/seguros/viajes" : `/seguros/contratar?producto=${producto.id}`}
            className="flex items-center justify-center gap-2 w-full bg-[#6a4c9c] hover:bg-[#5a3d8a] text-white font-semibold py-4 rounded-2xl transition-colors text-sm"
            aria-label={`Contratar ${producto.nombre}`}
          >
            Continuar
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
