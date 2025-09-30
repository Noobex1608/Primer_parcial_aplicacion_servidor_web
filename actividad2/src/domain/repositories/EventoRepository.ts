import { Evento } from "../interfaces/Evento";
import { BaseRepository } from "./BaseRepository";

export interface EventoRepository extends BaseRepository<Evento> {
  findByOrganizadorIdCallback(
    organizadorId: number,
    callback: (error: Error | null, data?: Evento[]) => void
  ): void;
  findByOrganizadorIdPromise(organizadorId: number): Promise<Evento[]>;
  findByOrganizadorIdAsync(organizadorId: number): Promise<Evento[]>;

  findByTipoCallback(
    tipo: string,
    callback: (error: Error | null, data?: Evento[]) => void
  ): void;
  findByTipoPromise(tipo: string): Promise<Evento[]>;
  findByTipoAsync(tipo: string): Promise<Evento[]>;
}
