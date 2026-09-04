export default function OcaFooter() {
  return (
    <footer className="bg-[#f4f4f4] border-t border-[#e0e0e0] mt-8 px-4 py-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#e8f3fc] flex items-center justify-center">
            <span className="text-[#006ed2] text-sm">💬</span>
          </div>
          <span className="text-[#006ed2] font-semibold text-sm">Atención al cliente</span>
        </div>
        <div className="space-y-2">
          {[
            "Política de privacidad",
            "Código de buenas prácticas",
            "Código de ética Itaú",
            "Uso de tokens en internet",
            "Tarifarios OCA",
            "Tarifarios OCA Blue",
          ].map((item) => (
            <button
              key={item}
              className="block text-[#666] text-xs hover:text-[#006ed2] transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 text-[10px] text-[#999] border-t border-[#e0e0e0] pt-3">
            ⚠️ Modo demo — datos simulados · Kiro Day Seguros OCA
          </div>
        )}
      </div>
    </footer>
  );
}
