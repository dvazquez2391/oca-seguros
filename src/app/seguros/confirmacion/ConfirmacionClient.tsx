"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

// Pantalla de contratación exitosa — referencia: seguros-12
export default function ConfirmacionClient() {
  const params = useSearchParams();
  const router = useRouter();

  const poliza = params.get("poliza") ?? "OCA-2026-00001";
  const producto = params.get("producto") ?? "Asistencia 365";
  const precio = params.get("precio") ?? "260";
  const asegurado = params.get("asegurado") ?? "Ana García";
  const aseguradora = params.get("aseguradora") ?? "Addiuva";
  const fecha = params.get("fecha") ?? new Date().toLocaleDateString("es-UY");

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* NavBar mínimo — sin back en pantalla de éxito */}
      <div className="bg-white flex items-center justify-between px-4 py-3 border-b border-[#f0f0f0]">
        <span className="text-sm font-semibold text-[#1a1a1a]">OCA Seguros</span>
      </div>

      <div className="flex-1 flex flex-col px-4 py-6">
        {/* Ícono de éxito */}
        <div className="flex flex-col items-center pt-4 pb-6">
          <div className="w-20 h-20 rounded-full bg-[#e8f5e9] flex items-center justify-center mb-5">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="#28a745" fillOpacity="0.12" />
              <path
                d="M11 20.5L16.5 26L29 14"
                stroke="#28a745"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#1a1a1a] text-center leading-tight mb-2">
            ¡Tu seguro ya<br />está activo!
          </h1>
          <p className="text-sm text-[#666] text-center leading-relaxed max-w-xs">
            La contratación fue exitosa y recibirás la confirmación por correo electrónico.
          </p>
        </div>

        {/* Card de detalle de póliza */}
        <section className="bg-white rounded-2xl overflow-hidden mb-4">
          <div className="px-4 py-3 border-b border-[#f0f0f0] flex items-center gap-2">
            <span className="text-base">🔧</span>
            <div>
              <p className="text-sm font-bold text-[#1a1a1a]">{producto}</p>
              <span className="inline-flex items-center gap-1 bg-[#e8f5e9] text-[#2e7d32] text-[9px] font-semibold px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32] inline-block" />
                Activo
              </span>
            </div>
          </div>
          <div className="px-4 py-3 space-y-3">
            {[
              { label: "Nro. de póliza", value: poliza, highlight: true },
              { label: "Fecha de inicio", value: fecha },
              { label: "Asegurado", value: asegurado },
              { label: "Asegurado por", value: aseguradora },
              { label: "Prima mensual", value: `$${precio}/mes`, highlight: true },
            ].map(({ label, value, highlight }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-xs text-[#999]">{label}</span>
                <span
                  className={`text-sm font-semibold ${
                    highlight ? "text-[#6a4c9c]" : "text-[#1a1a1a]"
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Info contacto aseguradora */}
        <div className="bg-[#f9f5ff] rounded-2xl px-4 py-3 flex items-center gap-3 mb-6 border border-[#e0d5f0]">
          <span className="text-2xl">📞</span>
          <div>
            <p className="text-xs font-semibold text-[#6a4c9c]">¿Necesitás asistencia?</p>
            <p className="text-xs text-[#666]">
              Llamá a Addiuva al{" "}
              <a
                href="tel:08008031"
                className="font-bold text-[#6a4c9c]"
                aria-label="Llamar a Addiuva 0800-8031"
              >
                0800-8031
              </a>{" "}
              · Disponible 24hs, 365 días
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <Link
            href="/seguros/mis-seguros"
            className="flex items-center justify-center gap-2 w-full bg-[#6a4c9c] hover:bg-[#5a3d8a] text-white font-semibold py-4 rounded-2xl transition-colors text-sm"
            aria-label="Ver detalle de mis seguros"
          >
            Ver detalle
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
