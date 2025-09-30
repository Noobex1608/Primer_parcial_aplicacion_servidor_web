import { EstadoPago } from "./types";

export interface Pago {
  id: number;
  factura_id: number;
  factura?: Factura;

  monto: number;
  fecha_pago: string;
  metodo_pago?: string;
  estado: EstadoPago;
}

// Forward declarations
interface Factura {}
