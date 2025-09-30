import { Local } from "../../domain/interfaces/Local";
import { LocalRepository } from "../../domain/repositories/LocalRepository";

export class LocalService {
  constructor(private localRepository: LocalRepository) {}

  // Servicios con Callbacks
  crearLocalCallback(
    datosLocal: Omit<Local, "id">,
    callback: (error: Error | null, local?: Local) => void
  ): void {
    this.localRepository.createCallback(datosLocal, callback);
  }

  obtenerLocalPorIdCallback(
    id: number,
    callback: (error: Error | null, local?: Local) => void
  ): void {
    this.localRepository.findByIdCallback(id, callback);
  }

  obtenerTodosLosLocalesCallback(
    callback: (error: Error | null, locales?: Local[]) => void
  ): void {
    this.localRepository.findAllCallback(callback);
  }

  actualizarLocalCallback(
    id: number,
    datosActualizacion: Partial<Local>,
    callback: (error: Error | null, local?: Local) => void
  ): void {
    this.localRepository.updateCallback(id, datosActualizacion, callback);
  }

  eliminarLocalCallback(
    id: number,
    callback: (error: Error | null, eliminado?: boolean) => void
  ): void {
    this.localRepository.deleteCallback(id, callback);
  }

  buscarLocalesPorNombreCallback(
    nombre: string,
    callback: (error: Error | null, locales?: Local[]) => void
  ): void {
    this.localRepository.findByNombreCallback(nombre, callback);
  }

  buscarLocalesPorCiudadCallback(
    ciudad: string,
    callback: (error: Error | null, locales?: Local[]) => void
  ): void {
    this.localRepository.findByCiudadCallback(ciudad, callback);
  }

  // Servicios con Promesas
  async crearLocal(datosLocal: Omit<Local, "id">): Promise<Local> {
    return new Promise((resolve, reject) => {
      this.crearLocalCallback(
        datosLocal,
        (error: Error | null, local?: Local) => {
          if (error) reject(error);
          else resolve(local!);
        }
      );
    });
  }

  async obtenerLocalPorId(id: number): Promise<Local | null> {
    return new Promise((resolve, reject) => {
      this.obtenerLocalPorIdCallback(
        id,
        (error: Error | null, local?: Local) => {
          if (error) reject(error);
          else resolve(local || null);
        }
      );
    });
  }

  async obtenerTodosLosLocales(): Promise<Local[]> {
    return new Promise((resolve, reject) => {
      this.obtenerTodosLosLocalesCallback(
        (error: Error | null, locales?: Local[]) => {
          if (error) reject(error);
          else resolve(locales || []);
        }
      );
    });
  }

  async actualizarLocal(
    id: number,
    datosActualizacion: Partial<Local>
  ): Promise<Local> {
    return new Promise((resolve, reject) => {
      this.actualizarLocalCallback(
        id,
        datosActualizacion,
        (error: Error | null, local?: Local) => {
          if (error) reject(error);
          else resolve(local!);
        }
      );
    });
  }

  async eliminarLocal(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.eliminarLocalCallback(
        id,
        (error: Error | null, eliminado?: boolean) => {
          if (error) reject(error);
          else resolve(eliminado || false);
        }
      );
    });
  }

  async buscarLocalesPorNombre(nombre: string): Promise<Local[]> {
    return new Promise((resolve, reject) => {
      this.buscarLocalesPorNombreCallback(
        nombre,
        (error: Error | null, locales?: Local[]) => {
          if (error) reject(error);
          else resolve(locales || []);
        }
      );
    });
  }

  async buscarLocalesPorCiudad(ciudad: string): Promise<Local[]> {
    return new Promise((resolve, reject) => {
      this.buscarLocalesPorCiudadCallback(
        ciudad,
        (error: Error | null, locales?: Local[]) => {
          if (error) reject(error);
          else resolve(locales || []);
        }
      );
    });
  }
}
