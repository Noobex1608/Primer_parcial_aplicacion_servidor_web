import { Reporte } from "../interfaces/Reporte";
import { BaseRepository } from "./BaseRepository";

export interface ReporteRepository extends BaseRepository<Reporte> {
  findByTipoCallback(
    tipo: string,
    callback: (error: Error | null, data?: Reporte[]) => void
  ): void;
  findByTipoPromise(tipo: string): Promise<Reporte[]>;
  findByTipoAsync(tipo: string): Promise<Reporte[]>;

  findByFechaCallback(
    fecha: string,
    callback: (error: Error | null, data?: Reporte[]) => void
  ): void;
  findByFechaPromise(fecha: string): Promise<Reporte[]>;
  findByFechaAsync(fecha: string): Promise<Reporte[]>;
}
