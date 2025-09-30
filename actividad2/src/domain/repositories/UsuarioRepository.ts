import { Usuario } from "../interfaces/Usuario";
import { BaseRepository } from "./BaseRepository";

export interface UsuarioRepository extends BaseRepository<Usuario> {
  findByEmailCallback(
    email: string,
    callback: (error: Error | null, data?: Usuario) => void
  ): void;
  findByEmailPromise(email: string): Promise<Usuario | null>;
  findByEmailAsync(email: string): Promise<Usuario | null>;
}
