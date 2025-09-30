import { Notificacion } from "../../domain/interfaces/Notificacion";
import { NotificacionRepository } from "../../domain/repositories/NotificacionRepository";

export class NotificacionService {
  constructor(private notificacionRepository: NotificacionRepository) {}

  // Servicios con Callbacks
  crearNotificacionCallback(
    datosNotificacion: Omit<Notificacion, "id">,
    callback: (error: Error | null, notificacion?: Notificacion) => void
  ): void {
    this.notificacionRepository.createCallback(datosNotificacion, callback);
  }

  obtenerNotificacionPorIdCallback(
    id: number,
    callback: (error: Error | null, notificacion?: Notificacion) => void
  ): void {
    this.notificacionRepository.findByIdCallback(id, callback);
  }

  obtenerTodasLasNotificacionesCallback(
    callback: (error: Error | null, notificaciones?: Notificacion[]) => void
  ): void {
    this.notificacionRepository.findAllCallback(callback);
  }

  actualizarNotificacionCallback(
    id: number,
    datosActualizacion: Partial<Notificacion>,
    callback: (error: Error | null, notificacion?: Notificacion) => void
  ): void {
    this.notificacionRepository.updateCallback(
      id,
      datosActualizacion,
      callback
    );
  }

  eliminarNotificacionCallback(
    id: number,
    callback: (error: Error | null, eliminado?: boolean) => void
  ): void {
    this.notificacionRepository.deleteCallback(id, callback);
  }

  obtenerNotificacionesPorUsuarioCallback(
    usuarioId: number,
    callback: (error: Error | null, notificaciones?: Notificacion[]) => void
  ): void {
    this.notificacionRepository.findByUsuarioIdCallback(usuarioId, callback);
  }

  obtenerNotificacionesPorTipoCallback(
    tipo: string,
    callback: (error: Error | null, notificaciones?: Notificacion[]) => void
  ): void {
    this.notificacionRepository.findByTipoCallback(tipo, callback);
  }

  // Servicios con Promesas
  async crearNotificacion(
    datosNotificacion: Omit<Notificacion, "id">
  ): Promise<Notificacion> {
    return new Promise((resolve, reject) => {
      this.crearNotificacionCallback(
        datosNotificacion,
        (error: Error | null, notificacion?: Notificacion) => {
          if (error) reject(error);
          else resolve(notificacion!);
        }
      );
    });
  }

  async obtenerNotificacionPorId(id: number): Promise<Notificacion | null> {
    return new Promise((resolve, reject) => {
      this.obtenerNotificacionPorIdCallback(
        id,
        (error: Error | null, notificacion?: Notificacion) => {
          if (error) reject(error);
          else resolve(notificacion || null);
        }
      );
    });
  }

  async obtenerTodasLasNotificaciones(): Promise<Notificacion[]> {
    return new Promise((resolve, reject) => {
      this.obtenerTodasLasNotificacionesCallback(
        (error: Error | null, notificaciones?: Notificacion[]) => {
          if (error) reject(error);
          else resolve(notificaciones || []);
        }
      );
    });
  }

  async actualizarNotificacion(
    id: number,
    datosActualizacion: Partial<Notificacion>
  ): Promise<Notificacion> {
    return new Promise((resolve, reject) => {
      this.actualizarNotificacionCallback(
        id,
        datosActualizacion,
        (error: Error | null, notificacion?: Notificacion) => {
          if (error) reject(error);
          else resolve(notificacion!);
        }
      );
    });
  }

  async eliminarNotificacion(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.eliminarNotificacionCallback(
        id,
        (error: Error | null, eliminado?: boolean) => {
          if (error) reject(error);
          else resolve(eliminado || false);
        }
      );
    });
  }

  async obtenerNotificacionesPorUsuario(
    usuarioId: number
  ): Promise<Notificacion[]> {
    return new Promise((resolve, reject) => {
      this.obtenerNotificacionesPorUsuarioCallback(
        usuarioId,
        (error: Error | null, notificaciones?: Notificacion[]) => {
          if (error) reject(error);
          else resolve(notificaciones || []);
        }
      );
    });
  }

  async obtenerNotificacionesPorTipo(tipo: string): Promise<Notificacion[]> {
    return new Promise((resolve, reject) => {
      this.obtenerNotificacionesPorTipoCallback(
        tipo,
        (error: Error | null, notificaciones?: Notificacion[]) => {
          if (error) reject(error);
          else resolve(notificaciones || []);
        }
      );
    });
  }

  // Métodos específicos del dominio
  async marcarComoLeida(id: number): Promise<Notificacion> {
    return this.actualizarNotificacion(id, { leida: true });
  }

  async enviarNotificacion(
    usuarioId: number,
    mensaje: string,
    tipo: "alerta" | "mensaje" | "recordatorio"
  ): Promise<Notificacion> {
    const nuevaNotificacion = {
      usuario_id: usuarioId,
      mensaje,
      tipo,
      leida: false,
      enviada_en: new Date().toISOString(),
    };

    return this.crearNotificacion(nuevaNotificacion);
  }
}
