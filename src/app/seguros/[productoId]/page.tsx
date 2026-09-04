import { getProducto } from "@/services/segurosService";
import { notFound } from "next/navigation";
import ProductoClient from "./ProductoClient";

interface Props {
  params: Promise<{ productoId: string }>;
}

export default async function ProductoPage({ params }: Props) {
  const { productoId } = await params;
  const producto = await getProducto(productoId);
  if (!producto) notFound();
  return <ProductoClient producto={producto} />;
}
