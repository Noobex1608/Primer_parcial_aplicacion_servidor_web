import { Factura } from "../../domain/interfaces/Factura";
import { FacturaRepository } from "../../domain/repositories/FacturaRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class FacturaInMemoryRepository
  extends BaseInMemoryRepository<Factura>
  implements FacturaRepository
{
  findByReservaIdCallback(
    reservaId: number,
    callback: (error: Error | null, data?: Factura) => void
  ): void {
    try {
      const factura = this.data.find((f) => f.reserva_id === reservaId);
      callback(null, factura);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByReservaIdPromise(reservaId: number): Promise<Factura | null> {
    return new Promise((resolve, reject) => {
      this.findByReservaIdCallback(reservaId, (error, data) => {
        if (error) reject(error);
        else resolve(data || null);
      });
    });
  }

  findByReservaIdAsync(reservaId: number): Promise<Factura | null> {
    return this.findByReservaIdPromise(reservaId);
  }

  findByClienteIdCallback(
    clienteId: number,
    callback: (error: Error | null, data?: Factura[]) => void
  ): void {
    try {
      // Esta implementación simplificada devuelve todas las facturas
      // En una implementación real, se haría join con la tabla de reservas
      const facturas = this.data; // Simplificado por ahora
      callback(null, facturas);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByClienteIdPromise(clienteId: number): Promise<Factura[]> {
    return new Promise((resolve, reject) => {
      this.findByClienteIdCallback(clienteId, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByClienteIdAsync(clienteId: number): Promise<Factura[]> {
    return this.findByClienteIdPromise(clienteId);
  }
}
