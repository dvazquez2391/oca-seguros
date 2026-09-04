"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getProducto, contratarSeguro } from "@/services/segurosService";
import { MOCK_USUARIO } from "@/mocks/seguros";
import type { Producto } from "@/types/seguros";
import NavBar from "@/components/layout/NavBar";

// DATO SIMULADO — fuente: ConsultasDeSegurosMock.java
const MEDIO_PAGO_LABEL: Record<string, string> = {
  tarjeta: "Tarjeta de crédito OCA ****4321",
  cuenta: "Débito automático en cuenta",
};

export default function ContratarClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productoId = searchParams.get("producto") ?? "asistencia-365";

  const [producto, setProducto] = useState<Producto | null>(null);
  const [loading, setLoading] = useState(true);
  const [enviando, setEnviando] = useState(false);

  // DATO SIMULADO — fuente: ConsultasDeSegurosMock.java
  const asegurado = MOCK_USUARIO;
  const medioDePago = "tarjeta";

  useEffect(() => {
    getProducto(productoId).then((p) => {
      setProducto(p);
      setLoading(false);
    });
  }, [productoId]);

  async function handleContratar() {
    if (!producto) return;
    setEnviando(true);
    const resultado = await contratarSeguro(producto.id, {
      nombreCompleto: `${asegurado.nombre} ${asegurado.apellido}`,
      nroDocumento: asegurado.nroDocumento,
      email: "demo@ejemplo.com",
      telefono: "099 000 000",
      medioDePago: "tarjeta",
    });
    setEnviando(false);

    if (resultado.exito) {
      router.push(
        `/seguros/confirmacion?poliza=${resultado.nroPoliza}` +
        `&producto=${encodeURIComponent(producto.nombre)}` +
        `&precio=${producto.precioDesde ?? 0}` +
        `&asegurado=${encodeURIComponent(`${asegurado.nombre} ${asegurado.apellido}`)}` +
        `&aseguradora=${encodeURIComponent(producto.aseguradora)}` +
        `&fecha=${encodeURIComponent(resultado.fechaContratacion ?? "")}`
      );
    } else {
      router.push("/seguros/error");
    }
  }

  if (loading || !producto) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-6 h-6 border-2 border-[#6a4c9c] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="pb-36 bg-[#f5f5f5] min-h-screen">
      <NavBar backLabel={producto.nombre} backHref={`/seguros/${productoId}`} showHelp={false} />

      {/* Header de pantalla */}
      <div className="bg-white px-4 pt-2 pb-4 border-b border-[#f0f0f0]">
        <p className="text-xs text-[#999] mb-0.5">Paso final</p>
        <h1 className="text-xl font-bold text-[#1a1a1a]">Revisá y confirmá</h1>
      </div>

      <div className="px-4 pt-4 space-y-3">

        {/* Card: resumen del producto */}
        <section className="bg-white rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#f0f0f0]">
            <h2 className="text-xs font-semibold text-[#999] uppercase tracking-wide">Producto</h2>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "linear-gradient(135deg, #6a4c9c 0%, #9c6ba5 100%)" }}
              >
                <span>{producto.icono}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1a1a]">{producto.nombre}</p>
                <p className="text-xs text-[#666]">{producto.aseguradora}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-[10px] text-[#999]">Prima mensual</p>
                <p className="text-lg font-bold text-[#6a4c9c]">${producto.precioDesde}/mes</p>
              </div>
            </div>

            {/* Coberturas resumidas */}
            <div className="bg-[#f9f5ff] rounded-xl px-3 py-2.5 space-y-1.5">
              {producto.coberturas.slice(0, 4).map((cob, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[10px] text-[#6a4c9c]">✓</span>
                  <span className="text-xs text-[#444]">{cob.titulo}</span>
                </div>
              ))}
              {producto.coberturas.length > 4 && (
                <p className="text-[10px] text-[#999] pt-0.5">
                  +{producto.coberturas.length - 4} servicios más incluidos
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Card: datos del asegurado */}
        <section className="bg-white rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#f0f0f0]">
            <h2 className="text-xs font-semibold text-[#999] uppercase tracking-wide">Asegurado</h2>
          </div>
          <div className="px-4 py-3 space-y-2.5">
            {[
              { label: "Nombre", value: `${asegurado.nombre} ${asegurado.apellido}` },
              { label: "Cédula", value: asegurado.nroDocumento },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-xs text-[#999]">{label}</span>
                <span className="text-sm font-semibold text-[#1a1a1a]">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Card: medio de pago */}
        <section className="bg-white rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#f0f0f0]">
            <h2 className="text-xs font-semibold text-[#999] uppercase tracking-wide">Medio de pago</h2>
          </div>
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#006ed2] rounded-lg flex items-center justify-center">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <rect x="0.5" y="0.5" width="13" height="9" rx="1.5" stroke="white" strokeWidth="1"/>
                  <path d="M0.5 3.5h13" stroke="white" strokeWidth="1.2"/>
                </svg>
              </div>
              <span className="text-sm text-[#1a1a1a] font-medium">{MEDIO_PAGO_LABEL[medioDePago]}</span>
            </div>
          </div>
        </section>

        {/* Texto legal */}
        <div className="px-1">
          <p className="text-[10px] text-[#999] leading-relaxed">
            OCA S.A. actúa como intermediario de seguros habilitado por el Banco Central del Uruguay.
            Las coberturas son provistas por{" "}
            <span className="font-semibold">{producto.aseguradora}</span>. Al confirmar, aceptás los
            términos y condiciones del servicio contratado. El cobro se realizará en tu próximo
            resumen de tarjeta o débito automático según el medio de pago seleccionado.{" "}
            <span className="text-[#999] italic">Datos simulados — prototipo demo.</span>
          </p>
        </div>
      </div>

      {/* CTAs fijos en bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e0e0] px-4 py-4 z-40">
        <div className="max-w-md mx-auto space-y-2">
          <button
            onClick={handleContratar}
            disabled={enviando}
            className="w-full bg-[#6a4c9c] hover:bg-[#5a3d8a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm"
            aria-label="Confirmar contratación de Asistencia 365"
          >
            {enviando ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Procesando...
              </>
            ) : (
              <>
                Contratar
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </>
            )}
          </button>
          <button
            onClick={() => router.back()}
            disabled={enviando}
            className="w-full border border-[#e0e0e0] text-[#666] font-medium py-3 rounded-2xl hover:bg-[#f5f5f5] transition-colors text-sm disabled:opacity-40"
            aria-label="Volver a la pantalla anterior"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
