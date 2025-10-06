export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  tipo: string;
  local_id: number;
  local?: Local;
  estado_id: number;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  reservas?: ReservaServicio[];
  detalles_factura?: DetalleFactura[];
}

// Forward declarations
interface Local {}
interface ReservaServicio {}
interface DetalleFactura {}
