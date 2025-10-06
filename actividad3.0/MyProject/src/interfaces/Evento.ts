export interface Evento {
  id: number;
  nombre: string;
  tipo: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  organizador_id: number;
  organizador?: Usuario;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  reservas?: Reserva[];
}

// Forward declarations
interface Usuario {}
interface Reserva {}
