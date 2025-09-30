import { Reserva } from "../interfaces/Reserva";
import { BaseRepository } from "./BaseRepository";

export interface ReservaRepository extends BaseRepository<Reserva> {
  findByClienteIdCallback(
    clienteId: number,
    callback: (error: Error | null, data?: Reserva[]) => void
  ): void;
  findByClienteIdPromise(clienteId: number): Promise<Reserva[]>;
  findByClienteIdAsync(clienteId: number): Promise<Reserva[]>;

  findByMesaIdCallback(
    mesaId: number,
    callback: (error: Error | null, data?: Reserva[]) => void
  ): void;
  findByMesaIdPromise(mesaId: number): Promise<Reserva[]>;
  findByMesaIdAsync(mesaId: number): Promise<Reserva[]>;
}
