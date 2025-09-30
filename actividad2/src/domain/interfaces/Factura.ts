import { EstadoFactura } from "./types";

export interface Factura {
  id: number;
  reserva_id: number;
  reserva?: Reserva;

  total: number;
  metodo_pago?: string;
  fecha_emision: string;
  estado: EstadoFactura;

  // Relaciones
  pagos?: Pago[];
}

// Forward declarations
interface Reserva {}
interface Pago {}
