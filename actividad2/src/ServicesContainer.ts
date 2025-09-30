import {
  BlogService,
  ClienteService,
  DisponibilidadService,
  EventoService,
  FacturaService,
  LocalService,
  NotificacionService,
  PagoService,
  ReporteService,
  ReservaService,
  ServicioService,
  UsuarioService,
} from "./application/services";

import {
  BlogInMemoryRepository,
  ClienteInMemoryRepository,
  DisponibilidadInMemoryRepository,
  EventoInMemoryRepository,
  FacturaInMemoryRepository,
  LocalInMemoryRepository,
  NotificacionInMemoryRepository,
  PagoInMemoryRepository,
  ReporteInMemoryRepository,
  ReservaInMemoryRepository,
  ServicioInMemoryRepository,
  UsuarioInMemoryRepository,
} from "./infrastructure/repositories";

// Clase principal que inicializa todos los servicios
export class ApplicationContainer {
  // Repositories
  private readonly usuarioRepository = new UsuarioInMemoryRepository();
  private readonly clienteRepository = new ClienteInMemoryRepository();
  private readonly localRepository = new LocalInMemoryRepository();
  private readonly reservaRepository = new ReservaInMemoryRepository();
  private readonly disponibilidadRepository =
    new DisponibilidadInMemoryRepository();
  private readonly eventoRepository = new EventoInMemoryRepository();
  private readonly servicioRepository = new ServicioInMemoryRepository();
  private readonly facturaRepository = new FacturaInMemoryRepository();
  private readonly pagoRepository = new PagoInMemoryRepository();
  private readonly notificacionRepository =
    new NotificacionInMemoryRepository();
  private readonly reporteRepository = new ReporteInMemoryRepository();
  private readonly blogRepository = new BlogInMemoryRepository();

  // Services
  public readonly usuarioService = new UsuarioService(this.usuarioRepository);
  public readonly clienteService = new ClienteService(this.clienteRepository);
  public readonly localService = new LocalService(this.localRepository);
  public readonly reservaService = new ReservaService(this.reservaRepository);
  public readonly disponibilidadService = new DisponibilidadService(
    this.disponibilidadRepository
  );
  public readonly eventoService = new EventoService(this.eventoRepository);
  public readonly servicioService = new ServicioService(
    this.servicioRepository
  );
  public readonly facturaService = new FacturaService(this.facturaRepository);
  public readonly pagoService = new PagoService(this.pagoRepository);
  public readonly notificacionService = new NotificacionService(
    this.notificacionRepository
  );
  public readonly reporteService = new ReporteService(this.reporteRepository);
  public readonly blogService = new BlogService(this.blogRepository);

  // Método de ejemplo para mostrar cómo usar los servicios
  async ejemploDeUso(): Promise<void> {
    try {
      console.log("=== Ejemplo de uso de todos los servicios ===");

      // 1. Crear un usuario
      const nuevoUsuario = await this.usuarioService.crearUsuarioAsync({
        nombre: "Juan Pérez",
        email: "juan@email.com",
        contraseña: "123456",
        rol: "cliente",
        telefono: "+1234567890",
        creado_en: new Date().toISOString(),
        actualizado_en: new Date().toISOString(),
      });
      console.log("Usuario creado:", nuevoUsuario);

      // 2. Crear un cliente basado en el usuario
      const nuevoCliente = await this.clienteService.crearCliente({
        usuario_id: nuevoUsuario.id,
        nombre_completo: "Juan Pérez",
        email: "juan@email.com",
        telefono: "+1234567890",
        direccion: "Calle 123",
        fecha_registro: new Date().toISOString(),
        estado: true,
      });
      console.log("Cliente creado:", nuevoCliente);

      // 3. Crear un local
      const nuevoLocal = await this.localService.crearLocal({
        nombre: "Restaurante El Buen Sabor",
        direccion: "Av. Principal 456",
        ciudad: "Ciudad Principal",
        telefono: "+0987654321",
        capacidad: 50,
        creado_en: new Date().toISOString(),
        actualizado_en: new Date().toISOString(),
      });
      console.log("Local creado:", nuevoLocal);

      // 4. Crear una reserva
      const nuevaReserva = await this.reservaService.crearReserva({
        cliente_id: nuevoCliente.id,
        local_id: nuevoLocal.id,
        fecha_reserva: new Date().toISOString(),
        cantidad_personas: 4,
        estado: "pendiente",
        creado_en: new Date().toISOString(),
        actualizado_en: new Date().toISOString(),
      });
      console.log("Reserva creada:", nuevaReserva);

      // 5. Enviar una notificación
      const notificacion = await this.notificacionService.enviarNotificacion(
        nuevoUsuario.id,
        "Su reserva ha sido confirmada",
        "mensaje"
      );
      console.log("Notificación enviada:", notificacion);

      // 6. Crear una factura
      const nuevaFactura = await this.facturaService.crearFactura({
        reserva_id: nuevaReserva.id,
        total: 150.0,
        metodo_pago: "tarjeta",
        fecha_emision: new Date().toISOString(),
        estado: "pendiente",
      });
      console.log("Factura creada:", nuevaFactura);

      // 7. Publicar un blog
      const nuevoBlog = await this.blogService.publicarBlog(
        1, // ID del administrador
        "Nuevos platos en el menú",
        "Descubre nuestros nuevos platos especiales...",
        "comida, menú, restaurante"
      );
      console.log("Blog publicado:", nuevoBlog);

      // 8. Generar un reporte
      const reporte = await this.reporteService.generarReporteReservas(
        "2024-01-01",
        "2024-12-31",
        1 // ID del administrador
      );
      console.log("Reporte generado:", reporte);

      console.log("=== Ejemplo completado exitosamente ===");
    } catch (error) {
      console.error("Error en el ejemplo:", error);
    }
  }

  // Método para obtener todos los servicios
  getAllServices() {
    return {
      usuarioService: this.usuarioService,
      clienteService: this.clienteService,
      localService: this.localService,
      reservaService: this.reservaService,
      disponibilidadService: this.disponibilidadService,
      eventoService: this.eventoService,
      servicioService: this.servicioService,
      facturaService: this.facturaService,
      pagoService: this.pagoService,
      notificacionService: this.notificacionService,
      reporteService: this.reporteService,
      blogService: this.blogService,
    };
  }
}

// Instancia singleton del contenedor de aplicación
export const app = new ApplicationContainer();

// Exportar todos los servicios para uso individual
export const {
  usuarioService,
  clienteService,
  localService,
  reservaService,
  disponibilidadService,
  eventoService,
  servicioService,
  facturaService,
  pagoService,
  notificacionService,
  reporteService,
  blogService,
} = app.getAllServices();
