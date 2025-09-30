import { Disponibilidad } from "../interfaces/Disponibilidad";
import { BaseRepository } from "./BaseRepository";

export interface DisponibilidadRepository
  extends BaseRepository<Disponibilidad> {
  findByLocalIdCallback(
    localId: number,
    callback: (error: Error | null, data?: Disponibilidad[]) => void
  ): void;
  findByLocalIdPromise(localId: number): Promise<Disponibilidad[]>;
  findByLocalIdAsync(localId: number): Promise<Disponibilidad[]>;

  findByMesaIdCallback(
    mesaId: number,
    callback: (error: Error | null, data?: Disponibilidad[]) => void
  ): void;
  findByMesaIdPromise(mesaId: number): Promise<Disponibilidad[]>;
  findByMesaIdAsync(mesaId: number): Promise<Disponibilidad[]>;
}
