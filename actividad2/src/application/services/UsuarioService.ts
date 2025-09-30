import { Usuario } from "../../domain/interfaces/Usuario";
import { UsuarioRepository } from "../../domain/repositories/UsuarioRepository";

export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}

  // Servicios con Callbacks
  autenticarUsuarioCallback(
    email: string,
    contraseña: string,
    callback: (error: Error | null, usuario?: Usuario) => void
  ): void {
    this.usuarioRepository.findByEmailCallback(email, (error, usuario) => {
      if (error) {
        callback(error);
        return;
      }

      if (!usuario || usuario.contraseña !== contraseña) {
        callback(new Error("Credenciales inválidas"));
        return;
      }

      callback(null, usuario);
    });
  }

  crearUsuarioCallback(
    datosUsuario: Omit<Usuario, "id">,
    callback: (error: Error | null, usuario?: Usuario) => void
  ): void {
    // Verificar que el email no exista
    this.usuarioRepository.findByEmailCallback(
      datosUsuario.email,
      (error, usuarioExistente) => {
        if (error) {
          callback(error);
          return;
        }

        if (usuarioExistente) {
          callback(new Error("El email ya está registrado"));
          return;
        }

        // Crear el usuario
        this.usuarioRepository.createCallback(datosUsuario, callback);
      }
    );
  }

  // Servicios con Promises
  async autenticarUsuarioPromise(
    email: string,
    contraseña: string
  ): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findByEmailPromise(email);

    if (!usuario || usuario.contraseña !== contraseña) {
      throw new Error("Credenciales inválidas");
    }

    return usuario;
  }

  async crearUsuarioPromise(
    datosUsuario: Omit<Usuario, "id">
  ): Promise<Usuario> {
    const usuarioExistente = await this.usuarioRepository.findByEmailPromise(
      datosUsuario.email
    );

    if (usuarioExistente) {
      throw new Error("El email ya está registrado");
    }

    return await this.usuarioRepository.createPromise(datosUsuario);
  }

  async obtenerTodosLosUsuariosPromise(): Promise<Usuario[]> {
    return await this.usuarioRepository.findAllPromise();
  }

  // Servicios con Async/Await
  async autenticarUsuarioAsync(
    email: string,
    contraseña: string
  ): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findByEmailAsync(email);

    if (!usuario || usuario.contraseña !== contraseña) {
      throw new Error("Credenciales inválidas");
    }

    return usuario;
  }

  async crearUsuarioAsync(datosUsuario: Omit<Usuario, "id">): Promise<Usuario> {
    const usuarioExistente = await this.usuarioRepository.findByEmailAsync(
      datosUsuario.email
    );

    if (usuarioExistente) {
      throw new Error("El email ya está registrado");
    }

    return await this.usuarioRepository.createAsync(datosUsuario);
  }

  async obtenerTodosLosUsuariosAsync(): Promise<Usuario[]> {
    return await this.usuarioRepository.findAllAsync();
  }

  async actualizarUsuarioAsync(
    id: number,
    datosActualizacion: Partial<Usuario>
  ): Promise<Usuario | null> {
    return await this.usuarioRepository.updateAsync(id, datosActualizacion);
  }

  async eliminarUsuarioAsync(id: number): Promise<boolean> {
    return await this.usuarioRepository.deleteAsync(id);
  }
}
