export interface Disponibilidad {
  id: number;
  local_id: number;
  local?: Local;

  mesa_id: number;
  mesa?: Mesa;

  fecha_hora: string;
  estado: string;
}

// Forward declarations
interface Local {}
interface Mesa {}
