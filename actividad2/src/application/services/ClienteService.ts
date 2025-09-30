import { Cliente } from "../../domain/interfaces/Cliente";
import { ClienteRepository } from "../../domain/repositories/ClienteRepository";

export class ClienteService {
  constructor(private clienteRepository: ClienteRepository) {}

  // Servicios con Callbacks
  crearClienteCallback(
    datosCliente: Omit<Cliente, "id">,
    callback: (error: Error | null, cliente?: Cliente) => void
  ): void {
    // Crear el cliente directamente (la validación de email se podría hacer en el repository)
    this.clienteRepository.createCallback(datosCliente, callback);
  }

  obtenerClientePorIdCallback(
    id: number,
    callback: (error: Error | null, cliente?: Cliente) => void
  ): void {
    this.clienteRepository.findByIdCallback(id, callback);
  }

  obtenerTodosLosClientesCallback(
    callback: (error: Error | null, clientes?: Cliente[]) => void
  ): void {
    this.clienteRepository.findAllCallback(callback);
  }

  actualizarClienteCallback(
    id: number,
    datosActualizacion: Partial<Cliente>,
    callback: (error: Error | null, cliente?: Cliente) => void
  ): void {
    this.clienteRepository.updateCallback(id, datosActualizacion, callback);
  }

  eliminarClienteCallback(
    id: number,
    callback: (error: Error | null, eliminado?: boolean) => void
  ): void {
    this.clienteRepository.deleteCallback(id, callback);
  }

  buscarClientesPorUsuarioCallback(
    usuarioId: number,
    callback: (error: Error | null, cliente?: Cliente) => void
  ): void {
    this.clienteRepository.findByUsuarioIdCallback(usuarioId, callback);
  }

  // Servicios con Promesas
  async crearCliente(datosCliente: Omit<Cliente, "id">): Promise<Cliente> {
    return new Promise((resolve, reject) => {
      this.crearClienteCallback(datosCliente, (error, cliente) => {
        if (error) reject(error);
        else resolve(cliente!);
      });
    });
  }

  async obtenerClientePorId(id: number): Promise<Cliente | null> {
    return new Promise((resolve, reject) => {
      this.obtenerClientePorIdCallback(id, (error, cliente) => {
        if (error) reject(error);
        else resolve(cliente || null);
      });
    });
  }

  async obtenerTodosLosClientes(): Promise<Cliente[]> {
    return new Promise((resolve, reject) => {
      this.obtenerTodosLosClientesCallback((error, clientes) => {
        if (error) reject(error);
        else resolve(clientes || []);
      });
    });
  }

  async actualizarCliente(
    id: number,
    datosActualizacion: Partial<Cliente>
  ): Promise<Cliente> {
    return new Promise((resolve, reject) => {
      this.actualizarClienteCallback(
        id,
        datosActualizacion,
        (error, cliente) => {
          if (error) reject(error);
          else resolve(cliente!);
        }
      );
    });
  }

  async eliminarCliente(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.eliminarClienteCallback(id, (error, eliminado) => {
        if (error) reject(error);
        else resolve(eliminado || false);
      });
    });
  }

  async buscarClientePorUsuario(usuarioId: number): Promise<Cliente | null> {
    return new Promise((resolve, reject) => {
      this.buscarClientesPorUsuarioCallback(
        usuarioId,
        (error: Error | null, cliente?: Cliente) => {
          if (error) reject(error);
          else resolve(cliente || null);
        }
      );
    });
  }
}
