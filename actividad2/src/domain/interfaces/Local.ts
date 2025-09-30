import { EstadoMesa } from "./types";

export interface Local {
  id: number;
  nombre: string;
  direccion: string;
  ciudad?: string;
  telefono?: string;
  capacidad?: number;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  mesas?: Mesa[];
  reservas?: Reserva[];
  disponibilidades?: Disponibilidad[];
}

export interface Mesa {
  id: number;
  local_id: number;
  local?: Local;

  numero: number;
  capacidad: number;
  tipo?: string;
  estado: EstadoMesa;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  asignaciones?: ReservaMesaAsignacion[];
  disponibilidades?: Disponibilidad[];
}

// Forward declarations
interface Reserva {}
interface Disponibilidad {}
interface ReservaMesaAsignacion {}
