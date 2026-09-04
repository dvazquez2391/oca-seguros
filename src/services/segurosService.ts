// Servicio adaptador — mock ahora, API real de OCA en el futuro
// La firma de las funciones NO cambia al integrar la API real
// Solo se reemplaza el cuerpo de cada función

import {
  MOCK_PRODUCTOS,
  MOCK_USUARIO,
  MOCK_FAQS,
  PRODUCTOS_IDS_CONTRATADOS,
} from "@/mocks/seguros";
import type {
  Producto,
  PolizaContratada,
  DatosContratacion,
  ResultadoAlta,
  FAQPorAseguradora,
} from "@/types/seguros";

const DELAY = 600; // ms — simula latencia de red para que la demo se vea realista

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProductos(): Promise<Producto[]> {
  await delay(DELAY);
  return MOCK_PRODUCTOS;
}

export async function getProducto(id: string): Promise<Producto | null> {
  await delay(DELAY);
  return MOCK_PRODUCTOS.find((p) => p.id === id) ?? null;
}

export async function getPolizasUsuario(): Promise<PolizaContratada[]> {
  await delay(DELAY);
  return MOCK_USUARIO.polizas;
}

export async function getPoliza(id: string): Promise<PolizaContratada | null> {
  await delay(DELAY);
  return MOCK_USUARIO.polizas.find((p) => p.id === id) ?? null;
}

// DATO SIMULADO — flag para alternar entre flujo éxito/error en la demo
// Cambiar a true para demostrar la pantalla de error (seguros-13)
export const FORCE_ERROR = false;

export async function contratarSeguro(
  productoId: string,
  _datos: DatosContratacion
): Promise<ResultadoAlta> {
  await delay(1200);

  // Simula error de servicio — activar FORCE_ERROR = true para demo del flujo de error
  if (FORCE_ERROR) {
    return {
      exito: false,
      mensaje: "El servicio no está disponible en este momento. Por favor, intentá nuevamente en unos minutos.",
    };
  }

  const polizaId = `OCA-2026-${String(Math.floor(Math.random() * 99999)).padStart(5, "0")}`;
  const hoy = new Date();
  const fecha = `${String(hoy.getDate()).padStart(2, "0")}/${String(hoy.getMonth() + 1).padStart(2, "0")}/${hoy.getFullYear()}`;
  // Simula éxito — en producción llamaría al endpoint POST /seguros/alta/[productoId]
  return {
    exito: true,
    nroPoliza: polizaId,
    fechaContratacion: fecha,
    mensaje: "Tu seguro fue contratado exitosamente",
  };
}

export async function getFaqs(): Promise<FAQPorAseguradora[]> {
  await delay(300);
  return MOCK_FAQS;
}

export function getNombreUsuario(): string {
  return MOCK_USUARIO.nombre;
}

export function getProductosContratadosIds(): string[] {
  return PRODUCTOS_IDS_CONTRATADOS;
}
