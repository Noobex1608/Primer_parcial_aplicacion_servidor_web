import { Reserva } from "../../domain/interfaces/Reserva";
import { ReservaRepository } from "../../domain/repositories/ReservaRepository";

export class ReservaService {
  constructor(private reservaRepository: ReservaRepository) {}

  // Servicios con Callbacks
  crearReservaCallback(
    datosReserva: Omit<Reserva, "id">,
    callback: (error: Error | null, reserva?: Reserva) => void
  ): void {
    this.reservaRepository.createCallback(datosReserva, callback);
  }

  obtenerReservaPorIdCallback(
    id: number,
    callback: (error: Error | null, reserva?: Reserva) => void
  ): void {
    this.reservaRepository.findByIdCallback(id, callback);
  }

  obtenerTodasLasReservasCallback(
    callback: (error: Error | null, reservas?: Reserva[]) => void
  ): void {
    this.reservaRepository.findAllCallback(callback);
  }

  actualizarReservaCallback(
    id: number,
    datosActualizacion: Partial<Reserva>,
    callback: (error: Error | null, reserva?: Reserva) => void
  ): void {
    this.reservaRepository.updateCallback(id, datosActualizacion, callback);
  }

  eliminarReservaCallback(
    id: number,
    callback: (error: Error | null, eliminado?: boolean) => void
  ): void {
    this.reservaRepository.deleteCallback(id, callback);
  }

  obtenerReservasPorClienteCallback(
    clienteId: number,
    callback: (error: Error | null, reservas?: Reserva[]) => void
  ): void {
    this.reservaRepository.findByClienteIdCallback(clienteId, callback);
  }

  obtenerReservasPorMesaCallback(
    mesaId: number,
    callback: (error: Error | null, reservas?: Reserva[]) => void
  ): void {
    this.reservaRepository.findByMesaIdCallback(mesaId, callback);
  }

  // Servicios con Promesas
  async crearReserva(datosReserva: Omit<Reserva, "id">): Promise<Reserva> {
    return new Promise((resolve, reject) => {
      this.crearReservaCallback(
        datosReserva,
        (error: Error | null, reserva?: Reserva) => {
          if (error) reject(error);
          else resolve(reserva!);
        }
      );
    });
  }

  async obtenerReservaPorId(id: number): Promise<Reserva | null> {
    return new Promise((resolve, reject) => {
      this.obtenerReservaPorIdCallback(
        id,
        (error: Error | null, reserva?: Reserva) => {
          if (error) reject(error);
          else resolve(reserva || null);
        }
      );
    });
  }

  async obtenerTodasLasReservas(): Promise<Reserva[]> {
    return new Promise((resolve, reject) => {
      this.obtenerTodasLasReservasCallback(
        (error: Error | null, reservas?: Reserva[]) => {
          if (error) reject(error);
          else resolve(reservas || []);
        }
      );
    });
  }

  async actualizarReserva(
    id: number,
    datosActualizacion: Partial<Reserva>
  ): Promise<Reserva> {
    return new Promise((resolve, reject) => {
      this.actualizarReservaCallback(
        id,
        datosActualizacion,
        (error: Error | null, reserva?: Reserva) => {
          if (error) reject(error);
          else resolve(reserva!);
        }
      );
    });
  }

  async eliminarReserva(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.eliminarReservaCallback(
        id,
        (error: Error | null, eliminado?: boolean) => {
          if (error) reject(error);
          else resolve(eliminado || false);
        }
      );
    });
  }

  async obtenerReservasPorCliente(clienteId: number): Promise<Reserva[]> {
    return new Promise((resolve, reject) => {
      this.obtenerReservasPorClienteCallback(
        clienteId,
        (error: Error | null, reservas?: Reserva[]) => {
          if (error) reject(error);
          else resolve(reservas || []);
        }
      );
    });
  }

  async obtenerReservasPorMesa(mesaId: number): Promise<Reserva[]> {
    return new Promise((resolve, reject) => {
      this.obtenerReservasPorMesaCallback(
        mesaId,
        (error: Error | null, reservas?: Reserva[]) => {
          if (error) reject(error);
          else resolve(reservas || []);
        }
      );
    });
  }
}
