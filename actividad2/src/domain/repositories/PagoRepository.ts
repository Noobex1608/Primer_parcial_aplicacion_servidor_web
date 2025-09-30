import { Pago } from "../interfaces/Pago";
import { BaseRepository } from "./BaseRepository";

export interface PagoRepository extends BaseRepository<Pago> {
  findByFacturaIdCallback(
    facturaId: number,
    callback: (error: Error | null, data?: Pago[]) => void
  ): void;
  findByFacturaIdPromise(facturaId: number): Promise<Pago[]>;
  findByFacturaIdAsync(facturaId: number): Promise<Pago[]>;

  findByMetodoPagoCallback(
    metodoPago: string,
    callback: (error: Error | null, data?: Pago[]) => void
  ): void;
  findByMetodoPagoPromise(metodoPago: string): Promise<Pago[]>;
  findByMetodoPagoAsync(metodoPago: string): Promise<Pago[]>;
}
