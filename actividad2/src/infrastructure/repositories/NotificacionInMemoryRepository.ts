import { Notificacion } from "../../domain/interfaces/Notificacion";
import { NotificacionRepository } from "../../domain/repositories/NotificacionRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class NotificacionInMemoryRepository
  extends BaseInMemoryRepository<Notificacion>
  implements NotificacionRepository
{
  findByUsuarioIdCallback(
    usuarioId: number,
    callback: (error: Error | null, data?: Notificacion[]) => void
  ): void {
    try {
      const notificaciones = this.data.filter(
        (n) => n.usuario_id === usuarioId
      );
      callback(null, notificaciones);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByUsuarioIdPromise(usuarioId: number): Promise<Notificacion[]> {
    return new Promise((resolve, reject) => {
      this.findByUsuarioIdCallback(usuarioId, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByUsuarioIdAsync(usuarioId: number): Promise<Notificacion[]> {
    return this.findByUsuarioIdPromise(usuarioId);
  }

  findByTipoCallback(
    tipo: string,
    callback: (error: Error | null, data?: Notificacion[]) => void
  ): void {
    try {
      const notificaciones = this.data.filter((n) => n.tipo === tipo);
      callback(null, notificaciones);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByTipoPromise(tipo: string): Promise<Notificacion[]> {
    return new Promise((resolve, reject) => {
      this.findByTipoCallback(tipo, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByTipoAsync(tipo: string): Promise<Notificacion[]> {
    return this.findByTipoPromise(tipo);
  }
}
