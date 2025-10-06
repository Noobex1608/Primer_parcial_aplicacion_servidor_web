export interface Cliente {
  id: number;
  usuario_id: number;
  usuario?: Usuario;

  nombre_completo: string;
  direccion?: string;
  fecha_registro: string;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  reservas?: Reserva[];
}

interface Usuario {}
interface Reserva {}
