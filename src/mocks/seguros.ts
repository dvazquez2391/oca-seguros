// ARCHIVO DE DATOS SIMULADOS — SOLO PARA EL PROTOTIPO DEL KIRO DAY
// Datos basados en: seguros.jsp, ConsultasDeSegurosMock.java, seguros-oca-context.md, Seguros_VWO.pdf
// Reemplazar por llamadas reales a la API de OCA en fases posteriores

import type { Producto, PolizaContratada, UsuarioDemo, FAQPorAseguradora } from "@/types/seguros";

// DATO SIMULADO — fuente: seguros-oca-context.md + Seguros_VWO (imágenes)
export const MOCK_PRODUCTOS: Producto[] = [
  // ── PARA VOS ──────────────────────────────────────────────────────────────
  {
    id: "viajes",
    nombre: "Viajes",
    descripcion: "Cobertura internacional para que viajes tranquilo.",
    aseguradora: "Universal Assistance",
    categoria: "para-vos",
    icono: "✈️",
    activo: true,
    coberturas: [
      { icono: "🏥", titulo: "Gastos médicos en el exterior", descripcion: "Cobertura de emergencias médicas fuera del país." },
      { icono: "🧳", titulo: "Pérdida de equipaje", descripcion: "Reembolso por pérdida o daño de equipaje." },
      { icono: "✈️", titulo: "Cancelación de viaje", descripcion: "Cobertura ante cancelaciones imprevistas." },
    ],
    coberturaProveedorTexto: "Cobertura provista por Universal Assistance",
  },
  {
    id: "mascotas",
    nombre: "Mascotas",
    descripcion: "Porque tus mascotas también son parte de tu familia.",
    aseguradora: "RUA Asistencia",
    categoria: "para-vos",
    icono: "🐾",
    precioDesde: 200,
    activo: true,
    coberturas: [
      { icono: "🩺", titulo: "Chequeos veterinarios", descripcion: "Consultas y chequeos de rutina." },
      { icono: "📞", titulo: "Orientación veterinaria", descripcion: "Línea de consulta veterinaria las 24hs." },
      { icono: "🚨", titulo: "Urgencias", descripcion: "Atención de urgencias veterinarias." },
      { icono: "🏠", titulo: "Guardería de mascotas", descripcion: "Servicio de guardería ante hospitalizaciones." },
    ],
    coberturaProveedorTexto: "Cobertura provista por RUA Asistencia",
  },
  {
    id: "proteccion-financiera",
    nombre: "Protección financiera",
    descripcion: "Protegé tus finanzas ante imprevistos.",
    aseguradora: "Metlife",
    categoria: "para-vos",
    icono: "🛡️",
    activo: true,
    coberturas: [
      { icono: "💳", titulo: "Protección de tarjeta", descripcion: "Cobertura ante uso no autorizado." },
      { icono: "📋", titulo: "Seguro de desempleo", descripcion: "Cobertura ante pérdida involuntaria de empleo." },
    ],
    coberturaProveedorTexto: "Cobertura provista por Metlife Seguros S.A.",
  },
  // ── PARA TU HOGAR ─────────────────────────────────────────────────────────
  {
    id: "asistencia-365",
    nombre: "Asistencia 365",
    descripcion: "Soluciones para lo que no esperás, las 24hs, todo el año.",
    aseguradora: "Addiuva",
    categoria: "para-tu-hogar",
    icono: "🔧",
    precioDesde: 260,
    badgeDescuento: "20% DTO",
    activo: true,
    coberturas: [
      { icono: "🔧", titulo: "Servicios para el hogar", descripcion: "Plomería, cerrajería, electricidad, vidriería, y más." },
      { icono: "🚿", titulo: "Instalación de calefón y línea blanca" },
      { icono: "🧹", titulo: "Limpieza de grasera" },
      { icono: "💻", titulo: "Servicios de PC y laptop", descripcion: "Orientación técnica telefónica o remota vía web." },
      { icono: "⚖️", titulo: "Servicios de asistencia legal", descripcion: "Asesoría legal en casos de hurto de automóvil, domicilio, accidentes de tránsito, fallecimiento." },
      { icono: "🏛️", titulo: "Consultoría en materia penal, civil y familiar" },
      { icono: "🩺", titulo: "Consultas médicas telefónicas" },
      { icono: "🚗", titulo: "Asistencia vial", descripcion: "Envío de grúa por accidente o avería." },
      { icono: "🛞", titulo: "Auxilio vial", descripcion: "Cambio de llanta, paso de corriente, suministro de combustible, cerrajería vial." },
    ],
    coberturaProveedorTexto: "Cobertura provista por American Assist Uruguay S.A.",
  },
  {
    id: "garantia-alquiler",
    nombre: "Garantía de alquiler",
    descripcion: "Alquilá sin garantías bancarias ni depósitos.",
    aseguradora: "Porto Seguro",
    categoria: "para-tu-hogar",
    icono: "🏠",
    activo: true,
    coberturas: [
      { icono: "🏠", titulo: "Garantía de alquiler", descripcion: "Reemplaza la garantía bancaria tradicional." },
      { icono: "📋", titulo: "Cobertura de daños", descripcion: "Protección ante daños al inmueble." },
    ],
    coberturaProveedorTexto: "Cobertura provista por Porto Seguro",
  },
  // ── PARA TU DÍA A DÍA ────────────────────────────────────────────────────
  {
    id: "celulares",
    nombre: "Celulares",
    descripcion: "Protegé tu celular contra robo, hurto y daño accidental.",
    aseguradora: "Metlife",
    categoria: "para-tu-dia-a-dia",
    icono: "📱",
    precioDesde: 72,
    activo: true,
    coberturas: [
      { icono: "🔒", titulo: "Robo y hurto", descripcion: "Cobertura ante robo o hurto del celular." },
      { icono: "💥", titulo: "Daño accidental", descripcion: "Protección ante daños accidentales." },
    ],
    coberturaProveedorTexto: "Cobertura provista por Metlife Seguros S.A.",
  },
  {
    id: "equipos-electronicos",
    nombre: "Equipos electrónicos",
    descripcion: "Cobertura para laptops, tablets y más.",
    aseguradora: "Metlife",
    categoria: "para-tu-dia-a-dia",
    icono: "💻",
    precioDesde: 79,
    activo: true,
    coberturas: [
      { icono: "🔒", titulo: "Robo y hurto", descripcion: "Hasta $30.000 asegurados." },
      { icono: "💥", titulo: "Daño accidental", descripcion: "Protección ante caídas y golpes." },
    ],
    coberturaProveedorTexto: "Cobertura provista por Metlife Seguros S.A.",
  },
  {
    id: "bolso-protegido",
    nombre: "Bolso protegido",
    descripcion: "Cubrí lo que llevás: bolso, cartera, documentos y más.",
    aseguradora: "Metlife",
    categoria: "para-tu-dia-a-dia",
    icono: "👜",
    precioDesde: 195,
    activo: true,
    coberturas: [
      { icono: "👜", titulo: "Rapiña cartera/bolso", descripcion: "Hasta $11.000 asegurados." },
      { icono: "📱", titulo: "Rapiña celular", descripcion: "Hasta $9.000 asegurados." },
      { icono: "💻", titulo: "Rapiña computadora/laptop/tablets", descripcion: "Hasta $9.000 asegurados." },
      { icono: "📄", titulo: "Re-obtención de documentos", descripcion: "Hasta $2.000 de reembolso." },
      { icono: "🛒", titulo: "Compra protegida robo y daño", descripcion: "Hasta $4.000 asegurados." },
    ],
    coberturaProveedorTexto: "Cobertura provista por Metlife Seguros S.A.",
  },
  {
    id: "bicicletas",
    nombre: "Bicicletas",
    descripcion: "Protegé tu bici contra robo y daños.",
    aseguradora: "Metlife",
    categoria: "para-tu-dia-a-dia",
    icono: "🚲",
    activo: true,
    coberturas: [
      { icono: "🔒", titulo: "Robo y hurto", descripcion: "Cobertura ante robo de bicicleta." },
      { icono: "💥", titulo: "Daño accidental", descripcion: "Protección ante accidentes." },
    ],
    coberturaProveedorTexto: "Cobertura provista por Metlife Seguros S.A.",
  },
];

