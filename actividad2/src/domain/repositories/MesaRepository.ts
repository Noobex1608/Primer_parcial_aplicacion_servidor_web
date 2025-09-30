import { Mesa } from "../interfaces/Local";
import { BaseRepository } from "./BaseRepository";

export interface MesaRepository extends BaseRepository<Mesa> {
  findByLocalIdCallback(
    localId: number,
    callback: (error: Error | null, data?: Mesa[]) => void
  ): void;
  findByLocalIdPromise(localId: number): Promise<Mesa[]>;
  findByLocalIdAsync(localId: number): Promise<Mesa[]>;
}
