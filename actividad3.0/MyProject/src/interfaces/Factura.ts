import { EstadoFactura } from "./types";

export interface Factura {
  id: number;
  reserva_id: number;
  reserva?: Reserva;

  fecha_emision: string;
  estado_id: number;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  pagos?: Pago[];
  detalles?: DetalleFactura[];
}

export interface DetalleFactura {
  id: number;
  factura_id: number;
  factura?: Factura;

  servicio_id: number;
  servicio?: Servicio;

  descripcion: string;
  cantidad: number;
  precio_unitario: number;
  total: number;
}

// Forward declarations
interface Reserva {}
interface Pago {}
interface Servicio {}
