import { Cliente } from "../interfaces/Cliente";
import { BaseRepository } from "./BaseRepository";

export interface ClienteRepository extends BaseRepository<Cliente> {
  findByUsuarioIdCallback(
    usuarioId: number,
    callback: (error: Error | null, data?: Cliente) => void
  ): void;
  findByUsuarioIdPromise(usuarioId: number): Promise<Cliente | null>;
  findByUsuarioIdAsync(usuarioId: number): Promise<Cliente | null>;
}
