import { Local } from "../interfaces/Local";
import { BaseRepository } from "./BaseRepository";

export interface LocalRepository extends BaseRepository<Local> {
  findByNombreCallback(
    nombre: string,
    callback: (error: Error | null, data?: Local[]) => void
  ): void;
  findByNombrePromise(nombre: string): Promise<Local[]>;
  findByNombreAsync(nombre: string): Promise<Local[]>;

  findByCiudadCallback(
    ciudad: string,
    callback: (error: Error | null, data?: Local[]) => void
  ): void;
  findByCiudadPromise(ciudad: string): Promise<Local[]>;
  findByCiudadAsync(ciudad: string): Promise<Local[]>;
}
