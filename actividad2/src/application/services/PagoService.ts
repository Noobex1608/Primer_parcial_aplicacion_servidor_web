import { Pago } from "../../domain/interfaces/Pago";
import { PagoRepository } from "../../domain/repositories/PagoRepository";

export class PagoService {
  constructor(private pagoRepository: PagoRepository) {}

  // Servicios con Callbacks
  crearPagoCallback(
    datosPago: Omit<Pago, "id">,
    callback: (error: Error | null, pago?: Pago) => void
  ): void {
    this.pagoRepository.createCallback(datosPago, callback);
  }

  obtenerPagoPorIdCallback(
    id: number,
    callback: (error: Error | null, pago?: Pago) => void
  ): void {
    this.pagoRepository.findByIdCallback(id, callback);
  }

  obtenerTodosLosPagosCallback(
    callback: (error: Error | null, pagos?: Pago[]) => void
  ): void {
    this.pagoRepository.findAllCallback(callback);
  }

  actualizarPagoCallback(
    id: number,
    datosActualizacion: Partial<Pago>,
    callback: (error: Error | null, pago?: Pago) => void
  ): void {
    this.pagoRepository.updateCallback(id, datosActualizacion, callback);
  }

  eliminarPagoCallback(
    id: number,
    callback: (error: Error | null, eliminado?: boolean) => void
  ): void {
    this.pagoRepository.deleteCallback(id, callback);
  }

  obtenerPagosPorFacturaCallback(
    facturaId: number,
    callback: (error: Error | null, pagos?: Pago[]) => void
  ): void {
    this.pagoRepository.findByFacturaIdCallback(facturaId, callback);
  }

  obtenerPagosPorMetodoCallback(
    metodoPago: string,
    callback: (error: Error | null, pagos?: Pago[]) => void
  ): void {
    this.pagoRepository.findByMetodoPagoCallback(metodoPago, callback);
  }

  // Servicios con Promesas
  async crearPago(datosPago: Omit<Pago, "id">): Promise<Pago> {
    return new Promise((resolve, reject) => {
      this.crearPagoCallback(datosPago, (error: Error | null, pago?: Pago) => {
        if (error) reject(error);
        else resolve(pago!);
      });
    });
  }

  async obtenerPagoPorId(id: number): Promise<Pago | null> {
    return new Promise((resolve, reject) => {
      this.obtenerPagoPorIdCallback(id, (error: Error | null, pago?: Pago) => {
        if (error) reject(error);
        else resolve(pago || null);
      });
    });
  }

  async obtenerTodosLosPagos(): Promise<Pago[]> {
    return new Promise((resolve, reject) => {
      this.obtenerTodosLosPagosCallback(
        (error: Error | null, pagos?: Pago[]) => {
          if (error) reject(error);
          else resolve(pagos || []);
        }
      );
    });
  }

  async actualizarPago(
    id: number,
    datosActualizacion: Partial<Pago>
  ): Promise<Pago> {
    return new Promise((resolve, reject) => {
      this.actualizarPagoCallback(
        id,
        datosActualizacion,
        (error: Error | null, pago?: Pago) => {
          if (error) reject(error);
          else resolve(pago!);
        }
      );
    });
  }

  async eliminarPago(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.eliminarPagoCallback(
        id,
        (error: Error | null, eliminado?: boolean) => {
          if (error) reject(error);
          else resolve(eliminado || false);
        }
      );
    });
  }

  async obtenerPagosPorFactura(facturaId: number): Promise<Pago[]> {
    return new Promise((resolve, reject) => {
      this.obtenerPagosPorFacturaCallback(
        facturaId,
        (error: Error | null, pagos?: Pago[]) => {
          if (error) reject(error);
          else resolve(pagos || []);
        }
      );
    });
  }

  async obtenerPagosPorMetodo(metodoPago: string): Promise<Pago[]> {
    return new Promise((resolve, reject) => {
      this.obtenerPagosPorMetodoCallback(
        metodoPago,
        (error: Error | null, pagos?: Pago[]) => {
          if (error) reject(error);
          else resolve(pagos || []);
        }
      );
    });
  }
}
