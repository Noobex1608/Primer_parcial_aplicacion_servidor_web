import { Notificacion } from "../interfaces/Notificacion";
import { BaseRepository } from "./BaseRepository";

export interface NotificacionRepository extends BaseRepository<Notificacion> {
  findByUsuarioIdCallback(
    usuarioId: number,
    callback: (error: Error | null, data?: Notificacion[]) => void
  ): void;
  findByUsuarioIdPromise(usuarioId: number): Promise<Notificacion[]>;
  findByUsuarioIdAsync(usuarioId: number): Promise<Notificacion[]>;

  findByTipoCallback(
    tipo: string,
    callback: (error: Error | null, data?: Notificacion[]) => void
  ): void;
  findByTipoPromise(tipo: string): Promise<Notificacion[]>;
  findByTipoAsync(tipo: string): Promise<Notificacion[]>;
}
