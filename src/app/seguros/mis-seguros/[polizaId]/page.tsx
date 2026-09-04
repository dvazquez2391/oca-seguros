import { getPoliza } from "@/services/segurosService";
import { notFound } from "next/navigation";
import DetallePolicaClient from "./DetallePolizaClient";

interface Props {
  params: Promise<{ polizaId: string }>;
}

export default async function DetallePolizaPage({ params }: Props) {
  const { polizaId } = await params;
  const poliza = await getPoliza(polizaId);
  if (!poliza) notFound();
  return <DetallePolicaClient poliza={poliza} />;
}
