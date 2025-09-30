import { Pago } from "../../domain/interfaces/Pago";
import { PagoRepository } from "../../domain/repositories/PagoRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class PagoInMemoryRepository
  extends BaseInMemoryRepository<Pago>
  implements PagoRepository
{
  findByFacturaIdCallback(
    facturaId: number,
    callback: (error: Error | null, data?: Pago[]) => void
  ): void {
    try {
      const pagos = this.data.filter((p) => p.factura_id === facturaId);
      callback(null, pagos);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByFacturaIdPromise(facturaId: number): Promise<Pago[]> {
    return new Promise((resolve, reject) => {
      this.findByFacturaIdCallback(facturaId, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByFacturaIdAsync(facturaId: number): Promise<Pago[]> {
    return this.findByFacturaIdPromise(facturaId);
  }

  findByMetodoPagoCallback(
    metodoPago: string,
    callback: (error: Error | null, data?: Pago[]) => void
  ): void {
    try {
      const pagos = this.data.filter(
        (p) => p.metodo_pago?.toLowerCase() === metodoPago.toLowerCase()
      );
      callback(null, pagos);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByMetodoPagoPromise(metodoPago: string): Promise<Pago[]> {
    return new Promise((resolve, reject) => {
      this.findByMetodoPagoCallback(metodoPago, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByMetodoPagoAsync(metodoPago: string): Promise<Pago[]> {
    return this.findByMetodoPagoPromise(metodoPago);
  }
}
