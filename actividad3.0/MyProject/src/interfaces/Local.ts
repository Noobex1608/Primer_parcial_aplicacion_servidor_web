import { EstadoMesa } from "./types";

export interface Local {
  id: number;
  nombre: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  capacidad: number;
  estado_id: number;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  reservas?: Reserva[];
  servicios?: Servicio[];
}

export interface Mesa {
  id: number;
  reserva_id: number;
  reserva?: Reserva;

  numero: number;
  capacidad: number;
  tipo: string;
  estado_id: number;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  asignaciones?: ReservaMesaAsignacion[];
}

// Forward declarations
interface Reserva {}
interface Servicio {}
interface ReservaMesaAsignacion {}
