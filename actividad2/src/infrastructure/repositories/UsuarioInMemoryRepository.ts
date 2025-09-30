import { Usuario } from "../../domain/interfaces/Usuario";
import { UsuarioRepository } from "../../domain/repositories/UsuarioRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class UsuarioInMemoryRepository
  extends BaseInMemoryRepository<Usuario>
  implements UsuarioRepository
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
        nombre: "Admin Principal",
        email: "admin@restaurant.com",
        contraseña: "admin123",
        rol: "administrador",
        telefono: "123456789",
        creado_en: now,
        actualizado_en: now,
      },
      {
        id: 2,
        nombre: "Juan Pérez",
        email: "juan@email.com",
        contraseña: "cliente123",
        rol: "cliente",
        telefono: "987654321",
        creado_en: now,
        actualizado_en: now,
      },
      {
        id: 3,
        nombre: "María García",
        email: "maria@email.com",
        contraseña: "dueño123",
        rol: "dueño",
        telefono: "555666777",
        creado_en: now,
        actualizado_en: now,
      },
    ];
    this.currentId = 4;
  }

  // Callbacks
  findByEmailCallback(
    email: string,
    callback: (error: Error | null, data?: Usuario) => void
  ): void {
    setTimeout(() => {
      try {
        const usuario = this.data.find((u) => u.email === email);
        callback(null, usuario);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  // Promises
  async findByEmailPromise(email: string): Promise<Usuario | null> {
    await this.simulateDelay();
    return this.data.find((u) => u.email === email) || null;
  }

  // Async/Await
  async findByEmailAsync(email: string): Promise<Usuario | null> {
    return await this.findByEmailPromise(email);
  }
}
