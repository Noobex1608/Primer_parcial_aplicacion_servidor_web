import { Servicio } from "../../domain/interfaces/Servicio";
import { ServicioRepository } from "../../domain/repositories/ServicioRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class ServicioInMemoryRepository
  extends BaseInMemoryRepository<Servicio>
  implements ServicioRepository
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
        nombre: "Catering Premium",
        descripcion:
          "Servicio de catering de alta calidad para eventos especiales",
        precio: 75.0,
        tipo: "catering",
        creado_en: now,
        actualizado_en: now,
      },
      {
        id: 2,
        nombre: "Decoración Floral",
        descripcion: "Arreglos florales personalizados para bodas y eventos",
        precio: 150.0,
        tipo: "decoracion",
        creado_en: now,
        actualizado_en: now,
      },
      {
        id: 3,
        nombre: "Sistema de Audio y Video",
        descripcion: "Equipo profesional de sonido y proyección",
        precio: 200.0,
        tipo: "audiovisual",
        creado_en: now,
        actualizado_en: now,
      },
      {
        id: 4,
        nombre: "Fotografía Profesional",
        descripcion: "Servicio completo de fotografía para eventos",
        precio: 300.0,
        tipo: "fotografia",
        creado_en: now,
        actualizado_en: now,
      },
      {
        id: 5,
        nombre: "DJ y Música en Vivo",
        descripcion: "Entretenimiento musical profesional",
        precio: 250.0,
        tipo: "entretenimiento",
        creado_en: now,
        actualizado_en: now,
      },
    ];
    this.currentId = 6;
  }

  // Callbacks
  findByTipoCallback(
    tipo: string,
    callback: (error: Error | null, data?: Servicio[]) => void
  ): void {
    setTimeout(() => {
      try {
        const servicios = this.data.filter((s) => s.tipo === tipo);
        callback(null, servicios);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  // Promises
  async findByTipoPromise(tipo: string): Promise<Servicio[]> {
    await this.simulateDelay();
    return this.data.filter((s) => s.tipo === tipo);
  }

  // Async/Await
  async findByTipoAsync(tipo: string): Promise<Servicio[]> {
    return await this.findByTipoPromise(tipo);
  }
}
