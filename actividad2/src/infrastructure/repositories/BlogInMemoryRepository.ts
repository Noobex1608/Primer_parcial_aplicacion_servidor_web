import { Blog } from "../../domain/interfaces/Blog";
import { BlogRepository } from "../../domain/repositories/BlogRepository";
import { BaseInMemoryRepository } from "./BaseInMemoryRepository";

export class BlogInMemoryRepository
  extends BaseInMemoryRepository<Blog>
  implements BlogRepository
{
  findByAutorIdCallback(
    autorId: number,
    callback: (error: Error | null, data?: Blog[]) => void
  ): void {
    try {
      const blogs = this.data.filter((b) => b.administrador_id === autorId);
      callback(null, blogs);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByAutorIdPromise(autorId: number): Promise<Blog[]> {
    return new Promise((resolve, reject) => {
      this.findByAutorIdCallback(autorId, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByAutorIdAsync(autorId: number): Promise<Blog[]> {
    return this.findByAutorIdPromise(autorId);
  }

  findByTituloCallback(
    titulo: string,
    callback: (error: Error | null, data?: Blog[]) => void
  ): void {
    try {
      const blogs = this.data.filter((b) =>
        b.titulo.toLowerCase().includes(titulo.toLowerCase())
      );
      callback(null, blogs);
    } catch (error) {
      callback(error as Error);
    }
  }

  findByTituloPromise(titulo: string): Promise<Blog[]> {
    return new Promise((resolve, reject) => {
      this.findByTituloCallback(titulo, (error, data) => {
        if (error) reject(error);
        else resolve(data || []);
      });
    });
  }

  findByTituloAsync(titulo: string): Promise<Blog[]> {
    return this.findByTituloPromise(titulo);
  }
}
