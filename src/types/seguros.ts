// Tipos del dominio de Seguros OCA
// Basados en los modelos Java: Commons/Seguros/src/main/java/com/oca/ocalink/seguros/model/

export interface Cobertura {
  icono: string;
  titulo: string;
  descripcion?: string;
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  aseguradora: string;
  aseguradoraLogo?: string;
  categoria: "para-vos" | "para-tu-hogar" | "para-tu-dia-a-dia";
  icono: string;
  precioDesde?: number;
  precioPromo?: number;
  textoPromo?: string;
  badgePromo?: string;
  badgeDescuento?: string;
  imagenHero?: string;
  coberturas: Cobertura[];
  coberturaProveedorTexto?: string;
  condicionesUrl?: string;
  polizaUrl?: string;
  activo: boolean;
}

export interface PolizaContratada {
  id: string;
  productoId: string;
  productoNombre: string;
  productoIcono: string;
  aseguradora: string;
  telefonoAsistencia: string;
  fechaContratacion: string;
  primaMensual: number;
  estado: "activo" | "pendiente" | "cancelado";
  coberturas: Cobertura[];
}

export interface DatosContratacion {
  nombreCompleto: string;
  nroDocumento: string;
  email: string;
  telefono: string;
  medioDePago: "tarjeta" | "cuenta";
}

export interface ResultadoAlta {
  exito: boolean;
  nroPoliza?: string;
  fechaContratacion?: string;
  mensaje: string;
}

export interface UsuarioDemo {
  nombre: string;
  apellido: string;
  nroDocumento: string;
  tarjetaOca: string;
  polizas: PolizaContratada[];
}

export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export interface FAQPorAseguradora {
  aseguradora: string;
  preguntas: FAQ[];
}
