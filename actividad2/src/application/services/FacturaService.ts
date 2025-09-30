import { Factura } from "../../domain/interfaces/Factura";
import { FacturaRepository } from "../../domain/repositories/FacturaRepository";

export class FacturaService {
  constructor(private facturaRepository: FacturaRepository) {}

  // Servicios con Callbacks
  crearFacturaCallback(
    datosFactura: Omit<Factura, "id">,
    callback: (error: Error | null, factura?: Factura) => void
  ): void {
    this.facturaRepository.createCallback(datosFactura, callback);
  }

  obtenerFacturaPorIdCallback(
    id: number,
    callback: (error: Error | null, factura?: Factura) => void
  ): void {
    this.facturaRepository.findByIdCallback(id, callback);
  }

  obtenerTodasLasFacturasCallback(
    callback: (error: Error | null, facturas?: Factura[]) => void
  ): void {
    this.facturaRepository.findAllCallback(callback);
  }

  actualizarFacturaCallback(
    id: number,
    datosActualizacion: Partial<Factura>,
    callback: (error: Error | null, factura?: Factura) => void
  ): void {
    this.facturaRepository.updateCallback(id, datosActualizacion, callback);
  }

  eliminarFacturaCallback(
    id: number,
    callback: (error: Error | null, eliminado?: boolean) => void
  ): void {
    this.facturaRepository.deleteCallback(id, callback);
  }

  obtenerFacturaPorReservaCallback(
    reservaId: number,
    callback: (error: Error | null, factura?: Factura) => void
  ): void {
    this.facturaRepository.findByReservaIdCallback(reservaId, callback);
  }

  obtenerFacturasPorClienteCallback(
    clienteId: number,
    callback: (error: Error | null, facturas?: Factura[]) => void
  ): void {
    this.facturaRepository.findByClienteIdCallback(clienteId, callback);
  }

  // Servicios con Promesas
  async crearFactura(datosFactura: Omit<Factura, "id">): Promise<Factura> {
    return new Promise((resolve, reject) => {
      this.crearFacturaCallback(
        datosFactura,
        (error: Error | null, factura?: Factura) => {
          if (error) reject(error);
          else resolve(factura!);
        }
      );
    });
  }

  async obtenerFacturaPorId(id: number): Promise<Factura | null> {
    return new Promise((resolve, reject) => {
      this.obtenerFacturaPorIdCallback(
        id,
        (error: Error | null, factura?: Factura) => {
          if (error) reject(error);
          else resolve(factura || null);
        }
      );
    });
  }

  async obtenerTodasLasFacturas(): Promise<Factura[]> {
    return new Promise((resolve, reject) => {
      this.obtenerTodasLasFacturasCallback(
        (error: Error | null, facturas?: Factura[]) => {
          if (error) reject(error);
          else resolve(facturas || []);
        }
      );
    });
  }

  async actualizarFactura(
    id: number,
    datosActualizacion: Partial<Factura>
  ): Promise<Factura> {
    return new Promise((resolve, reject) => {
      this.actualizarFacturaCallback(
        id,
        datosActualizacion,
        (error: Error | null, factura?: Factura) => {
          if (error) reject(error);
          else resolve(factura!);
        }
      );
    });
  }

  async eliminarFactura(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.eliminarFacturaCallback(
        id,
        (error: Error | null, eliminado?: boolean) => {
          if (error) reject(error);
          else resolve(eliminado || false);
        }
      );
    });
  }

  async obtenerFacturaPorReserva(reservaId: number): Promise<Factura | null> {
    return new Promise((resolve, reject) => {
      this.obtenerFacturaPorReservaCallback(
        reservaId,
        (error: Error | null, factura?: Factura) => {
          if (error) reject(error);
          else resolve(factura || null);
        }
      );
    });
  }

  async obtenerFacturasPorCliente(clienteId: number): Promise<Factura[]> {
    return new Promise((resolve, reject) => {
      this.obtenerFacturasPorClienteCallback(
        clienteId,
        (error: Error | null, facturas?: Factura[]) => {
          if (error) reject(error);
          else resolve(facturas || []);
        }
      );
    });
  }
}
