import { Blog } from "../interfaces/Blog";
import { BaseRepository } from "./BaseRepository";

export interface BlogRepository extends BaseRepository<Blog> {
  findByAutorIdCallback(
    autorId: number,
    callback: (error: Error | null, data?: Blog[]) => void
  ): void;
  findByAutorIdPromise(autorId: number): Promise<Blog[]>;
  findByAutorIdAsync(autorId: number): Promise<Blog[]>;

  findByTituloCallback(
    titulo: string,
    callback: (error: Error | null, data?: Blog[]) => void
  ): void;
  findByTituloPromise(titulo: string): Promise<Blog[]>;
  findByTituloAsync(titulo: string): Promise<Blog[]>;
}
