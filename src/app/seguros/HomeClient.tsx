"use client";
import Link from "next/link";
import type { Producto, PolizaContratada } from "@/types/seguros";
import NavBar from "@/components/layout/NavBar";
import OcaFooter from "@/components/layout/OcaFooter";

interface Props {
  productos: Producto[];
  polizas: PolizaContratada[];
}

const CATEGORIAS = [
  { key: "para-vos", label: "Para vos" },
  { key: "para-tu-hogar", label: "Para tu hogar" },
  { key: "para-tu-dia-a-dia", label: "Para tu día a día" },
] as const;

export default function HomeClient({ productos, polizas }: Props) {
  const contratadosIds = polizas.map((p) => p.productoId);

  return (
    <div className="pb-4">
      {/* NavBar */}
      <NavBar backLabel="Inicio" backHref="/" showHelp />

      {/* Título */}
      <div className="px-4 pb-4 bg-white">
        <p className="text-xs text-[#666] mb-0.5">Seguros</p>
        <h1 className="text-2xl font-bold text-[#1a1a1a] leading-tight">
          Encontrá la cobertura<br />ideal para vos
        </h1>
      </div>

      <div className="space-y-3 px-0">
        {/* Seguros contratados (si tiene) */}
        {polizas.length > 0 && (
          <section className="bg-white px-4 pt-4 pb-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-[#1a1a1a] text-sm">Seguros contratados</h2>
              <Link
                href="/seguros/mis-seguros"
                className="flex items-center gap-1 text-xs text-[#006ed2] font-medium"
              >
                Ver todos
                <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
                  <path d="M1 1L4 4.5L1 8" stroke="#006ed2" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </Link>
            </div>

            {/* Carousel de pólizas */}
            <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide">
              {polizas.map((poliza) => (
                <Link
                  key={poliza.id}
                  href={`/seguros/mis-seguros/${poliza.id}`}
                  className="flex-shrink-0 w-[220px] border border-[#e0e0e0] rounded-xl p-3 bg-white hover:border-[#006ed2] transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{poliza.productoIcono}</span>
                      <span className="font-semibold text-sm text-[#1a1a1a]">{poliza.productoNombre}</span>
                    </div>
                    <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
                      <path d="M1 1L4 4.5L1 8" stroke="#999" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="border-t border-[#f0f0f0] pt-2 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-[#999]">Asegurado por</span>
                      <span className="text-[10px] font-semibold text-[#1a1a1a]">{poliza.aseguradora}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-[#999]">¿Necesitás asistencia?</span>
                      <span className="text-[10px] font-semibold text-[#006ed2]">{poliza.telefonoAsistencia}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Catálogo por categoría */}
        {CATEGORIAS.map(({ key, label }) => {
          const items = productos.filter((p) => p.categoria === key);
          if (!items.length) return null;
          return (
            <section key={key} className="bg-white px-4 py-4">
              <h2 className="text-sm font-semibold text-[#1a1a1a] mb-3">{label}</h2>
              <div className="space-y-2">
                {items.map((producto) => {
                  const contratado = contratadosIds.includes(producto.id);
                  // Solo Asistencia 365 es clickeable en esta demo
                  const esClickeable = producto.id === "asistencia-365";

                  const cardClasses = `flex items-center justify-between p-3 rounded-xl border transition-all ${
                    contratado
                      ? "border-[#e0e0e0] bg-[#f9f9f9] opacity-60"
                      : esClickeable
                      ? "border-[#6a4c9c] bg-[#f9f5ff] shadow-sm"
                      : "border-[#e8e8e8] bg-white opacity-50 cursor-default"
                  }`;

                  const inner = (
                    <>
                      <div className="flex items-center gap-3">
                        <span className="text-xl w-7 text-center">{producto.icono}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-medium ${contratado || !esClickeable ? "text-[#999]" : "text-[#1a1a1a]"}`}>
                              {producto.nombre}
                            </span>
                            {esClickeable && producto.badgeDescuento && (
                              <span className="bg-[#e8f5e9] text-[#2e7d32] text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                                {producto.badgeDescuento}
                              </span>
                            )}
                            {!esClickeable && !contratado && (
                              <span className="text-[#bbb] text-[9px]">Próximamente</span>
                            )}
                          </div>
                          {producto.precioDesde && esClickeable && (
                            <p className="text-xs text-[#666]">${producto.precioDesde}/mes</p>
                          )}
                        </div>
                      </div>
                      <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
                        <path
                          d="M1 1L4 4.5L1 8"
                          stroke={esClickeable ? "#6a4c9c" : "#ccc"}
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </>
                  );

                  if (esClickeable) {
                    return (
                      <Link key={producto.id} href={`/seguros/${producto.id}`} className={cardClasses}>
                        {inner}
                      </Link>
                    );
                  }
                  return (
                    <div key={producto.id} className={cardClasses} aria-disabled="true">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Widget de opinión */}
        <section className="bg-white px-4 py-5 mx-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="font-semibold text-sm text-[#1a1a1a]">Queremos conocer tu opinión</p>
              <p className="text-xs text-[#666] mt-0.5">¿Cómo calificarías tu experiencia en Seguros?</p>
            </div>
            <button aria-label="Cerrar" className="text-[#999] text-lg leading-none ml-2">×</button>
          </div>
          <div className="flex justify-between mt-3 mb-4">
            {[
              { emoji: "😤", label: "Muy mala" },
              { emoji: "😕", label: "Mala" },
              { emoji: "😐", label: "Regular" },
              { emoji: "🙂", label: "Buena" },
              { emoji: "😄", label: "Muy buena" },
            ].map((item) => (
              <button
                key={item.label}
                aria-label={item.label}
                className="flex flex-col items-center gap-1 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{item.emoji}</span>
                <span className="text-[9px] text-[#999] text-center leading-tight">{item.label}</span>
              </button>
            ))}
          </div>
          <p className="text-xs text-[#999] mb-3">¿Cómo fue tu experiencia? (opcional)</p>
          <button
            disabled
            className="w-full py-3 rounded-xl bg-[#e0e0e0] text-[#999] text-sm font-medium cursor-not-allowed"
          >
            Enviar mi opinión
          </button>
        </section>
      </div>
      <OcaFooter />
    </div>
  );
}