// DATO SIMULADO — usuario ficticio para la demo (datos NO reales)
// fuente: ConsultasDeSegurosMock.java — usuario de demo del Kiro Day
export const MOCK_USUARIO: UsuarioDemo = {
  nombre: "Ana",
  apellido: "García",
  nroDocumento: "12345678",
  tarjetaOca: "****4321",
  polizas: [
    {
      id: "OCA-2026-00456",
      productoId: "asistencia-365",
      productoNombre: "Asistencia 365",
      productoIcono: "🔧",
      aseguradora: "Addiuva",
      telefonoAsistencia: "0800-8031",
      fechaContratacion: "04/09/2026",
      primaMensual: 260,
      estado: "activo",
      coberturas: [
        { icono: "🔧", titulo: "Servicios para el hogar", descripcion: "Plomería, cerrajería, electricidad, vidriería, y más." },
        { icono: "🚿", titulo: "Instalación de calefón y línea blanca" },
        { icono: "🧹", titulo: "Limpieza de grasera" },
        { icono: "💻", titulo: "Servicios de PC y laptop", descripcion: "Orientación técnica telefónica o remota vía web." },
        { icono: "⚖️", titulo: "Servicios de asistencia legal", descripcion: "Asesoría legal en casos de hurto, accidentes y más." },
        { icono: "🏛️", titulo: "Consultoría penal, civil y familiar" },
        { icono: "🩺", titulo: "Consultas médicas telefónicas" },
        { icono: "🚗", titulo: "Asistencia vial", descripcion: "Envío de grúa por accidente o avería." },
        { icono: "🛞", titulo: "Auxilio vial", descripcion: "Cambio de llanta, paso de corriente, suministro de combustible." },
      ],
    },
  ],
};

