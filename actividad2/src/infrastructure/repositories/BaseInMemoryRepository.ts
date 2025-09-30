export abstract class BaseInMemoryRepository<T extends { id: number }> {
  protected data: T[] = [];
  protected currentId = 1;

  // Simulación de latencia de red
  protected simulateDelay(ms: number = 100): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  protected generateId(): number {
    return this.currentId++;
  }

  protected findById(id: number): T | undefined {
    return this.data.find((item) => item.id === id);
  }

  protected findIndex(id: number): number {
    return this.data.findIndex((item) => item.id === id);
  }

  // Callbacks - simulando operaciones asíncronas
  findAllCallback(callback: (error: Error | null, data?: T[]) => void): void {
    setTimeout(() => {
      try {
        callback(null, [...this.data]);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  findByIdCallback(
    id: number,
    callback: (error: Error | null, data?: T) => void
  ): void {
    setTimeout(() => {
      try {
        const item = this.findById(id);
        callback(null, item);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  createCallback(
    entity: Omit<T, "id">,
    callback: (error: Error | null, data?: T) => void
  ): void {
    setTimeout(() => {
      try {
        const newEntity = { ...entity, id: this.generateId() } as T;
        this.data.push(newEntity);
        callback(null, newEntity);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  updateCallback(
    id: number,
    entity: Partial<T>,
    callback: (error: Error | null, data?: T) => void
  ): void {
    setTimeout(() => {
      try {
        const index = this.findIndex(id);
        if (index === -1) {
          callback(null, undefined);
          return;
        }
        this.data[index] = { ...this.data[index], ...entity } as T;
        callback(null, this.data[index]);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  deleteCallback(
    id: number,
    callback: (error: Error | null, success?: boolean) => void
  ): void {
    setTimeout(() => {
      try {
        const index = this.findIndex(id);
        if (index === -1) {
          callback(null, false);
          return;
        }
        this.data.splice(index, 1);
        callback(null, true);
      } catch (error) {
        callback(error as Error);
      }
    }, 100);
  }

  // Promises
  async findAllPromise(): Promise<T[]> {
    await this.simulateDelay();
    return [...this.data];
  }

  async findByIdPromise(id: number): Promise<T | null> {
    await this.simulateDelay();
    return this.findById(id) || null;
  }

  async createPromise(entity: Omit<T, "id">): Promise<T> {
    await this.simulateDelay();
    const newEntity = { ...entity, id: this.generateId() } as T;
    this.data.push(newEntity);
    return newEntity;
  }

  async updatePromise(id: number, entity: Partial<T>): Promise<T | null> {
    await this.simulateDelay();
    const index = this.findIndex(id);
    if (index === -1) return null;
    this.data[index] = { ...this.data[index], ...entity } as T;
    return this.data[index] || null;
  }

  async deletePromise(id: number): Promise<boolean> {
    await this.simulateDelay();
    const index = this.findIndex(id);
    if (index === -1) return false;
    this.data.splice(index, 1);
    return true;
  }

  // Async/Await (mismo comportamiento que Promises pero explícito)
  async findAllAsync(): Promise<T[]> {
    return await this.findAllPromise();
  }

  async findByIdAsync(id: number): Promise<T | null> {
    return await this.findByIdPromise(id);
  }

  async createAsync(entity: Omit<T, "id">): Promise<T> {
    return await this.createPromise(entity);
  }

  async updateAsync(id: number, entity: Partial<T>): Promise<T | null> {
    return await this.updatePromise(id, entity);
  }

  async deleteAsync(id: number): Promise<boolean> {
    return await this.deletePromise(id);
  }
}
