"use client";
import { Suspense } from "react";
import ConfirmacionClient from "./ConfirmacionClient";

export default function ConfirmacionPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-64 text-[#006ed2] text-sm animate-pulse">Procesando...</div>}>
      <ConfirmacionClient />
    </Suspense>
  );
}
