// Interfaz base para operaciones CRUD
export interface BaseRepository<T> {
  // Callbacks
  findAllCallback(callback: (error: Error | null, data?: T[]) => void): void;
  findByIdCallback(
    id: number,
    callback: (error: Error | null, data?: T) => void
  ): void;
  createCallback(
    entity: Omit<T, "id">,
    callback: (error: Error | null, data?: T) => void
  ): void;
  updateCallback(
    id: number,
    entity: Partial<T>,
    callback: (error: Error | null, data?: T) => void
  ): void;
  deleteCallback(
    id: number,
    callback: (error: Error | null, success?: boolean) => void
  ): void;

  // Promises
  findAllPromise(): Promise<T[]>;
  findByIdPromise(id: number): Promise<T | null>;
  createPromise(entity: Omit<T, "id">): Promise<T>;
  updatePromise(id: number, entity: Partial<T>): Promise<T | null>;
  deletePromise(id: number): Promise<boolean>;

  // Async/Await
  findAllAsync(): Promise<T[]>;
  findByIdAsync(id: number): Promise<T | null>;
  createAsync(entity: Omit<T, "id">): Promise<T>;
  updateAsync(id: number, entity: Partial<T>): Promise<T | null>;
  deleteAsync(id: number): Promise<boolean>;
}
