"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/layout/NavBar";

type Step = "intro" | "tipo" | "datos" | "contacto" | "confirmacion";

const DESTINOS = ["Europa", "América del Norte", "América del Sur", "Asia", "África", "Oceanía", "Caribe"];
const PASAJEROS_OPT = ["1", "2", "3", "4", "5+"];

export default function ViajesPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("intro");
  const [tipo, setTipo] = useState<"cotizar" | "asesoramiento" | null>(null);
  const [form, setForm] = useState({
    destino: "",
    salida: "",
    regreso: "",
    pasajeros: "1",
    nombre: "Osvaldo García",      // DATO SIMULADO
    email: "demo@ejemplo.com",     // DATO SIMULADO
    telefono: "099 000 000",       // DATO SIMULADO
  });
  const [enviando, setEnviando] = useState(false);

  async function handleEnviar() {
    setEnviando(true);
    // SIMULADO — en producción llamaría a la API de Universal Assistance
    await new Promise((r) => setTimeout(r, 1000));
    setEnviando(false);
    setStep("confirmacion");
  }

  /* ─── INTRO ─────────────────────────────────────────── */
  if (step === "intro") {
    return (
      <div className="pb-8">
        <NavBar backLabel="Seguros" backHref="/seguros" />

        {/* Hero */}
        <div
          className="mx-4 mt-2 rounded-2xl overflow-hidden relative h-44"
          style={{ background: "linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-20 text-8xl">✈️</div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-white/70 text-xs font-medium block mb-1">Universal Assistance</span>
            <p className="text-white font-bold text-lg leading-tight">
              Viajá tranquilo con cobertura internacional
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="bg-white rounded-2xl mx-4 mt-3 px-4 py-4 space-y-3">
          <h2 className="font-semibold text-[#1a1a1a] text-sm">Tu servicio incluye:</h2>
          {[
            { icono: "🏥", titulo: "Gastos médicos en el exterior", desc: "Cobertura de emergencias médicas fuera del país." },
            { icono: "🧳", titulo: "Pérdida de equipaje", desc: "Reembolso por pérdida o daño de equipaje." },
            { icono: "✈️", titulo: "Cancelación de viaje", desc: "Cobertura ante cancelaciones imprevistas." },
            { icono: "🏨", titulo: "Regreso anticipado", desc: "Asistencia para regresar antes de lo previsto." },
          ].map((c) => (
            <div key={c.titulo} className="flex items-start gap-3 py-2 border-b border-[#f0f0f0] last:border-0">
              <span className="text-lg w-6 flex-shrink-0">{c.icono}</span>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">{c.titulo}</p>
                <p className="text-xs text-[#666] mt-0.5">{c.desc}</p>
              </div>
            </div>
          ))}
          <p className="text-[10px] text-[#999] pt-1">Cobertura provista por Universal Assistance</p>
        </div>

        {/* CTA fijo */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e0e0] px-4 py-4 z-40">
          <div className="max-w-md mx-auto">
            <button
              onClick={() => setStep("tipo")}
              className="w-full bg-[#006ed2] hover:bg-[#005bb5] text-white font-semibold py-4 rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors"
              aria-label="Continuar con viajes"
            >
              Continuar
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─── TIPO ───────────────────────────────────────────── */
  if (step === "tipo") {
    return (
      <div className="pb-8">
        <NavBar backLabel="Viajes" backHref="#" showHelp={false} />
        <div className="px-4 pt-2 pb-4 bg-white">
          <h1 className="text-xl font-bold text-[#1a1a1a]">¿Cómo querés continuar?</h1>
          <p className="text-sm text-[#666] mt-1">Elegí la opción que mejor se adapte a tu viaje.</p>
        </div>
        <div className="px-4 mt-3 space-y-3">
          {[
            {
              id: "cotizar" as const,
              icono: "💰",
              titulo: "Cotizar y contratar",
              desc: "Ingresá los datos de tu viaje y obtené tu cobertura al instante.",
            },
            {
              id: "asesoramiento" as const,
              icono: "💬",
              titulo: "Solicitar asesoramiento",
              desc: "Un especialista de Universal Assistance se comunicará con vos.",
            },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => { setTipo(opt.id); setStep("datos"); }}
              className={`w-full text-left border-2 rounded-2xl p-4 transition-all ${
                tipo === opt.id ? "border-[#006ed2] bg-[#e8f3fc]" : "border-[#e0e0e0] bg-white hover:border-[#006ed2]"
              }`}
              aria-label={opt.titulo}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{opt.icono}</span>
                <div>
                  <p className="font-semibold text-sm text-[#1a1a1a]">{opt.titulo}</p>
                  <p className="text-xs text-[#666] mt-0.5">{opt.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ─── DATOS DEL VIAJE ────────────────────────────────── */
  if (step === "datos") {
    return (
      <div className="pb-32">
        <NavBar backLabel="Tipo" backHref="#" showHelp={false} />

        {/* Stepper */}
        <div className="bg-white px-6 py-3 flex items-center gap-2">
          {["Datos del viaje", "Contacto", "Confirmación"].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center gap-1.5 ${i === 0 ? "text-[#006ed2]" : "text-[#ccc]"}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? "bg-[#006ed2] text-white" : "bg-[#e0e0e0] text-[#999]"}`}>
                  {i + 1}
                </div>
                <span className={`text-[10px] font-medium hidden sm:block ${i === 0 ? "text-[#006ed2]" : "text-[#999]"}`}>{s}</span>
              </div>
              {i < 2 && <div className="w-6 h-0.5 bg-[#e0e0e0] mx-1" />}
            </div>
          ))}
        </div>

        <div className="bg-white mx-4 mt-3 rounded-2xl px-4 py-5 space-y-4">
          <h2 className="font-semibold text-[#1a1a1a] text-sm">Datos de tu viaje</h2>

          {/* Destino */}
          <div>
            <label className="text-xs text-[#666] mb-1 block" htmlFor="destino">Destino *</label>
            <select
              id="destino"
              value={form.destino}
              onChange={(e) => setForm({ ...form, destino: e.target.value })}
              className="w-full border border-[#e0e0e0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#006ed2] bg-white"
            >
              <option value="">Seleccioná el destino</option>
              {DESTINOS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          {/* Fechas */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-[#666] mb-1 block" htmlFor="salida">Fecha de salida *</label>
              <input
                id="salida" type="date" value={form.salida}
                onChange={(e) => setForm({ ...form, salida: e.target.value })}
                className="w-full border border-[#e0e0e0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#006ed2]"
              />
            </div>
            <div>
              <label className="text-xs text-[#666] mb-1 block" htmlFor="regreso">Fecha de regreso *</label>
              <input
                id="regreso" type="date" value={form.regreso}
                onChange={(e) => setForm({ ...form, regreso: e.target.value })}
                className="w-full border border-[#e0e0e0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#006ed2]"
              />
            </div>
          </div>

          {/* Pasajeros */}
          <div>
            <label className="text-xs text-[#666] mb-2 block">Cantidad de pasajeros</label>
            <div className="flex gap-2 flex-wrap">
              {PASAJEROS_OPT.map((n) => (
                <button
                  key={n}
                  onClick={() => setForm({ ...form, pasajeros: n })}
                  className={`w-10 h-10 rounded-full text-sm font-semibold border-2 transition-colors ${
                    form.pasajeros === n ? "bg-[#006ed2] border-[#006ed2] text-white" : "border-[#e0e0e0] text-[#1a1a1a] hover:border-[#006ed2]"
                  }`}
                  aria-label={`${n} pasajero${n !== "1" ? "s" : ""}`}
                  aria-pressed={form.pasajeros === n}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e0e0] px-4 py-4 z-40">
          <div className="max-w-md mx-auto">
            <button
              onClick={() => setStep("contacto")}
              disabled={!form.destino || !form.salida || !form.regreso}
              className="w-full bg-[#006ed2] hover:bg-[#005bb5] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2"
              aria-label="Continuar a datos de contacto"
            >
              Continuar
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─── CONTACTO ───────────────────────────────────────── */
  if (step === "contacto") {
    return (
      <div className="pb-32">
        <NavBar backLabel="Datos del viaje" backHref="#" showHelp={false} />

        {/* Stepper */}
        <div className="bg-white px-6 py-3 flex items-center gap-2">
          {["Datos del viaje", "Contacto", "Confirmación"].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center gap-1.5`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i <= 1 ? "bg-[#006ed2] text-white" : "bg-[#e0e0e0] text-[#999]"}`}>
                  {i < 1 ? "✓" : i + 1}
                </div>
              </div>
              {i < 2 && <div className={`w-6 h-0.5 mx-1 ${i < 1 ? "bg-[#006ed2]" : "bg-[#e0e0e0]"}`} />}
            </div>
          ))}
          <span className="text-[10px] text-[#006ed2] font-medium ml-1">Datos de contacto</span>
        </div>

        {/* Resumen viaje */}
        <div className="bg-[#e8f3fc] border-l-4 border-[#006ed2] mx-4 mt-3 rounded-xl px-3 py-2.5">
          <div className="flex justify-between text-xs">
            <span className="text-[#666]">Destino</span>
            <span className="font-semibold text-[#1a1a1a]">{form.destino}</span>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-[#666]">Pasajeros</span>
            <span className="font-semibold text-[#1a1a1a]">{form.pasajeros}</span>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-[#666]">Viaje</span>
            <span className="font-semibold text-[#1a1a1a]">{form.salida} → {form.regreso}</span>
          </div>
        </div>

        <div className="bg-white mx-4 mt-3 rounded-2xl px-4 py-5 space-y-4">
          <h2 className="font-semibold text-[#1a1a1a] text-sm">Datos de contacto</h2>
          {[
            { id: "nombre", label: "Nombre completo *", value: form.nombre, key: "nombre" as const, type: "text" },
            { id: "email", label: "Email *", value: form.email, key: "email" as const, type: "email" },
            { id: "tel", label: "Teléfono *", value: form.telefono, key: "telefono" as const, type: "tel" },
          ].map((f) => (
            <div key={f.id}>
              <label className="text-xs text-[#666] mb-1 block" htmlFor={f.id}>{f.label}</label>
              <input
                id={f.id} type={f.type} value={f.value}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full border border-[#e0e0e0] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#006ed2]"
              />
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e0e0e0] px-4 py-4 z-40">
          <div className="max-w-md mx-auto">
            <button
              onClick={handleEnviar}
              disabled={enviando}
              className="w-full bg-[#006ed2] hover:bg-[#005bb5] disabled:opacity-50 text-white font-semibold py-4 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2"
              aria-label="Enviar solicitud de viaje"
            >
              {enviando ? (
                <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <>Enviar solicitud <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" /></svg></>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─── CONFIRMACIÓN ───────────────────────────────────── */
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-8">
      <div className="w-20 h-20 rounded-full bg-[#e8f5e9] flex items-center justify-center mb-5">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#28a745" fillOpacity="0.15" />
          <path d="M12 20L17.5 25.5L28 15" stroke="#28a745" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-[#1a1a1a] text-center mb-2">
        ¡Solicitud enviada!
      </h1>
      <p className="text-sm text-[#666] text-center mb-6 leading-relaxed">
        {tipo === "asesoramiento"
          ? "Un especialista de Universal Assistance se comunicará con vos en las próximas horas."
          : `Tu cobertura para ${form.destino} fue procesada. Te enviamos la confirmación a ${form.email}.`}
      </p>
      <div className="w-full bg-white rounded-2xl border border-[#e0e0e0] p-4 mb-6 space-y-2">
        {[
          { label: "Destino", value: form.destino },
          { label: "Pasajeros", value: form.pasajeros },
          { label: "Fechas", value: `${form.salida} → ${form.regreso}` },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between">
            <span className="text-xs text-[#999]">{label}</span>
            <span className="text-sm font-semibold text-[#1a1a1a]">{value}</span>
          </div>
        ))}
      </div>
      <div className="w-full space-y-3">
        <button
          onClick={() => router.push("/seguros/mis-seguros")}
          className="w-full bg-[#006ed2] text-white font-semibold py-4 rounded-2xl text-sm"
          aria-label="Ver mis seguros"
        >
          Ver Mis Seguros
        </button>
        <button
          onClick={() => router.push("/seguros")}
          className="w-full border border-[#006ed2] text-[#006ed2] font-semibold py-3.5 rounded-2xl text-sm"
          aria-label="Volver al catálogo"
        >
          Ver más seguros
        </button>
      </div>
    </div>
  );
}
