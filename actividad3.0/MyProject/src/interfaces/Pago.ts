import { EstadoPago } from "./types";

export interface Pago {
  id: number;
  factura_id: number;
  factura?: Factura;

  monto: number;
  fecha_pago: string;
  metodo_pago_id: number;
  metodo_pago?: MetodoPago;
  estado_id: number;
  creado_en: string;
  actualizado_en: string;
}

export interface MetodoPago {
  id: number;
  nombre: string;
  descripcion: string;

  // Relaciones
  pagos?: Pago[];
}

// Forward declarations
interface Factura {}
