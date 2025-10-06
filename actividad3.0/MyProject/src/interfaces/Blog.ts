export interface Blog {
  id: number;
  administrador_id: number;
  administrador?: Administrador;

  titulo: string;
  contenido: string;
  etiquetas?: string;
  publicado_en: string;
  actualizado_en: string;
}

interface Administrador {}
