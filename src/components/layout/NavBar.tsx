"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavBarProps {
  backLabel?: string;
  backHref?: string;
  showHelp?: boolean;
}

export default function NavBar({
  backLabel = "Inicio",
  backHref = "/seguros",
  showHelp = true,
}: NavBarProps) {
  const router = useRouter();

  return (
    <div className="bg-white flex items-center justify-between px-4 py-3">
      <button
        onClick={() => (backHref && backHref !== "#" ? router.push(backHref) : router.back())}
        className="flex items-center gap-1 text-[#1a1a1a] text-sm font-medium"
        aria-label={`Volver a ${backLabel}`}
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M6 1L1 6L6 11" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {backLabel}
      </button>
      {showHelp && (
        <button
          aria-label="Ayuda"
          className="w-7 h-7 rounded-full border border-[#e0e0e0] flex items-center justify-center text-xs text-[#666] font-medium hover:border-[#006ed2] hover:text-[#006ed2] transition-colors"
        >
          ?
        </button>
      )}
    </div>
  );
}
