import { Evento } from "../../domain/interfaces/Evento";
import { EventoRepository } from "../../domain/repositories/EventoRepository";

export class EventoService {
  constructor(private eventoRepository: EventoRepository) {}

  // Servicios con Callbacks
  obtenerEventosPorOrganizadorCallback(
    organizadorId: number,
    callback: (error: Error | null, eventos?: Evento[]) => void
  ): void {
    this.eventoRepository.findByOrganizadorIdCallback(organizadorId, callback);
  }

  crearEventoCallback(
    datosEvento: Omit<Evento, "id">,
    callback: (error: Error | null, evento?: Evento) => void
  ): void {
    // Validaciones básicas
    if (
      !datosEvento.nombre ||
      !datosEvento.fecha_inicio ||
      !datosEvento.fecha_fin
    ) {
      callback(new Error("Datos del evento incompletos"));
      return;
    }

    // Validar que la fecha de inicio sea antes que la de fin
    if (new Date(datosEvento.fecha_inicio) >= new Date(datosEvento.fecha_fin)) {
      callback(
        new Error("La fecha de inicio debe ser anterior a la fecha de fin")
      );
      return;
    }

    this.eventoRepository.createCallback(datosEvento, callback);
  }

  // Servicios con Promises
  async obtenerTodosLosEventosPromise(): Promise<Evento[]> {
    return await this.eventoRepository.findAllPromise();
  }

  async obtenerEventoPorIdPromise(id: number): Promise<Evento | null> {
    return await this.eventoRepository.findByIdPromise(id);
  }

  async crearEventoPromise(datosEvento: Omit<Evento, "id">): Promise<Evento> {
    if (
      !datosEvento.nombre ||
      !datosEvento.fecha_inicio ||
      !datosEvento.fecha_fin
    ) {
      throw new Error("Datos del evento incompletos");
    }

    if (new Date(datosEvento.fecha_inicio) >= new Date(datosEvento.fecha_fin)) {
      throw new Error("La fecha de inicio debe ser anterior a la fecha de fin");
    }

    return await this.eventoRepository.createPromise(datosEvento);
  }

  async obtenerEventosPorTipoPromise(tipo: string): Promise<Evento[]> {
    return await this.eventoRepository.findByTipoPromise(tipo);
  }

  // Servicios con Async/Await
  async obtenerTodosLosEventosAsync(): Promise<Evento[]> {
    return await this.eventoRepository.findAllAsync();
  }

  async crearEventoAsync(datosEvento: Omit<Evento, "id">): Promise<Evento> {
    if (
      !datosEvento.nombre ||
      !datosEvento.fecha_inicio ||
      !datosEvento.fecha_fin
    ) {
      throw new Error("Datos del evento incompletos");
    }

    if (new Date(datosEvento.fecha_inicio) >= new Date(datosEvento.fecha_fin)) {
      throw new Error("La fecha de inicio debe ser anterior a la fecha de fin");
    }

    return await this.eventoRepository.createAsync(datosEvento);
  }

  async actualizarEventoAsync(
    id: number,
    datosActualizacion: Partial<Evento>
  ): Promise<Evento | null> {
    // Validar fechas si se están actualizando
    if (datosActualizacion.fecha_inicio && datosActualizacion.fecha_fin) {
      if (
        new Date(datosActualizacion.fecha_inicio) >=
        new Date(datosActualizacion.fecha_fin)
      ) {
        throw new Error(
          "La fecha de inicio debe ser anterior a la fecha de fin"
        );
      }
    }

    return await this.eventoRepository.updateAsync(id, datosActualizacion);
  }

  async eliminarEventoAsync(id: number): Promise<boolean> {
    return await this.eventoRepository.deleteAsync(id);
  }

  async obtenerEventosPorOrganizadorAsync(
    organizadorId: number
  ): Promise<Evento[]> {
    return await this.eventoRepository.findByOrganizadorIdAsync(organizadorId);
  }

  async obtenerEventosPorTipoAsync(tipo: string): Promise<Evento[]> {
    return await this.eventoRepository.findByTipoAsync(tipo);
  }

  // Método de utilidad para obtener eventos próximos
  async obtenerEventosProximosAsync(dias: number = 30): Promise<Evento[]> {
    const eventos = await this.eventoRepository.findAllAsync();
    const fechaLimite = new Date();
    fechaLimite.setDate(fechaLimite.getDate() + dias);

    return eventos.filter((evento) => {
      const fechaEvento = new Date(evento.fecha_inicio);
      return fechaEvento >= new Date() && fechaEvento <= fechaLimite;
    });
  }
}
