import { Reporte } from "../../domain/interfaces/Reporte";
import { ReporteRepository } from "../../domain/repositories/ReporteRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class ReporteInMemoryRepository
  extends BaseInMemoryRepository<Reporte>
  implements ReporteRepository
{
  findByTipoCallback(
    tipo: string,
    callback: (error: Error | null, data?: Reporte[]) => void
  ): void {
    try {
      // En esta implementación simplificada, filtramos por título que contenga el tipo
      const reportes = this.data.filter((r) =>
        r.titulo?.toLowerCase().includes(tipo.toLowerCase())
      );
      callback(null, reportes);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByTipoPromise(tipo: string): Promise<Reporte[]> {
    return new Promise((resolve, reject) => {
      this.findByTipoCallback(tipo, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByTipoAsync(tipo: string): Promise<Reporte[]> {
    return this.findByTipoPromise(tipo);
  }

  findByFechaCallback(
    fecha: string,
    callback: (error: Error | null, data?: Reporte[]) => void
  ): void {
    try {
      const reportes = this.data.filter(
        (r) => r.fecha_generacion.startsWith(fecha) // Coincidencia por fecha (YYYY-MM-DD)
      );
      callback(null, reportes);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByFechaPromise(fecha: string): Promise<Reporte[]> {
    return new Promise((resolve, reject) => {
      this.findByFechaCallback(fecha, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByFechaAsync(fecha: string): Promise<Reporte[]> {
    return this.findByFechaPromise(fecha);
  }
}
