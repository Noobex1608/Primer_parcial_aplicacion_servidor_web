import { BlogService } from "./application/services/BlogService";
import { ClienteService } from "./application/services/ClienteService";
import { DisponibilidadService } from "./application/services/DisponibilidadService";
import { EventoService } from "./application/services/EventoService";
import { FacturaService } from "./application/services/FacturaService";
import { LocalService } from "./application/services/LocalService";
import { NotificacionService } from "./application/services/NotificacionService";
import { PagoService } from "./application/services/PagoService";
import { ReporteService } from "./application/services/ReporteService";
import { ReservaService } from "./application/services/ReservaService";
import { ServicioService } from "./application/services/ServicioService";
import { UsuarioService } from "./application/services/UsuarioService";

import { BlogInMemoryRepository } from "./infrastructure/repositories/BlogInMemoryRepository";
import { ClienteInMemoryRepository } from "./infrastructure/repositories/ClienteInMemoryRepository";
import { DisponibilidadInMemoryRepository } from "./infrastructure/repositories/DisponibilidadInMemoryRepository";
import { EventoInMemoryRepository } from "./infrastructure/repositories/EventoInMemoryRepository";
import { FacturaInMemoryRepository } from "./infrastructure/repositories/FacturaInMemoryRepository";
import { LocalInMemoryRepository } from "./infrastructure/repositories/LocalInMemoryRepository";
import { NotificacionInMemoryRepository } from "./infrastructure/repositories/NotificacionInMemoryRepository";
import { PagoInMemoryRepository } from "./infrastructure/repositories/PagoInMemoryRepository";
import { ReporteInMemoryRepository } from "./infrastructure/repositories/ReporteInMemoryRepository";
import { ReservaInMemoryRepository } from "./infrastructure/repositories/ReservaInMemoryRepository";
import { ServicioInMemoryRepository } from "./infrastructure/repositories/ServicioInMemoryRepository";
import { UsuarioInMemoryRepository } from "./infrastructure/repositories/UsuarioInMemoryRepository";

class EventManagementSystem {
  private usuarioService: UsuarioService;
  private servicioService: ServicioService;
  private eventoService: EventoService;
  private clienteService: ClienteService;
  private localService: LocalService;
  private reservaService: ReservaService;
  private facturaService: FacturaService;
  private pagoService: PagoService;
  private notificacionService: NotificacionService;
  private reporteService: ReporteService;
  private blogService: BlogService;
  private disponibilidadService: DisponibilidadService;

  constructor() {
    const usuarioRepository = new UsuarioInMemoryRepository();
    const servicioRepository = new ServicioInMemoryRepository();
    const clienteRepository = new ClienteInMemoryRepository();
    const eventoRepository = new EventoInMemoryRepository();
    const localRepository = new LocalInMemoryRepository();
    const reservaRepository = new ReservaInMemoryRepository();
    const facturaRepository = new FacturaInMemoryRepository();
    const pagoRepository = new PagoInMemoryRepository();
    const notificacionRepository = new NotificacionInMemoryRepository();
    const reporteRepository = new ReporteInMemoryRepository();
    const blogRepository = new BlogInMemoryRepository();
    const disponibilidadRepository = new DisponibilidadInMemoryRepository();

    this.usuarioService = new UsuarioService(usuarioRepository);
    this.servicioService = new ServicioService(servicioRepository);
    this.eventoService = new EventoService(eventoRepository);
    this.clienteService = new ClienteService(clienteRepository);
    this.localService = new LocalService(localRepository);
    this.reservaService = new ReservaService(reservaRepository);
    this.facturaService = new FacturaService(facturaRepository);
    this.pagoService = new PagoService(pagoRepository);
    this.notificacionService = new NotificacionService(notificacionRepository);
    this.reporteService = new ReporteService(reporteRepository);
    this.blogService = new BlogService(blogRepository);
    this.disponibilidadService = new DisponibilidadService(
      disponibilidadRepository
    );
  }

