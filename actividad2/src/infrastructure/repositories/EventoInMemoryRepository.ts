import { Evento } from "../../domain/interfaces/Evento";
import { EventoRepository } from "../../domain/repositories/EventoRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class EventoInMemoryRepository
  extends BaseInMemoryRepository<Evento>
  implements EventoRepository
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
        nombre: "Conferencia de Tecnología 2025",
        tipo: "conferencia",
        fecha_inicio: "2025-10-15T09:00:00Z",
        fecha_fin: "2025-10-15T18:00:00Z",
        descripcion: "Evento sobre las últimas tendencias en tecnología",
        organizador_id: 1,
        creado_en: now,
      },
      {
        id: 2,
        nombre: "Boda de Juan y María",
        tipo: "boda",
        fecha_inicio: "2025-11-20T16:00:00Z",
        fecha_fin: "2025-11-20T23:00:00Z",
        descripcion: "Celebración de matrimonio con cena y baile",
        organizador_id: 2,
        creado_en: now,
      },
      {
        id: 3,
        nombre: "Reunión Corporativa Anual",
        tipo: "corporativo",
        fecha_inicio: "2025-12-10T08:00:00Z",
        fecha_fin: "2025-12-10T17:00:00Z",
        descripcion:
          "Reunión anual de la empresa con presentaciones y networking",
        organizador_id: 1,
        creado_en: now,
      },
    ];
    this.currentId = 4;
  }

  // Callbacks
  findByOrganizadorIdCallback(
    organizadorId: number,
    callback: (error: Error | null, data?: Evento[]) => void
  ): void {
    setTimeout(() => {
      try {
        const eventos = this.data.filter(
          (e) => e.organizador_id === organizadorId
        );
        callback(null, eventos);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  findByTipoCallback(
    tipo: string,
    callback: (error: Error | null, data?: Evento[]) => void
  ): void {
    setTimeout(() => {
      try {
        const eventos = this.data.filter((e) => e.tipo === tipo);
        callback(null, eventos);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  // Promises
  async findByOrganizadorIdPromise(organizadorId: number): Promise<Evento[]> {
    await this.simulateDelay();
    return this.data.filter((e) => e.organizador_id === organizadorId);
  }

  async findByTipoPromise(tipo: string): Promise<Evento[]> {
    await this.simulateDelay();
    return this.data.filter((e) => e.tipo === tipo);
  }

  // Async/Await
  async findByOrganizadorIdAsync(organizadorId: number): Promise<Evento[]> {
    return await this.findByOrganizadorIdPromise(organizadorId);
  }

  async findByTipoAsync(tipo: string): Promise<Evento[]> {
    return await this.findByTipoPromise(tipo);
  }
}
