import { Servicio } from "../interfaces/Servicio";
import { BaseRepository } from "./BaseRepository";

export interface ServicioRepository extends BaseRepository<Servicio> {
  findByTipoCallback(
    tipo: string,
    callback: (error: Error | null, data?: Servicio[]) => void
  ): void;
  findByTipoPromise(tipo: string): Promise<Servicio[]>;
  findByTipoAsync(tipo: string): Promise<Servicio[]>;
}
