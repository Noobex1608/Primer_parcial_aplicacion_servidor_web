export interface Cliente {
  id: number;
  usuario_id: number;
  usuario?: Usuario;

  nombre_completo: string;
  email: string;
  telefono?: string;
  direccion?: string;
  fecha_registro: string;
  estado: boolean;

  // Relaciones
  reservas?: Reserva[];
  eventos?: Evento[];
}

interface Usuario {}
interface Reserva {}
interface Evento {}
