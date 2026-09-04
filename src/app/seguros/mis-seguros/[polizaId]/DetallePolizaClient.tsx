"use client";
import { useState } from "react";
import Link from "next/link";
import type { PolizaContratada } from "@/types/seguros";
import { MOCK_FAQS } from "@/mocks/seguros";
import NavBar from "@/components/layout/NavBar";

interface Props {
  poliza: PolizaContratada;
}

export default function DetallePolizaClient({ poliza }: Props) {
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);
  const [modalCancelar, setModalCancelar] = useState(false);
  const [modalCondiciones, setModalCondiciones] = useState(false);

  // FAQs de la aseguradora de esta póliza
  const faqsAseguradora = MOCK_FAQS.find(
    (f) => f.aseguradora.toLowerCase() === poliza.aseguradora.toLowerCase()
  );

  return (
    <div className="pb-24">
      <NavBar backLabel="Mis seguros" backHref="/seguros/mis-seguros" />

      {/* Hero del producto */}
      <div className="bg-white px-4 pt-2 pb-5">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-3xl">{poliza.productoIcono}</span>
          <div>
            <h1 className="text-xl font-bold text-[#1a1a1a]">{poliza.productoNombre}</h1>
            <span className="inline-flex items-center gap-1 bg-[#e8f5e9] text-[#2e7d32] text-[10px] font-semibold px-2 py-0.5 rounded-full mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32] inline-block" />
              Activo
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 px-4 mt-3">

        {/* Card datos de póliza */}
        <section className="bg-white rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#f0f0f0]">
            <h2 className="text-sm font-semibold text-[#1a1a1a]">Datos de tu póliza</h2>
          </div>
          <div className="px-4 py-3 space-y-3">
            {[
              { label: "Asegurado por", value: poliza.aseguradora },
              { label: "Fecha de contratación", value: poliza.fechaContratacion },
              { label: "Prima mensual", value: `$${poliza.primaMensual}/mes`, highlight: true },
            ].map(({ label, value, highlight }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-xs text-[#999]">{label}</span>
                <span className={`text-sm font-semibold ${highlight ? "text-[#006ed2]" : "text-[#1a1a1a]"}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Card coberturas */}
        <section className="bg-white rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#f0f0f0]">
            <h2 className="text-sm font-semibold text-[#1a1a1a]">Tu servicio de asistencia incluye:</h2>
          </div>
          <div className="px-4 divide-y divide-[#f0f0f0]">
            {poliza.coberturas.map((cob, i) => (
              <div key={i} className="flex items-center gap-3 py-3">
                <span className="text-base w-5 flex-shrink-0">{cob.icono}</span>
                <span className="text-sm text-[#1a1a1a]">{cob.titulo}</span>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-[#f0f0f0]">
            <button
              onClick={() => setModalCondiciones(true)}
              className="text-[#006ed2] text-xs font-medium"
              aria-label="Ver condiciones del seguro"
            >
              Ver condiciones del servicio
            </button>
          </div>
        </section>

        {/* Card asistencia */}
        <section className="bg-white rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#f0f0f0]">
            <h2 className="text-sm font-semibold text-[#1a1a1a]">¿Necesitás asistencia?</h2>
          </div>
          <div className="px-4 py-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-[#999] mb-0.5">Llamá a {poliza.aseguradora}</p>
              <p className="text-xl font-bold text-[#006ed2]">{poliza.telefonoAsistencia}</p>
              <p className="text-[10px] text-[#999] mt-0.5">Disponible 24hs, los 365 días</p>
            </div>
            <a
              href={`tel:${poliza.telefonoAsistencia.replace(/\s/g, "")}`}
              className="w-11 h-11 rounded-full bg-[#006ed2] flex items-center justify-center flex-shrink-0"
              aria-label={`Llamar a ${poliza.aseguradora}`}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 2H6.5L8 5.5L6 7C6.83 8.66 9.34 11.17 11 12L12.5 10L16 11.5V14.5C16 15.33 15.33 16 14.5 16C7.6 16 2 10.4 2 3.5C2 2.67 2.67 2 3.5 2Z" fill="white" />
              </svg>
            </a>
          </div>
        </section>

        {/* FAQs */}
        {faqsAseguradora && faqsAseguradora.preguntas.length > 0 && (
          <section className="bg-white rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-[#f0f0f0]">
              <h2 className="text-sm font-semibold text-[#1a1a1a]">Preguntas frecuentes</h2>
            </div>
            <div className="divide-y divide-[#f0f0f0]">
              {faqsAseguradora.preguntas.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setFaqAbierta(faqAbierta === i ? null : i)}
                    className="w-full flex items-start justify-between gap-3 px-4 py-3 text-left"
                    aria-expanded={faqAbierta === i}
                  >
                    <span className="text-xs font-medium text-[#1a1a1a] leading-relaxed pr-2">
                      {faq.pregunta}
                    </span>
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      className={`flex-shrink-0 mt-0.5 transition-transform ${faqAbierta === i ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1L6 6L11 1" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  {faqAbierta === i && (
                    <div className="px-4 pb-3">
                      <p className="text-xs text-[#666] leading-relaxed">{faq.respuesta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Botón cancelar */}
        <button
          onClick={() => setModalCancelar(true)}
          className="w-full border border-[#BA1E2D] text-[#BA1E2D] font-semibold py-3.5 rounded-2xl text-sm hover:bg-red-50 transition-colors"
          aria-label="Cancelar seguro"
        >
          Cancelar seguro
        </button>
      </div>

      {/* Modal cancelar */}
      {modalCancelar && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center" role="dialog" aria-modal="true">
          <div className="bg-white rounded-t-3xl w-full max-w-md px-5 pt-6 pb-8 animate-slide-up">
            <div className="w-10 h-1 bg-[#e0e0e0] rounded-full mx-auto mb-5" />
            <div className="text-center mb-5">
              <p className="text-4xl mb-3">⚠️</p>
              <h3 className="font-bold text-[#1a1a1a] text-lg mb-2">¿Cancelar tu seguro?</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                Al cancelar perdés tu cobertura al final del período mensual en curso.
                Esta acción no se puede deshacer.
              </p>
            </div>
            <div className="space-y-3">
              <button
                className="w-full bg-[#BA1E2D] text-white font-semibold py-3.5 rounded-2xl text-sm"
                onClick={() => setModalCancelar(false)}
                aria-label="Confirmar cancelación"
              >
                Sí, cancelar mi seguro
              </button>
              <button
                className="w-full border border-[#e0e0e0] text-[#1a1a1a] font-semibold py-3.5 rounded-2xl text-sm"
                onClick={() => setModalCancelar(false)}
                aria-label="Volver sin cancelar"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal condiciones */}
      {modalCondiciones && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center" role="dialog" aria-modal="true">
          <div className="bg-white rounded-t-3xl w-full max-w-md px-5 pt-6 pb-8 max-h-[80vh] overflow-y-auto">
            <div className="w-10 h-1 bg-[#e0e0e0] rounded-full mx-auto mb-5" />
            <h3 className="font-bold text-[#1a1a1a] text-base mb-3">Condiciones del servicio</h3>
            <div className="text-xs text-[#666] space-y-3 leading-relaxed">
              <p>
                <strong>Nota:</strong> Este es un prototipo de demo. Las condiciones
                reales del servicio se encuentran en la póliza oficial emitida por{" "}
                {poliza.aseguradora}.
              </p>
              <p>
                Para consultar las condiciones completas, contactá a{" "}
                <span className="text-[#006ed2] font-semibold">{poliza.telefonoAsistencia}</span>
              </p>
            </div>
            <button
              className="w-full mt-5 border border-[#e0e0e0] text-[#1a1a1a] font-semibold py-3.5 rounded-2xl text-sm"
              onClick={() => setModalCondiciones(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
