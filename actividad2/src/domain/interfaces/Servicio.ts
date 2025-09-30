export interface Servicio {
  id: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  tipo?: string;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  reservas?: ReservaServicio[];
}

// Forward declarations
interface ReservaServicio {}
