import { TipoNotificacion } from "./types";

export interface Notificacion {
  id: number;
  usuario_id: number;
  usuario?: Usuario;

  mensaje: string;
  tipo?: TipoNotificacion;
  leida: boolean;
  enviada_en: string;
}

// Forward declarations
interface Usuario {}
