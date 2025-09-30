import { Disponibilidad } from "../../domain/interfaces/Disponibilidad";
import { DisponibilidadRepository } from "../../domain/repositories/DisponibilidadRepository";

export class DisponibilidadService {
  constructor(private disponibilidadRepository: DisponibilidadRepository) {}

  // Servicios con Callbacks
  crearDisponibilidadCallback(
    datosDisponibilidad: Omit<Disponibilidad, "id">,
    callback: (error: Error | null, disponibilidad?: Disponibilidad) => void
  ): void {
    this.disponibilidadRepository.createCallback(datosDisponibilidad, callback);
  }

  obtenerDisponibilidadPorIdCallback(
    id: number,
    callback: (error: Error | null, disponibilidad?: Disponibilidad) => void
  ): void {
    this.disponibilidadRepository.findByIdCallback(id, callback);
  }

  obtenerTodasLasDisponibilidadesCallback(
    callback: (error: Error | null, disponibilidades?: Disponibilidad[]) => void
  ): void {
    this.disponibilidadRepository.findAllCallback(callback);
  }

  actualizarDisponibilidadCallback(
    id: number,
    datosActualizacion: Partial<Disponibilidad>,
    callback: (error: Error | null, disponibilidad?: Disponibilidad) => void
  ): void {
    this.disponibilidadRepository.updateCallback(
      id,
      datosActualizacion,
      callback
    );
  }

  eliminarDisponibilidadCallback(
    id: number,
    callback: (error: Error | null, eliminado?: boolean) => void
  ): void {
    this.disponibilidadRepository.deleteCallback(id, callback);
  }

  obtenerDisponibilidadPorLocalCallback(
    localId: number,
    callback: (error: Error | null, disponibilidades?: Disponibilidad[]) => void
  ): void {
    this.disponibilidadRepository.findByLocalIdCallback(localId, callback);
  }

  obtenerDisponibilidadPorMesaCallback(
    mesaId: number,
    callback: (error: Error | null, disponibilidades?: Disponibilidad[]) => void
  ): void {
    this.disponibilidadRepository.findByMesaIdCallback(mesaId, callback);
  }

  // Servicios con Promesas
  async crearDisponibilidad(
    datosDisponibilidad: Omit<Disponibilidad, "id">
  ): Promise<Disponibilidad> {
    return new Promise((resolve, reject) => {
      this.crearDisponibilidadCallback(
        datosDisponibilidad,
        (error: Error | null, disponibilidad?: Disponibilidad) => {
          if (error) reject(error);
          else resolve(disponibilidad!);
        }
      );
    });
  }

  async obtenerDisponibilidadPorId(id: number): Promise<Disponibilidad | null> {
    return new Promise((resolve, reject) => {
      this.obtenerDisponibilidadPorIdCallback(
        id,
        (error: Error | null, disponibilidad?: Disponibilidad) => {
          if (error) reject(error);
          else resolve(disponibilidad || null);
        }
      );
    });
  }

  async obtenerTodasLasDisponibilidades(): Promise<Disponibilidad[]> {
    return new Promise((resolve, reject) => {
      this.obtenerTodasLasDisponibilidadesCallback(
        (error: Error | null, disponibilidades?: Disponibilidad[]) => {
          if (error) reject(error);
          else resolve(disponibilidades || []);
        }
      );
    });
  }

  async actualizarDisponibilidad(
    id: number,
    datosActualizacion: Partial<Disponibilidad>
  ): Promise<Disponibilidad> {
    return new Promise((resolve, reject) => {
      this.actualizarDisponibilidadCallback(
        id,
        datosActualizacion,
        (error: Error | null, disponibilidad?: Disponibilidad) => {
          if (error) reject(error);
          else resolve(disponibilidad!);
        }
      );
    });
  }

  async eliminarDisponibilidad(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.eliminarDisponibilidadCallback(
        id,
        (error: Error | null, eliminado?: boolean) => {
          if (error) reject(error);
          else resolve(eliminado || false);
        }
      );
    });
  }

  async obtenerDisponibilidadPorLocal(
    localId: number
  ): Promise<Disponibilidad[]> {
    return new Promise((resolve, reject) => {
      this.obtenerDisponibilidadPorLocalCallback(
        localId,
        (error: Error | null, disponibilidades?: Disponibilidad[]) => {
          if (error) reject(error);
          else resolve(disponibilidades || []);
        }
      );
    });
  }

  async obtenerDisponibilidadPorMesa(
    mesaId: number
  ): Promise<Disponibilidad[]> {
    return new Promise((resolve, reject) => {
      this.obtenerDisponibilidadPorMesaCallback(
        mesaId,
        (error: Error | null, disponibilidades?: Disponibilidad[]) => {
          if (error) reject(error);
          else resolve(disponibilidades || []);
        }
      );
    });
  }
}