// DATO SIMULADO — fuente: seguros-oca-context.md (FAQs por aseguradora)
export const MOCK_FAQS: FAQPorAseguradora[] = [
  {
    aseguradora: "Metlife",
    preguntas: [
      { pregunta: "¿Como cambio mis beneficiarios, mis datos personales o cualquier otra información de mi póliza (aviso de fallecimiento, reclamos, consultas, etc)?", respuesta: "Podés gestionar cualquier cambio comunicándote con Metlife al 0800 2700, disponible de lunes a viernes de 9 a 18hs." },
      { pregunta: "¿Quiénes son los beneficiarios de la póliza?", respuesta: "Los beneficiarios son las personas designadas en el momento de la contratación. Podés actualizarlos contactando a Metlife." },
      { pregunta: "¿Puedo cambiar la información de mi beneficiario por teléfono?", respuesta: "Sí, podés realizar cambios comunicándote al 0800 2700." },
      { pregunta: "¿Cuándo recibiré mi póliza?", respuesta: "La póliza se envía al email registrado dentro de las 24-48hs hábiles de la contratación." },
      { pregunta: "¿Qué pasa si tengo otro seguro?", respuesta: "Podés tener múltiples seguros simultáneamente. Cada uno cubre de forma independiente." },
      { pregunta: "¿Cómo reclamo una póliza de seguro?", respuesta: "Contactá a Metlife al 0800 2700 con tu número de póliza a mano." },
      { pregunta: "¿Cómo es el proceso de cancelación?", respuesta: "Podés cancelar tu seguro en cualquier momento contactando a Metlife. La cancelación es efectiva al final del período mensual en curso." },
    ],
  },
  {
    aseguradora: "Addiuva",
    preguntas: [
      { pregunta: "¿Cómo uso el servicio?", respuesta: "Llamá al 0800-8031, disponible las 24hs, los 365 días del año." },
      { pregunta: "¿Cómo cancelo el servicio?", respuesta: "Podés cancelar desde Mi Cuenta o comunicándote con Addiuva al 0800-8031." },
      { pregunta: "¿Qué costos implica el servicio?", respuesta: "El costo es la prima mensual contratada. Los servicios básicos no tienen costo adicional; algunos servicios especializados pueden tener costos de materiales." },
    ],
  },
  {
    aseguradora: "Universal Assistance",
    preguntas: [
      { pregunta: "¿Cómo uso mi seguro de viaje?", respuesta: "Llevá siempre tu número de póliza. Ante una emergencia, llamá al número internacional que figura en tu documentación." },
      { pregunta: "¿Cómo cancelo el seguro de viaje?", respuesta: "La cancelación puede realizarse antes del inicio del viaje contratado." },
    ],
  },
  {
    aseguradora: "Porto Seguro",
    preguntas: [
      { pregunta: "¿Cómo funciona la garantía de alquiler?", respuesta: "Reemplaza la garantía bancaria tradicional. Porto Seguro actúa como garante ante el propietario." },
      { pregunta: "¿Qué pasa ante un siniestro?", respuesta: "Contactá a Porto Seguro para iniciar el proceso de denuncia y gestión del siniestro." },
    ],
  },
];

export const PRODUCTOS_IDS_CONTRATADOS = MOCK_USUARIO.polizas.map(p => p.productoId);
