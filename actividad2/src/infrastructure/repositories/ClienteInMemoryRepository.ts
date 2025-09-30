import { Cliente } from "../../domain/interfaces/Cliente";
import { ClienteRepository } from "../../domain/repositories/ClienteRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class ClienteInMemoryRepository
  extends BaseInMemoryRepository<Cliente>
  implements ClienteRepository
{
  constructor() {
    super();
    this.initializeTestData();
  }

  private initializeTestData(): void {
    const now = new Date().toISOString();
    this.data = [
      {
        id: 1,
        usuario_id: 2,
        nombre_completo: "Juan Pérez González",
        email: "juan@email.com",
        telefono: "987654321",
        direccion: "Calle Principal 123, Ciudad",
        fecha_registro: now,
        estado: true,
      },
      {
        id: 2,
        usuario_id: 4,
        nombre_completo: "Ana López Martín",
        email: "ana@email.com",
        telefono: "111222333",
        direccion: "Avenida Central 456, Ciudad",
        fecha_registro: now,
        estado: true,
      },
    ];
    this.currentId = 3;
  }

  findByUsuarioIdCallback(
    usuarioId: number,
    callback: (error: Error | null, data?: Cliente) => void
  ): void {
    setTimeout(() => {
      try {
        const cliente = this.data.find((c) => c.usuario_id === usuarioId);
        callback(null, cliente);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  async findByUsuarioIdPromise(usuarioId: number): Promise<Cliente | null> {
    await this.simulateDelay();
    return this.data.find((c) => c.usuario_id === usuarioId) || null;
  }

  async findByUsuarioIdAsync(usuarioId: number): Promise<Cliente | null> {
    return await this.findByUsuarioIdPromise(usuarioId);
  }
}
