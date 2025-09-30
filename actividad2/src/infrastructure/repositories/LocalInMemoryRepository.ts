import { Local } from "../../domain/interfaces/Local";
import { LocalRepository } from "../../domain/repositories/LocalRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class LocalInMemoryRepository
  extends BaseInMemoryRepository<Local>
  implements LocalRepository
{
  findByNombreCallback(
    nombre: string,
    callback: (error: Error | null, data?: Local[]) => void
  ): void {
    try {
      const locales = this.data.filter((local) =>
        local.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
      callback(null, locales);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByNombrePromise(nombre: string): Promise<Local[]> {
    return new Promise((resolve, reject) => {
      this.findByNombreCallback(nombre, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByNombreAsync(nombre: string): Promise<Local[]> {
    return this.findByNombrePromise(nombre);
  }

  findByCiudadCallback(
    ciudad: string,
    callback: (error: Error | null, data?: Local[]) => void
  ): void {
    try {
      const locales = this.data.filter((local) =>
        local.ciudad?.toLowerCase().includes(ciudad.toLowerCase())
      );
      callback(null, locales);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByCiudadPromise(ciudad: string): Promise<Local[]> {
    return new Promise((resolve, reject) => {
      this.findByCiudadCallback(ciudad, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByCiudadAsync(ciudad: string): Promise<Local[]> {
    return this.findByCiudadPromise(ciudad);
  }
}
