import { EstadoReserva } from "./types";

export interface Reserva {
  id: number;
  cliente_id: number;
  cliente?: Cliente;

  local_id: number;
  local?: Local;

  evento_id?: number;
  evento?: Evento;

  fecha_reserva: string;
  cantidad_personas: number;
  estado: EstadoReserva;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  mesas_asignadas?: ReservaMesaAsignacion[];
  servicios?: ReservaServicio[];
  factura?: Factura;
}

export interface ReservaMesaAsignacion {
  id: number;
  reserva_id: number;
  reserva?: Reserva;

  mesa_id: number;
  mesa?: Mesa;

  persona_nombre: string;
  cantidad_personas: number;
}

export interface ReservaServicio {
  reserva_id: number;
  reserva?: Reserva;

  servicio_id: number;
  servicio?: Servicio;

  cantidad: number;
  precio_unitario?: number;
}

// Forward declarations
interface Cliente {}
interface Local {}
interface Evento {}
interface Mesa {}
interface Servicio {}
interface Factura {}
