import { Factura } from "../interfaces/Factura";
import { BaseRepository } from "./BaseRepository";

export interface FacturaRepository extends BaseRepository<Factura> {
  findByReservaIdCallback(
    reservaId: number,
    callback: (error: Error | null, data?: Factura) => void
  ): void;
  findByReservaIdPromise(reservaId: number): Promise<Factura | null>;
  findByReservaIdAsync(reservaId: number): Promise<Factura | null>;

  findByClienteIdCallback(
    clienteId: number,
    callback: (error: Error | null, data?: Factura[]) => void
  ): void;
  findByClienteIdPromise(clienteId: number): Promise<Factura[]>;
  findByClienteIdAsync(clienteId: number): Promise<Factura[]>;
}
