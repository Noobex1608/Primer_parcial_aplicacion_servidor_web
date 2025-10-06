export interface Reporte {
  id: number;
  administrador_id: number;
  administrador?: Administrador;

  titulo: string;
  descripcion: string;
  fecha_generacion: string;
  creado_en: string;
  actualizado_en: string;
}

// Forward declarations
interface Administrador {}
