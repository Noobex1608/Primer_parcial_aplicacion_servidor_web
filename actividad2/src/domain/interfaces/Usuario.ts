import { RolUsuario } from "./types";

export interface Administrador {
  id: number;
  nombre: string;
  email: string;
  contraseña: string;
  telefono?: string;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  usuarios?: Usuario[];
  reportes?: Reporte[];
  blogs?: Blog[];
}

export interface Usuario {
  id: number;
  administrador_id?: number;
  administrador?: Administrador;

  nombre: string;
  email: string;
  contraseña: string;
  rol: RolUsuario;
  telefono?: string;
  creado_en: string;
  actualizado_en: string;

  // Relaciones
  cliente?: Cliente;
  notificaciones?: Notificacion[];
}

// Forward declarations
interface Cliente {}
interface Reporte {}
interface Blog {}
interface Notificacion {}
