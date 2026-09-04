import { getPolizasUsuario } from "@/services/segurosService";
import MisSegurosClient from "./MisSegurosClient";

export default async function MisSegurosPage() {
  const polizas = await getPolizasUsuario();
  return <MisSegurosClient polizas={polizas} />;
}
