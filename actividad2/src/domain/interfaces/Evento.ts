export interface Evento {
  id: number;
  nombre: string;
  tipo?: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion?: string;

  organizador_id: number;
  organizador?: Cliente;

  creado_en: string;

  // Relaciones
  reservas?: Reserva[];
}

// Forward declarations
interface Cliente {}
interface Reserva {}
