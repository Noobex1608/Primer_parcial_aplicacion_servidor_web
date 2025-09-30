import { Servicio } from "../../domain/interfaces/Servicio";
import { ServicioRepository } from "../../domain/repositories/ServicioRepository";

export class ServicioService {
  constructor(private servicioRepository: ServicioRepository) {}

  // Servicios con Callbacks
  obtenerServiciosPorTipoCallback(
    tipo: string,
    callback: (error: Error | null, servicios?: Servicio[]) => void
  ): void {
    this.servicioRepository.findByTipoCallback(tipo, callback);
  }

  crearServicioCallback(
    datosServicio: Omit<Servicio, "id">,
    callback: (error: Error | null, servicio?: Servicio) => void
  ): void {
    if (!datosServicio.nombre || datosServicio.precio <= 0) {
      callback(new Error("Datos del servicio inválidos"));
      return;
    }

    this.servicioRepository.createCallback(datosServicio, callback);
  }

  // Servicios con Promises
  async obtenerTodosLosServiciosPromise(): Promise<Servicio[]> {
    return await this.servicioRepository.findAllPromise();
  }

  async obtenerServicioPorIdPromise(id: number): Promise<Servicio | null> {
    return await this.servicioRepository.findByIdPromise(id);
  }

  async crearServicioPromise(
    datosServicio: Omit<Servicio, "id">
  ): Promise<Servicio> {
    if (!datosServicio.nombre || datosServicio.precio <= 0) {
      throw new Error("Datos del servicio inválidos");
    }

    return await this.servicioRepository.createPromise(datosServicio);
  }

  async obtenerServiciosPorTipoPromise(tipo: string): Promise<Servicio[]> {
    return await this.servicioRepository.findByTipoPromise(tipo);
  }

  // Servicios con Async/Await
  async obtenerTodosLosServiciosAsync(): Promise<Servicio[]> {
    return await this.servicioRepository.findAllAsync();
  }

  async crearServicioAsync(
    datosServicio: Omit<Servicio, "id">
  ): Promise<Servicio> {
    if (!datosServicio.nombre || datosServicio.precio <= 0) {
      throw new Error("Datos del servicio inválidos");
    }

    return await this.servicioRepository.createAsync(datosServicio);
  }

  async actualizarServicioAsync(
    id: number,
    datosActualizacion: Partial<Servicio>
  ): Promise<Servicio | null> {
    if (
      datosActualizacion.precio !== undefined &&
      datosActualizacion.precio <= 0
    ) {
      throw new Error("El precio debe ser mayor a 0");
    }

    return await this.servicioRepository.updateAsync(id, datosActualizacion);
  }

  async eliminarServicioAsync(id: number): Promise<boolean> {
    return await this.servicioRepository.deleteAsync(id);
  }

  async obtenerServiciosPorTipoAsync(tipo: string): Promise<Servicio[]> {
    return await this.servicioRepository.findByTipoAsync(tipo);
  }

  // Método de utilidad para calcular el costo total de servicios
  async calcularCostoTotalAsync(serviciosIds: number[]): Promise<number> {
    let total = 0;

    for (const id of serviciosIds) {
      const servicio = await this.servicioRepository.findByIdAsync(id);
      if (servicio) {
        total += servicio.precio;
      }
    }

    return total;
  }
}
