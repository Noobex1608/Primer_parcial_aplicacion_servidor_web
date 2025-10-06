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
  estado_id: number;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  mesas?: Mesa[];
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

  nombre: string;
  sexo: string;
  edad: number;
  cantidad_personas: number;
  creado_en: string;
  actualizado_en: string;
}

export interface ReservaServicio {
  reserva_id: number;
  reserva?: Reserva;

  servicio_id: number;
  servicio?: Servicio;

  cantidad: number;
  precio_unitario: number;
}

// Forward declarations
interface Cliente {}
interface Local {}
interface Evento {}
interface Mesa {}
interface Servicio {}
interface Factura {}
interface Local {}
interface Evento {}
interface Mesa {}
interface Servicio {}
interface Factura {}
