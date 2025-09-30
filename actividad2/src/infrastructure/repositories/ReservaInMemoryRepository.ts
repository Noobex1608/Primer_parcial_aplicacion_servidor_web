import { Reserva } from "../../domain/interfaces/Reserva";
import { ReservaRepository } from "../../domain/repositories/ReservaRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class ReservaInMemoryRepository
  extends BaseInMemoryRepository<Reserva>
  implements ReservaRepository
{
  findByClienteIdCallback(
    clienteId: number,
    callback: (error: Error | null, data?: Reserva[]) => void
  ): void {
    try {
      const reservas = this.data.filter(
        (reserva) => reserva.cliente_id === clienteId
      );
      callback(null, reservas);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByClienteIdPromise(clienteId: number): Promise<Reserva[]> {
    return new Promise((resolve, reject) => {
      this.findByClienteIdCallback(clienteId, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByClienteIdAsync(clienteId: number): Promise<Reserva[]> {
    return this.findByClienteIdPromise(clienteId);
  }

  findByMesaIdCallback(
    mesaId: number,
    callback: (error: Error | null, data?: Reserva[]) => void
  ): void {
    try {
      // Buscar reservas que tengan mesas asignadas con el mesaId especificado
      const reservas = this.data.filter((reserva) =>
        reserva.mesas_asignadas?.some((mesa) => mesa.mesa_id === mesaId)
      );
      callback(null, reservas);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByMesaIdPromise(mesaId: number): Promise<Reserva[]> {
    return new Promise((resolve, reject) => {
      this.findByMesaIdCallback(mesaId, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByMesaIdAsync(mesaId: number): Promise<Reserva[]> {
    return this.findByMesaIdPromise(mesaId);
  }
}
