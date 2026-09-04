"use client";
import { Suspense } from "react";
import ContratarClient from "./ContratarClient";

export default function ContratarPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-[#006ed2] text-sm">Cargando...</div>
      </div>
    }>
      <ContratarClient />
    </Suspense>
  );
}
