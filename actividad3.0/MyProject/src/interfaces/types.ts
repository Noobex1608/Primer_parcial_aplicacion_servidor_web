// =============================
// Tipos auxiliares para Local de Eventos
// =============================

export type RolUsuario = "cliente" | "administrador" | "dueño";
export type EstadoReserva = "pendiente" | "confirmada" | "cancelada";
export type EstadoMesa = "disponible" | "ocupada" | "reservada";
export type EstadoFactura = "pendiente" | "pagada" | "anulada";
export type EstadoPago = "pendiente" | "completado" | "fallido" | "reembolsado";
export type TipoNotificacion = "alerta" | "mensaje" | "recordatorio";