  async pruebasConCallbacks(): Promise<void> {
    console.log("\n === PRUEBAS CON CALLBACKS ===");

    return new Promise((resolve) => {
      console.log("\n1. Autenticación de usuario (Callback):");
      this.usuarioService.autenticarUsuarioCallback(
        "admin@restaurant.com",
        "admin123",
        (error, usuario) => {
          if (error) {
            console.error(" Error:", error.message);
          } else {
            console.log(" Usuario autenticado:", usuario?.nombre);
          }

          console.log("\n2. Crear nuevo usuario (Callback):");

          console.log("\n2. Crear nuevo usuario (Callback):");
          const nuevoUsuario = {
            nombre: "Carlos Rodriguez",
            email: "carlos@email.com",
            contraseña: "carlos123",
            rol: "cliente" as const,
            telefono: "444555666",
            creado_en: new Date().toISOString(),
            actualizado_en: new Date().toISOString(),
          };

          this.usuarioService.crearUsuarioCallback(
            nuevoUsuario,
            (error, usuarioCreado) => {
              if (error) {
                console.error(" Error:", error.message);
              } else {
                console.log(" Usuario creado:", usuarioCreado?.nombre);
              }

              console.log("\n3. Crear cliente (Callback):");
              const clienteData = {
                usuario_id: usuarioCreado?.id || 1,
                nombre_completo: "Carlos Rodriguez",
                email: "carlos@email.com",
                telefono: "444555666",
                fecha_registro: new Date().toISOString(),
                estado: true,
              };

              this.clienteService.crearClienteCallback(
                clienteData,
                (error, cliente) => {
                  if (error) {
                    console.error(" Error:", error.message);
                  } else {
                    console.log(" Cliente creado:", cliente?.nombre_completo);
                  }

                  console.log("\n4. Crear local (Callback):");
                  const localData = {
                    nombre: "Salon de Eventos Central",
                    direccion: "Av. Principal 123",
                    ciudad: "Ciudad Principal",
                    telefono: "555666777",
                    capacidad: 150,
                    creado_en: new Date().toISOString(),
                    actualizado_en: new Date().toISOString(),
                  };

                  this.localService.crearLocalCallback(
                    localData,
                    (error, local) => {
                      if (error) {
                        console.error(" Error:", error.message);
                      } else {
                        console.log(" Local creado:", local?.nombre);
                      }

                      console.log(
                        "\n5. Obtener servicios por tipo (Callback):"
                      );
                      this.servicioService.obtenerServiciosPorTipoCallback(
                        "catering",
                        (error, servicios) => {
                          if (error) {
                            console.error(" Error:", error.message);
                          } else {
                            console.log(
                              " Servicios de catering encontrados:",
                              servicios?.length
                            );
                            servicios?.forEach((s) =>
                              console.log(`   - ${s.nombre}: $${s.precio}`)
                            );
                          }
                          resolve();
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  }

  async pruebasConPromises(): Promise<void> {
    console.log("\n === PRUEBAS CON PROMISES (UPDATE operations) ===");

    try {
      console.log("\n1. Actualizar usuario (Promise):");
      const usuariosLista =
        await this.usuarioService.obtenerTodosLosUsuariosPromise();
      if (usuariosLista.length > 0 && usuariosLista[0]?.id) {
        const usuarioActualizar = {
          ...usuariosLista[0],
          nombre: "Usuario Actualizado",
        };
        const usuarioActualizado =
          await this.usuarioService.actualizarUsuarioAsync(
            usuarioActualizar.id,
            usuarioActualizar
          );
        console.log(" Usuario actualizado:", usuarioActualizado?.nombre);
      }

      console.log("\n2. Actualizar servicio (Promise):");
      const serviciosLista =
        await this.servicioService.obtenerTodosLosServiciosPromise();
      if (serviciosLista.length > 0 && serviciosLista[0]?.id) {
        const servicioActualizar = { ...serviciosLista[0], precio: 99.99 };
        const servicioActualizado =
          await this.servicioService.actualizarServicioAsync(
            servicioActualizar.id,
            servicioActualizar
          );
        console.log(
          " Servicio actualizado - precio:",
          servicioActualizado?.precio
        );
      }

      console.log("\n3. Actualizar cliente (Promise):");
      const clientesLista = await this.clienteService.obtenerTodosLosClientes();
      if (clientesLista.length > 0 && clientesLista[0]?.id) {
        const clienteActualizar = {
          ...clientesLista[0],
          telefono: "999888777",
        };
        const clienteActualizado = await this.clienteService.actualizarCliente(
          clienteActualizar.id,
          clienteActualizar
        );
        console.log(
          " Cliente actualizado - telefono:",
          clienteActualizado?.telefono
        );
      }

      console.log("\n4. Actualizar evento (Promise):");
      const eventosLista =
        await this.eventoService.obtenerTodosLosEventosPromise();
      if (eventosLista.length > 0 && eventosLista[0]?.id) {
        const eventoActualizar = {
          ...eventosLista[0],
          descripcion: "Evento Actualizado",
        };
        const eventoActualizado =
          await this.eventoService.actualizarEventoAsync(
            eventoActualizar.id,
            eventoActualizar
          );
        console.log(
          " Evento actualizado - descripcion:",
          eventoActualizado?.descripcion
        );
      }

      console.log("\n5. Actualizar reserva (Promise):");
      const reservasLista = await this.reservaService.obtenerTodasLasReservas();
      if (reservasLista.length > 0 && reservasLista[0]?.id) {
        const reservaActualizar = {
          ...reservasLista[0],
          estado: "confirmada" as const,
        };
        const reservaActualizada = await this.reservaService.actualizarReserva(
          reservaActualizar.id,
          reservaActualizar
        );
        console.log(
          " Reserva actualizada - estado:",
          reservaActualizada?.estado
        );
      }
    } catch (error) {
      console.error(" Error en async/await:", (error as Error).message);
    }
  }

  async pruebasConAsyncAwait(): Promise<void> {
    console.log("\n === PRUEBAS CON ASYNC/AWAIT (READ/DELETE operations) ===");

    try {
      console.log("\n1. Obtener todos los usuarios (Async/Await):");
      const usuariosActuales =
        await this.usuarioService.obtenerTodosLosUsuariosAsync();
      console.log(" Total usuarios:", usuariosActuales.length);
      usuariosActuales.forEach((u) =>
        console.log(`   - ${u.nombre} (${u.rol})`)
      );

      console.log("\n2. Obtener todos los servicios (Async/Await):");
      const serviciosActuales =
        await this.servicioService.obtenerTodosLosServiciosAsync();
      console.log(" Total servicios:", serviciosActuales.length);
      serviciosActuales.forEach((s) =>
        console.log(`   - ${s.nombre}: $${s.precio}`)
      );

      console.log("\n3. Obtener todos los clientes (Async/Await):");
      const clientesActuales =
        await this.clienteService.obtenerTodosLosClientes();
      console.log(" Total clientes:", clientesActuales.length);
      clientesActuales.forEach((c) => console.log(`   - ${c.nombre_completo}`));

      console.log("\n4. Obtener todos los eventos (Async/Await):");
      const eventosActuales =
        await this.eventoService.obtenerTodosLosEventosAsync();
      console.log(" Total eventos:", eventosActuales.length);
      eventosActuales.forEach((e) => console.log(`   - ${e.nombre}`));

      console.log("\n5. Obtener todas las reservas (Async/Await):");
      const reservasActuales =
        await this.reservaService.obtenerTodasLasReservas();
      console.log(" Total reservas:", reservasActuales.length);
      reservasActuales.forEach((r) =>
        console.log(`   - Reserva #${r.id} - ${r.estado}`)
      );

      console.log("\n6. Obtener todas las facturas (Async/Await):");
      const facturasActuales =
        await this.facturaService.obtenerTodasLasFacturas();
      console.log(" Total facturas:", facturasActuales.length);
      facturasActuales.forEach((f) =>
        console.log(`   - Factura #${f.id} - $${f.total}`)
      );

      console.log("\n7. Obtener todos los pagos (Async/Await):");
      const pagosActuales = await this.pagoService.obtenerTodosLosPagos();
      console.log(" Total pagos:", pagosActuales.length);
      pagosActuales.forEach((p) =>
        console.log(`   - Pago #${p.id} - ${p.estado}`)
      );

      console.log("\n8. Obtener todas las notificaciones (Async/Await):");
      const notificacionesActuales =
        await this.notificacionService.obtenerTodasLasNotificaciones();
      console.log(" Total notificaciones:", notificacionesActuales.length);
      notificacionesActuales.forEach((n) =>
        console.log(`   - ${n.tipo}: ${n.mensaje.substring(0, 30)}...`)
      );

      console.log("\n9. Obtener todos los reportes (Async/Await):");
      const reportesActuales =
        await this.reporteService.obtenerTodosLosReportes();
      console.log(" Total reportes:", reportesActuales.length);
      reportesActuales.forEach((r) =>
        console.log(`   - ${r.titulo || "Sin título"}`)
      );

      console.log("\n10. Obtener todos los blogs (Async/Await):");
      const blogsActuales = await this.blogService.obtenerTodosLosBlogs();
      console.log(" Total blogs:", blogsActuales.length);
      blogsActuales.forEach((b) => console.log(`   - ${b.titulo}`));

      console.log("\n11. Obtener todas las disponibilidades (Async/Await):");
      const disponibilidadesActuales =
        await this.disponibilidadService.obtenerTodasLasDisponibilidades();
      console.log(" Total disponibilidades:", disponibilidadesActuales.length);
      disponibilidadesActuales.forEach((d) =>
        console.log(`   - Local #${d.local_id}: ${d.estado}`)
      );

      console.log("\n12. Obtener todos los locales (Async/Await):");
      const localesActuales = await this.localService.obtenerTodosLosLocales();
      console.log(" Total locales:", localesActuales.length);
      localesActuales.forEach((l) =>
        console.log(`   - ${l.nombre} (capacidad: ${l.capacidad})`)
      );
    } catch (error) {
      console.error(" Error en async/await:", (error as Error).message);
    }
  }

  async pruebasDeErrores(): Promise<void> {
    console.log("\n  === PRUEBAS DE MANEJO DE ERRORES ===");

    try {
      console.log("\n1. Prueba de credenciales inválidas:");
      await this.usuarioService.autenticarUsuarioAsync(
        "usuario@inexistente.com",
        "password"
      );
    } catch (error) {
      console.log(" Error capturado correctamente:", (error as Error).message);
    }

    try {
      console.log("\n2. Prueba de email duplicado:");
      const usuarioDuplicado = {
        nombre: "Usuario Duplicado",
        email: "admin@restaurant.com",
        contraseña: "test123",
        rol: "cliente" as const,
        creado_en: new Date().toISOString(),
        actualizado_en: new Date().toISOString(),
      };
      await this.usuarioService.crearUsuarioAsync(usuarioDuplicado);
    } catch (error) {
      console.log(" Error capturado correctamente:", (error as Error).message);
    }

    try {
      console.log("\n3. Prueba de servicio con precio inválido:");
      const servicioInvalido = {
        nombre: "",
        precio: -10,
        creado_en: new Date().toISOString(),
        actualizado_en: new Date().toISOString(),
      };
      await this.servicioService.crearServicioAsync(servicioInvalido);
    } catch (error) {
      console.log(" Error capturado correctamente:", (error as Error).message);
    }
  }

  async ejecutarTodasLasPruebas(): Promise<void> {
    console.log(" === SISTEMA DE GESTIÓN DE LOCAL DE EVENTOS ===");
    console.log(
      " Ejecutando pruebas de arquitectura hexagonal con paradigmas asíncronos"
    );
    console.log(" Fecha:", new Date().toLocaleString());

    try {
      await this.pruebasConCallbacks();
      await this.pruebasConPromises();
      await this.pruebasConAsyncAwait();
      await this.pruebasDeErrores();

      console.log("\n === TODAS LAS PRUEBAS COMPLETADAS EXITOSAMENTE ===");
      console.log(" Se han probado los tres paradigmas asíncronos:");
      console.log("   - Callbacks: Para compatibilidad con APIs antiguas");
      console.log(
        "   - Promises: Para mejor manejo de errores y encadenamiento"
      );
      console.log("   - Async/Await: Para código más limpio y legible");
      console.log("\n Resumen de la arquitectura:");
      console.log("   - Capa de Dominio: Interfaces y repositorios");
      console.log("   - Capa de Aplicación: Servicios con lógica de negocio");
      console.log("   - Capa de Infraestructura: Repositorios en memoria");
      console.log("   - Principios SOLID aplicados");
      console.log("   - Arquitectura hexagonal implementada");
    } catch (error) {
      console.error(" Error general en las pruebas:", (error as Error).message);
    }
  }
}

async function main(): Promise<void> {
  const sistema = new EventManagementSystem();
  await sistema.ejecutarTodasLasPruebas();
}

if (require.main === module) {
  main().catch(console.error);
}

export { EventManagementSystem };
