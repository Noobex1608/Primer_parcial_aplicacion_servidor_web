export interface Reporte {
  id: number;
  administrador_id: number;
  administrador?: Administrador;

  titulo?: string;
  descripcion?: string;
  fecha_generacion: string;
}

// Forward declarations
interface Administrador {}
