import { Blog } from "../../domain/interfaces/Blog";
import { BlogRepository } from "../../domain/repositories/BlogRepository";

export class BlogService {
  constructor(private blogRepository: BlogRepository) {}

  // Servicios con Callbacks
  crearBlogCallback(
    datosBlog: Omit<Blog, "id">,
    callback: (error: Error | null, blog?: Blog) => void
  ): void {
    this.blogRepository.createCallback(datosBlog, callback);
  }

  obtenerBlogPorIdCallback(
    id: number,
    callback: (error: Error | null, blog?: Blog) => void
  ): void {
    this.blogRepository.findByIdCallback(id, callback);
  }

  obtenerTodosLosBlogsCallback(
    callback: (error: Error | null, blogs?: Blog[]) => void
  ): void {
    this.blogRepository.findAllCallback(callback);
  }

  actualizarBlogCallback(
    id: number,
    datosActualizacion: Partial<Blog>,
    callback: (error: Error | null, blog?: Blog) => void
  ): void {
    this.blogRepository.updateCallback(id, datosActualizacion, callback);
  }

  eliminarBlogCallback(
    id: number,
    callback: (error: Error | null, eliminado?: boolean) => void
  ): void {
    this.blogRepository.deleteCallback(id, callback);
  }

  obtenerBlogsPorAutorCallback(
    autorId: number,
    callback: (error: Error | null, blogs?: Blog[]) => void
  ): void {
    this.blogRepository.findByAutorIdCallback(autorId, callback);
  }

  buscarBlogsPorTituloCallback(
    titulo: string,
    callback: (error: Error | null, blogs?: Blog[]) => void
  ): void {
    this.blogRepository.findByTituloCallback(titulo, callback);
  }

  // Servicios con Promesas
  async crearBlog(datosBlog: Omit<Blog, "id">): Promise<Blog> {
    return new Promise((resolve, reject) => {
      this.crearBlogCallback(datosBlog, (error: Error | null, blog?: Blog) => {
        if (error) reject(error);
        else resolve(blog!);
      });
    });
  }

  async obtenerBlogPorId(id: number): Promise<Blog | null> {
    return new Promise((resolve, reject) => {
      this.obtenerBlogPorIdCallback(id, (error: Error | null, blog?: Blog) => {
        if (error) reject(error);
        else resolve(blog || null);
      });
    });
  }

  async obtenerTodosLosBlogs(): Promise<Blog[]> {
    return new Promise((resolve, reject) => {
      this.obtenerTodosLosBlogsCallback(
        (error: Error | null, blogs?: Blog[]) => {
          if (error) reject(error);
          else resolve(blogs || []);
        }
      );
    });
  }

  async actualizarBlog(
    id: number,
    datosActualizacion: Partial<Blog>
  ): Promise<Blog> {
    return new Promise((resolve, reject) => {
      this.actualizarBlogCallback(
        id,
        datosActualizacion,
        (error: Error | null, blog?: Blog) => {
          if (error) reject(error);
          else resolve(blog!);
        }
      );
    });
  }

  async eliminarBlog(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.eliminarBlogCallback(
        id,
        (error: Error | null, eliminado?: boolean) => {
          if (error) reject(error);
          else resolve(eliminado || false);
        }
      );
    });
  }

  async obtenerBlogsPorAutor(autorId: number): Promise<Blog[]> {
    return new Promise((resolve, reject) => {
      this.obtenerBlogsPorAutorCallback(
        autorId,
        (error: Error | null, blogs?: Blog[]) => {
          if (error) reject(error);
          else resolve(blogs || []);
        }
      );
    });
  }

  async buscarBlogsPorTitulo(titulo: string): Promise<Blog[]> {
    return new Promise((resolve, reject) => {
      this.buscarBlogsPorTituloCallback(
        titulo,
        (error: Error | null, blogs?: Blog[]) => {
          if (error) reject(error);
          else resolve(blogs || []);
        }
      );
    });
  }

  // Métodos específicos del dominio
  async publicarBlog(
    administradorId: number,
    titulo: string,
    contenido: string,
    etiquetas?: string
  ): Promise<Blog> {
    const nuevoBlog: Omit<Blog, "id"> = {
      administrador_id: administradorId,
      titulo,
      contenido,
      publicado_en: new Date().toISOString(),
      actualizado_en: new Date().toISOString(),
    };

    if (etiquetas) {
      nuevoBlog.etiquetas = etiquetas;
    }

    return this.crearBlog(nuevoBlog);
  }

  async actualizarContenidoBlog(
    id: number,
    titulo?: string,
    contenido?: string,
    etiquetas?: string
  ): Promise<Blog> {
    const datosActualizacion: Partial<Blog> = {
      actualizado_en: new Date().toISOString(),
    };

    if (titulo) datosActualizacion.titulo = titulo;
    if (contenido) datosActualizacion.contenido = contenido;
    if (etiquetas) datosActualizacion.etiquetas = etiquetas;

    return this.actualizarBlog(id, datosActualizacion);
  }

  async obtenerBlogsRecientes(limite: number = 10): Promise<Blog[]> {
    const todosLosBlogs = await this.obtenerTodosLosBlogs();
    return todosLosBlogs
      .sort(
        (a, b) =>
          new Date(b.publicado_en).getTime() -
          new Date(a.publicado_en).getTime()
      )
      .slice(0, limite);
  }
}
