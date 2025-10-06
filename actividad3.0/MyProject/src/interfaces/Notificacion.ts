import { TipoNotificacion } from "./types";

export interface Notificacion {
  id: number;
  usuario_id: number;
  usuario?: Usuario;

  mensaje: string;
  tipo: string;
  leida: boolean;
  enviada_en: string;
  creado_en: string;
  actualizado_en: string;
}

// Forward declarations
interface Usuario {}
