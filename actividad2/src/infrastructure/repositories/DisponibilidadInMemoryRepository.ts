import { Disponibilidad } from "../../domain/interfaces/Disponibilidad";
import { DisponibilidadRepository } from "../../domain/repositories/DisponibilidadRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class DisponibilidadInMemoryRepository
  extends BaseInMemoryRepository<Disponibilidad>
  implements DisponibilidadRepository
{
  findByLocalIdCallback(
    localId: number,
    callback: (error: Error | null, data?: Disponibilidad[]) => void
  ): void {
    try {
      const disponibilidades = this.data.filter(
        (disp) => disp.local_id === localId
      );
      callback(null, disponibilidades);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByLocalIdPromise(localId: number): Promise<Disponibilidad[]> {
    return new Promise((resolve, reject) => {
      this.findByLocalIdCallback(localId, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByLocalIdAsync(localId: number): Promise<Disponibilidad[]> {
    return this.findByLocalIdPromise(localId);
  }

  findByMesaIdCallback(
    mesaId: number,
    callback: (error: Error | null, data?: Disponibilidad[]) => void
  ): void {
    try {
      const disponibilidades = this.data.filter(
        (disp) => disp.mesa_id === mesaId
      );
      callback(null, disponibilidades);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByMesaIdPromise(mesaId: number): Promise<Disponibilidad[]> {
    return new Promise((resolve, reject) => {
      this.findByMesaIdCallback(mesaId, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByMesaIdAsync(mesaId: number): Promise<Disponibilidad[]> {
    return this.findByMesaIdPromise(mesaId);
  }
}
