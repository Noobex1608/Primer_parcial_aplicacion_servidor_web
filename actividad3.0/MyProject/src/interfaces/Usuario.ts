import { RolUsuario } from "./types";

export interface Administrador {
  id: number;
  usuario_id: number;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  usuario?: Usuario;
  reportes?: Reporte[];
  blogs?: Blog[];
}

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  contraseña: string;
  rol: string;
  telefono?: string;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  cliente?: Cliente;
  administrador?: Administrador;
  eventos?: Evento[];
  notificaciones?: Notificacion[];
}

// Forward declarations
interface Cliente {}
interface Reporte {}
interface Blog {}
interface Notificacion {}
interface Evento {}
