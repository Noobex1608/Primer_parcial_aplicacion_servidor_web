import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { UsuarioService } from "./service/UsuarioService";
import { ClienteService } from "./service/ClienteService";
import { AdministradorService } from "./service/AdministradorService";
import { EstadoService } from "./service/EstadoService";
import { LocalService } from "./service/LocalService";
import { ServicioService } from "./service/ServicioService";
import { EventoService } from "./service/EventoService";
import { ReservaService } from "./service/ReservaService";
import { FacturaService } from "./service/FacturaService";
import { PagoService } from "./service/PagoService";
import { BlogService } from "./service/BlogService";
import { NotificacionService } from "./service/NotificacionService";
import { MesaService } from "./service/MesaService";

async function main() {
    try {
        // ========== 1. Inicializar conexión a la base de datos ==========
        console.log("🔌 Inicializando conexión a la base de datos...");
        await AppDataSource.initialize();
        console.log("✅ Conexión establecida exitosamente\n");

        // ========== 2. Instanciar servicios ==========
        const usuarioService = new UsuarioService();
        const clienteService = new ClienteService();
        const administradorService = new AdministradorService();
        const estadoService = new EstadoService();
        const localService = new LocalService();
        const servicioService = new ServicioService();
        const eventoService = new EventoService();
        const reservaService = new ReservaService();
        const facturaService = new FacturaService();
        const pagoService = new PagoService();
        const blogService = new BlogService();
        const notificacionService = new NotificacionService();
        const mesaService = new MesaService();

        console.log("========================================");
        console.log("🌱 INICIANDO SEED DE DATOS DE PRUEBA");
        console.log("========================================\n");

        // ========== 3. SEED: Crear Estados ==========
        console.log("📝 Creando Estados...");
        const estadoActivo = await estadoService.create({
            nombre: "Activo",
            tipo: "general"
        });
        const estadoPendiente = await estadoService.create({
            nombre: "Pendiente",
            tipo: "reserva"
        });
        const estadoConfirmado = await estadoService.create({
            nombre: "Confirmado",
            tipo: "reserva"
        });
        const estadoPagado = await estadoService.create({
            nombre: "Pagado",
            tipo: "pago"
        });
        console.log(`✅ Estados creados: ${estadoActivo.nombre}, ${estadoPendiente.nombre}, ${estadoConfirmado.nombre}\n`);

        // ========== 4. SEED: Crear Usuarios ==========
        console.log("👤 Creando Usuarios...");
        const usuario1 = await usuarioService.create({
            nombre: "Juan Pérez",
            email: "juan@example.com",
            contraseña: "password123",
            rol: "cliente",
            telefono: "555-0101"
        });
        
        const usuario2 = await usuarioService.create({
            nombre: "María García",
            email: "maria@example.com",
            contraseña: "password456",
            rol: "administrador",
            telefono: "555-0102"
        });

        const usuario3 = await usuarioService.create({
            nombre: "Carlos López",
            email: "carlos@example.com",
            contraseña: "password789",
            rol: "cliente",
            telefono: "555-0103"
        });
        console.log(`✅ Usuarios creados: ${usuario1.nombre}, ${usuario2.nombre}, ${usuario3.nombre}\n`);

        // ========== 5. SEED: Crear Cliente ==========
        console.log("🧑‍💼 Creando Clientes...");
        const cliente1 = await clienteService.create({
            usuario_id: usuario1.id,
            nombre_completo: "Juan Pérez Martínez",
            direccion: "Av. Principal 123",
            fecha_registro: new Date(),
            activo: true
        });

        const cliente2 = await clienteService.create({
            usuario_id: usuario3.id,
            nombre_completo: "Carlos López Sánchez",
            direccion: "Calle Secundaria 456",
            fecha_registro: new Date(),
            activo: true
        });
        console.log(`✅ Clientes creados: ${cliente1.nombre_completo}, ${cliente2.nombre_completo}\n`);

        // ========== 6. SEED: Crear Administrador ==========
        console.log("👨‍💼 Creando Administrador...");
        const admin = await administradorService.create({
            usuario_id: usuario2.id
        });
        console.log(`✅ Administrador creado para usuario: ${usuario2.nombre}\n`);

        // ========== 7. SEED: Crear Locales ==========
        console.log("🏢 Creando Locales...");
        const local1 = await localService.create({
            nombre: "Salón Elegante",
            direccion: "Av. Central 789",
            ciudad: "Ciudad Principal",
            telefono: "555-1000",
            capacidad: 200,
            estadoId: estadoActivo.id
        });

        const local2 = await localService.create({
            nombre: "Terraza Vista Mar",
            direccion: "Malecón 321",
            ciudad: "Ciudad Costera",
            telefono: "555-2000",
            capacidad: 150,
            estadoId: estadoActivo.id
        });
        console.log(`✅ Locales creados: ${local1.nombre}, ${local2.nombre}\n`);

        // ========== 8. SEED: Crear Servicios ==========
        console.log("🍽️ Creando Servicios...");
        const servicio1 = await servicioService.create({
            nombre: "Catering Premium",
            descripcion: "Servicio de catering con menú gourmet",
            precio: 50.00,
            tipo: "alimentacion",
            local_id: local1.id,
            estado_id: estadoActivo.id
        });

        const servicio2 = await servicioService.create({
            nombre: "Decoración Floral",
            descripcion: "Arreglos florales personalizados",
            precio: 150.00,
            tipo: "decoracion",
            local_id: local1.id,
            estado_id: estadoActivo.id
        });

        const servicio3 = await servicioService.create({
            nombre: "DJ Profesional",
            descripcion: "Ambientación musical para eventos",
            precio: 300.00,
            tipo: "entretenimiento",
            local_id: local2.id,
            estado_id: estadoActivo.id
        });
        console.log(`✅ Servicios creados: ${servicio1.nombre}, ${servicio2.nombre}, ${servicio3.nombre}\n`);

        // ========== 9. SEED: Crear Mesas ==========
        console.log("🪑 Creando Mesas...");
        const mesa1 = await mesaService.create({
            numero: 1,
            tipo: "redonda",
            estado_id: estadoActivo.id
        });

        const mesa2 = await mesaService.create({
            numero: 2,
            tipo: "rectangular",
            estado_id: estadoActivo.id
        });
        console.log(`✅ Mesas creadas: Mesa ${mesa1.numero}, Mesa ${mesa2.numero}\n`);

        // ========== 10. SEED: Crear Eventos ==========
        console.log("🎉 Creando Eventos...");
        const evento1 = await eventoService.create({
            nombre: "Boda de Verano",
            tipo: "boda",
            fecha_inicio: new Date("2025-07-15T18:00:00"),
            fecha_fin: new Date("2025-07-16T02:00:00"),
            descripcion: "Celebración de boda con 150 invitados",
            organizador_id: usuario1.id
        });

        const evento2 = await eventoService.create({
            nombre: "Conferencia Tech 2025",
            tipo: "corporativo",
            fecha_inicio: new Date("2025-08-20T09:00:00"),
            fecha_fin: new Date("2025-08-20T18:00:00"),
            descripcion: "Conferencia de tecnología y desarrollo",
            organizador_id: usuario3.id
        });
        console.log(`✅ Eventos creados: ${evento1.nombre}, ${evento2.nombre}\n`);

        // ========== 11. SEED: Crear Reservas ==========
        console.log("📅 Creando Reservas...");
        const reserva1 = await reservaService.create({
            cliente_id: cliente1.id,
            local_id: local1.id,
            evento_id: evento1.id,
            fecha_reserva: new Date("2025-07-15T18:00:00"),
            cantidad_personas: 150,
            estado_id: estadoConfirmado.id
        });

        const reserva2 = await reservaService.create({
            cliente_id: cliente2.id,
            local_id: local2.id,
            evento_id: evento2.id,
            fecha_reserva: new Date("2025-08-20T09:00:00"),
            cantidad_personas: 100,
            estado_id: estadoPendiente.id
        });
        console.log(`✅ Reservas creadas con IDs: ${reserva1.id}, ${reserva2.id}\n`);

        // ========== 12. SEED: Crear Facturas ==========
        console.log("🧾 Creando Facturas...");
        const factura1 = await facturaService.create({
            reserva_id: reserva1.id,
            fecha_emision: new Date(),
            estado_id: estadoPagado.id
        });

        const factura2 = await facturaService.create({
            reserva_id: reserva2.id,
            fecha_emision: new Date(),
            estado_id: estadoPendiente.id
        });
        console.log(`✅ Facturas creadas con IDs: ${factura1.id}, ${factura2.id}\n`);

        // ========== 13. SEED: Crear Métodos de Pago ==========
        console.log("💳 Creando Métodos de Pago...");
        const metodoPagoEfectivo = await AppDataSource.getRepository("MetodoPago").save({
            nombre: "Efectivo",
            descripcion: "Pago en efectivo"
        });
        const metodoPagoTarjeta = await AppDataSource.getRepository("MetodoPago").save({
            nombre: "Tarjeta de Crédito",
            descripcion: "Pago con tarjeta de crédito o débito"
        });
        console.log(`✅ Métodos de pago creados: ${metodoPagoEfectivo.nombre}, ${metodoPagoTarjeta.nombre}\n`);

        // ========== 14. SEED: Crear Pagos ==========
        console.log("💳 Creando Pagos...");
        const pago1 = await pagoService.create({
            factura_id: factura1.id,
            monto: 5000.00,
            fecha_pago: new Date(),
            metodo_pago_id: metodoPagoEfectivo.id,
            estado_id: estadoPagado.id
        });
        console.log(`✅ Pago creado: $${pago1.monto} para factura ${pago1.factura_id}\n`);

        // ========== 15. SEED: Crear Blogs ==========
        console.log("📝 Creando Blogs...");
        const blog1 = await blogService.create({
            administrador_id: admin.id,
            titulo: "Consejos para Organizar tu Evento",
            contenido: "Aquí te compartimos los mejores consejos para que tu evento sea inolvidable...",
            etiquetas: "eventos,tips,organizacion"
        });
        console.log(`✅ Blog creado: ${blog1.titulo}\n`);

        // ========== 15. SEED: Crear Notificaciones ==========
        console.log("🔔 Creando Notificaciones...");
        const notif1 = await notificacionService.create({
            usuario_id: usuario1.id,
            mensaje: "Tu reserva ha sido confirmada",
            tipo: "confirmacion",
            leida: false,
            enviada_en: new Date()
        });
        console.log(`✅ Notificación creada para usuario: ${usuario1.nombre}\n`);

        console.log("\n========================================");
        console.log("✅ SEED COMPLETADO EXITOSAMENTE");
        console.log("========================================\n");

        // ========== 16. PRUEBAS CRUD: findAll() ==========
        console.log("\n========================================");
        console.log("🧪 PROBANDO MÉTODO findAll()");
        console.log("========================================\n");

        const todosUsuarios = await usuarioService.findAll();
        console.log(`📋 Total de usuarios: ${todosUsuarios.length}`);
        todosUsuarios.forEach(u => console.log(`   - ${u.nombre} (${u.email})`));

        const todosLocales = await localService.findAll();
        console.log(`\n📋 Total de locales: ${todosLocales.length}`);
        todosLocales.forEach(l => console.log(`   - ${l.nombre} - ${l.ciudad}`));

        const todasReservas = await reservaService.findAll();
        console.log(`\n📋 Total de reservas: ${todasReservas.length}`);
        todasReservas.forEach(r => console.log(`   - Reserva #${r.id} - ${r.cantidad_personas} personas`));

        // ========== 15. PRUEBAS CRUD: findOne() ==========
        console.log("\n========================================");
        console.log("🔍 PROBANDO MÉTODO findOne()");
        console.log("========================================\n");

        const usuarioEncontrado = await usuarioService.findOne(usuario1.id);
        console.log(`👤 Usuario encontrado:`, {
            id: usuarioEncontrado?.id,
            nombre: usuarioEncontrado?.nombre,
            email: usuarioEncontrado?.email,
            rol: usuarioEncontrado?.rol
        });

        const localEncontrado = await localService.findOne(local1.id);
        console.log(`\n🏢 Local encontrado:`, {
            id: localEncontrado?.id,
            nombre: localEncontrado?.nombre,
            direccion: localEncontrado?.direccion,
            capacidad: localEncontrado?.capacidad
        });

        // ========== 16. PRUEBAS CRUD: update() ==========
        console.log("\n========================================");
        console.log("✏️ PROBANDO MÉTODO update()");
        console.log("========================================\n");

        console.log(`📝 Actualizando usuario ${usuario1.id}...`);
        const usuarioActualizado = await usuarioService.update(usuario1.id, {
            telefono: "555-9999"
        });
        console.log(`✅ Usuario actualizado - Nuevo teléfono: ${usuarioActualizado?.telefono}`);

        console.log(`\n📝 Actualizando servicio ${servicio1.id}...`);
        const servicioActualizado = await servicioService.update(servicio1.id, {
            precio: 60.00
        });
        console.log(`✅ Servicio actualizado - Nuevo precio: $${servicioActualizado?.precio}`);

        console.log(`\n📝 Actualizando reserva ${reserva2.id}...`);
        const reservaActualizada = await reservaService.update(reserva2.id, {
            estado_id: estadoConfirmado.id,
            cantidad_personas: 120
        });
        console.log(`✅ Reserva actualizada - Nueva cantidad: ${reservaActualizada?.cantidad_personas} personas`);

        // ========== 17. PRUEBAS CRUD: remove() ==========
        console.log("\n========================================");
        console.log("🗑️ PROBANDO MÉTODO remove()");
        console.log("========================================\n");

        // Crear una notificación temporal para eliminar
        const notifTemp = await notificacionService.create({
            usuario_id: usuario1.id,
            mensaje: "Notificación temporal",
            tipo: "info",
            leida: false,
            enviada_en: new Date()
        });
        console.log(`📝 Notificación temporal creada con ID: ${notifTemp.id}`);

        const eliminada = await notificacionService.remove(notifTemp.id);
        console.log(`✅ Notificación eliminada: ${eliminada ? 'Sí' : 'No'}`);

        // Verificar que fue eliminada
        const notifVerificacion = await notificacionService.findOne(notifTemp.id);
        console.log(`🔍 Verificación - Notificación existe: ${notifVerificacion ? 'Sí' : 'No'}\n`);

        // ========== 18. RESUMEN FINAL ==========
        console.log("\n========================================");
        console.log("📊 RESUMEN FINAL DE DATOS");
        console.log("========================================\n");

        const conteoUsuarios = await usuarioService.findAll();
        const conteoLocales = await localService.findAll();
        const conteoServicios = await servicioService.findAll();
        const conteoReservas = await reservaService.findAll();
        const conteoFacturas = await facturaService.findAll();
        const conteoPagos = await pagoService.findAll();
        const conteoEventos = await eventoService.findAll();
        const conteoBlogs = await blogService.findAll();

        console.log(`✅ Usuarios: ${conteoUsuarios.length}`);
        console.log(`✅ Locales: ${conteoLocales.length}`);
        console.log(`✅ Servicios: ${conteoServicios.length}`);
        console.log(`✅ Reservas: ${conteoReservas.length}`);
        console.log(`✅ Facturas: ${conteoFacturas.length}`);
        console.log(`✅ Pagos: ${conteoPagos.length}`);
        console.log(`✅ Eventos: ${conteoEventos.length}`);
        console.log(`✅ Blogs: ${conteoBlogs.length}`);

        console.log("\n========================================");
        console.log("✅ TODAS LAS PRUEBAS COMPLETADAS");
        console.log("========================================\n");

    } catch (error) {
        console.error("❌ Error durante la ejecución:", error);
    } finally {
        // Cerrar conexión
        if (AppDataSource.isInitialized) {
            await AppDataSource.destroy();
            console.log("🔌 Conexión a la base de datos cerrada");
        }
    }
}

// Ejecutar la función principal
main();
