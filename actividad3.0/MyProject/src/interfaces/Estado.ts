export interface Estado {
  id: number;
  nombre: string;
  tipo: string;

  // Relaciones (estas se definirían según las necesidades específicas)
  locales?: Local[];
  mesas?: Mesa[];
  reservas?: Reserva[];
  servicios?: Servicio[];
  facturas?: Factura[];
  pagos?: Pago[];
}

// Forward declarations
interface Local {}
interface Mesa {}
interface Reserva {}
interface Servicio {}
interface Factura {}
interface Pago {}