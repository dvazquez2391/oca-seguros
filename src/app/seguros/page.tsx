import { getProductos } from "@/services/segurosService";
import { MOCK_USUARIO } from "@/mocks/seguros";
import HomeClient from "./HomeClient";

export default async function SegurosPage() {
  const productos = await getProductos();
  const polizas = MOCK_USUARIO.polizas;
  return <HomeClient productos={productos} polizas={polizas} />;
}
