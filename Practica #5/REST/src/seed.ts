import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClienteService } from './negocio/services/cliente.service';
import { EventoService } from './negocio/services/evento.service';
import { LocalService } from './negocio/services/local.service';
import { ServicioService } from './negocio/services/servicio.service';
import { UsuarioService } from './negocio/services/usuario.service';
import { EstadosService } from './maestras/estados/estados.service';
import { TiposService } from './maestras/tipos/tipos.service';

// Importar servicios transaccionales
import { BlogService } from './transaccional/services/blog.service';
import { FacturaService } from './transaccional/services/factura.service';
import { NotificacionService } from './transaccional/services/notificacion.service';
import { PagoService } from './transaccional/services/pago.service';
import { ReporteService } from './transaccional/services/reporte.service';
import { ReservaService } from './transaccional/services/reserva.service';

async function seed() {
  console.log('🌱 Iniciando seed de datos de prueba...');

  const app = await NestFactory.createApplicationContext(AppModule);

  // Servicios de maestras
  const estadosService = app.get(EstadosService);
  const tiposService = app.get(TiposService);

  // Servicios de negocio
  const clienteService = app.get(ClienteService);
  const eventoService = app.get(EventoService);
  const localService = app.get(LocalService);
  const servicioService = app.get(ServicioService);
  const usuarioService = app.get(UsuarioService);

  // Servicios transaccionales
  const blogService = app.get(BlogService);
  const facturaService = app.get(FacturaService);
  const notificacionService = app.get(NotificacionService);
  const pagoService = app.get(PagoService);
  const reporteService = app.get(ReporteService);
  const reservaService = app.get(ReservaService);

  try {
    // ==========================================
    // DATOS MAESTROS
    // ==========================================

    // Crear Estados
    console.log('📝 Creando estados...');
    const estado1 = await estadosService.create({
      nombre: 'Confirmado',
      descripcion: 'Estado para elementos confirmados',
      codigo: 'CONF',
      activo: true,
    });

    const estado2 = await estadosService.create({
      nombre: 'Pendiente',
      descripcion: 'Estado para elementos pendientes',
      codigo: 'PEND',
      activo: true,
    });

    const estado3 = await estadosService.create({
      nombre: 'Cancelado',
      descripcion: 'Estado para elementos cancelados',
      codigo: 'CANC',
      activo: true,
    });

    const estado4 = await estadosService.create({
      nombre: 'Completado',
      descripcion: 'Estado para elementos completados',
      codigo: 'COMP',
      activo: true,
    });

    const estado5 = await estadosService.create({
      nombre: 'Vencido',
      descripcion: 'Estado para elementos vencidos',
      codigo: 'VENC',
      activo: true,
    });

    console.log(`✅ ${5} estados creados`);

    // Crear Tipos
    console.log('📝 Creando tipos...');
    const tipo1 = await tiposService.create({
      nombre: 'Boda',
      descripcion: 'Eventos de matrimonio y celebraciones nupciales',
      codigo: 'BOD',
      categoria: 'Evento',
      activo: true,
    });

    const tipo2 = await tiposService.create({
      nombre: 'Conferencia',
      descripcion: 'Eventos corporativos y de negocios',
      codigo: 'CONF',
      categoria: 'Evento',
      activo: true,
    });

    const tipo3 = await tiposService.create({
      nombre: 'Cumpleaños',
      descripcion: 'Celebraciones de cumpleaños',
      codigo: 'CUMP',
      categoria: 'Evento',
      activo: true,
    });

    const tipo4 = await tiposService.create({
      nombre: 'Catering',
      descripcion: 'Servicios de alimentación',
      codigo: 'CAT',
      categoria: 'Servicio',
      activo: true,
    });

    const tipo5 = await tiposService.create({
      nombre: 'Decoración',
      descripcion: 'Servicios de decoración y ambientación',
      codigo: 'DEC',
      categoria: 'Servicio',
      activo: true,
    });

    console.log(`✅ ${5} tipos creados`);

    // ==========================================
    // DATOS DE NEGOCIO
    // ==========================================

    // Crear Usuarios
    // Crear Usuarios
    console.log('📝 Creando usuarios...');
    const usuario1 = await usuarioService.create({
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      contraseña: 'password123',
      rol: 'admin',
      telefono: '555-1001',
      activo: true,
    });

    const usuario2 = await usuarioService.create({
      nombre: 'María García',
      email: 'maria.garcia@example.com',
      contraseña: 'password123',
      rol: 'usuario',
      telefono: '555-1002',
      activo: true,
    });

    const usuario3 = await usuarioService.create({
      nombre: 'Carlos López',
      email: 'carlos.lopez@example.com',
      contraseña: 'password123',
      rol: 'usuario',
      telefono: '555-1003',
      activo: true,
    });

    console.log(`✅ ${3} usuarios creados`);

    // Crear Clientes
    console.log('📝 Creando clientes...');
    const cliente1 = await clienteService.create({
      nombre_completo: 'Ana Martínez',
      email: 'ana.martinez@example.com',
      telefono: '555-0101',
      direccion: 'Calle Principal 123',
      activo: true,
    });

    const cliente2 = await clienteService.create({
      nombre_completo: 'Roberto Silva',
      email: 'roberto.silva@example.com',
      telefono: '555-0102',
      direccion: 'Avenida Central 456',
      activo: true,
    });

    const cliente3 = await clienteService.create({
      nombre_completo: 'Laura Torres',
      email: 'laura.torres@example.com',
      telefono: '555-0103',
      direccion: 'Plaza Mayor 789',
      activo: true,
    });

    console.log(`✅ ${3} clientes creados`);

    // Crear Locales
    console.log('📝 Creando locales...');
    const local1 = await localService.create({
      nombre: 'Salón de Eventos El Jardín',
      direccion: 'Calle de las Flores 100',
      ciudad: 'Madrid',
      telefono: '555-2001',
      capacidad: 200,
      activo: true,
      horario: 'Lun-Dom 9:00-23:00',
    });

    const local2 = await localService.create({
      nombre: 'Centro de Convenciones Premium',
      direccion: 'Avenida Empresarial 500',
      ciudad: 'Barcelona',
      telefono: '555-2002',
      capacidad: 500,
      activo: true,
      horario: 'Lun-Dom 8:00-24:00',
    });

    const local3 = await localService.create({
      nombre: 'Salón Íntimo La Terraza',
      direccion: 'Calle del Mirador 25',
      ciudad: 'Valencia',
      telefono: '555-2003',
      capacidad: 50,
      activo: true,
      horario: 'Vie-Dom 18:00-02:00',
    });

    console.log(`✅ ${3} locales creados`);

    // Crear Servicios
    console.log('📝 Creando servicios...');
    const servicio1 = await servicioService.create({
      nombre: 'Catering Gourmet',
      descripcion: 'Servicio completo de catering con menú personalizado',
      precio: 50.0,
      tipo: 'Catering',
      disponible: true,
      duracion_minutos: 240,
    });

    const servicio2 = await servicioService.create({
      nombre: 'Decoración Premium',
      descripcion: 'Decoración temática profesional para eventos',
      precio: 300.0,
      tipo: 'Decoración',
      disponible: true,
      duracion_minutos: 120,
    });

    const servicio3 = await servicioService.create({
      nombre: 'Fotografía y Video',
      descripcion: 'Cobertura completa de fotografía y video profesional',
      precio: 800.0,
      tipo: 'Multimedia',
      disponible: true,
      duracion_minutos: 480,
    });

    const servicio4 = await servicioService.create({
      nombre: 'DJ y Sonido',
      descripcion: 'Equipos de sonido profesional con DJ',
      precio: 400.0,
      tipo: 'Entretenimiento',
      disponible: true,
      duracion_minutos: 300,
    });

    const servicio5 = await servicioService.create({
      nombre: 'Animación Infantil',
      descripcion: 'Entretenimiento para niños con animadores',
      precio: 200.0,
      tipo: 'Entretenimiento',
      disponible: true,
      duracion_minutos: 180,
    });

    console.log(`✅ ${5} servicios creados`);

    // Crear Eventos
    console.log('📝 Creando eventos...');
    const evento1 = await eventoService.create({
      nombre: 'Boda de Ana y Roberto',
      tipo: 'Boda',
      fecha_inicio: '2025-11-15T16:00:00',
      fecha_fin: '2025-11-16T02:00:00',
      descripcion: 'Celebración de boda con 150 invitados',
      capacidad_maxima: 150,
      ubicacion: 'Salón de Eventos El Jardín',
    });

    const evento2 = await eventoService.create({
      nombre: 'Conferencia Empresarial 2025',
      tipo: 'Conferencia',
      fecha_inicio: '2025-12-05T09:00:00',
      fecha_fin: '2025-12-05T18:00:00',
      descripcion: 'Conferencia anual de la empresa con 400 asistentes',
      capacidad_maxima: 400,
      ubicacion: 'Centro de Convenciones Premium',
    });

    const evento3 = await eventoService.create({
      nombre: 'Cumpleaños de Laura',
      tipo: 'Cumpleaños',
      fecha_inicio: '2025-10-20T19:00:00',
      fecha_fin: '2025-10-21T01:00:00',
      descripcion: 'Fiesta de cumpleaños íntima con 30 personas',
      capacidad_maxima: 30,
      ubicacion: 'Salón Íntimo La Terraza',
    });

    const evento4 = await eventoService.create({
      nombre: 'Graduación Universitaria',
      tipo: 'Graduación',
      fecha_inicio: '2025-11-30T11:00:00',
      fecha_fin: '2025-11-30T17:00:00',
      descripcion: 'Celebración de graduación',
      capacidad_maxima: 300,
      ubicacion: 'Centro de Convenciones Premium',
    });

    console.log(`✅ ${4} eventos creados`);

    // ==========================================
    // DATOS TRANSACCIONALES
    // ==========================================

    // Crear Blogs
    console.log('📝 Creando blogs...');
    const blog1 = await blogService.create({
      administrador_id: 1,
      titulo: 'Guía para organizar el evento perfecto',
      contenido: 'En este artículo te compartimos los mejores consejos para organizar eventos memorables. Desde la selección del lugar hasta los detalles finales, cada aspecto cuenta para crear una experiencia única...',
      etiquetas: 'eventos,organizacion,consejos',
      publicado_en: '2024-10-01',
      actualizado_en: '2024-10-01',
    });

    const blog2 = await blogService.create({
      administrador_id: 1,
      titulo: 'Tendencias en decoración para bodas 2025',
      contenido: 'Las bodas de 2025 traen nuevas tendencias en decoración. Colores tierra, elementos naturales y tecnología integrada son las claves de este año...',
      etiquetas: 'bodas,decoracion,tendencias,2025',
      publicado_en: '2024-09-15',
      actualizado_en: '2024-09-20',
    });

    const blog3 = await blogService.create({
      administrador_id: 1,
      titulo: 'Cómo elegir el catering perfecto',
      contenido: 'La elección del catering es fundamental para el éxito de cualquier evento. Te contamos qué aspectos considerar y cómo tomar la mejor decisión...',
      etiquetas: 'catering,comida,eventos',
      publicado_en: '2024-08-30',
      actualizado_en: '2024-08-30',
    });

    console.log(`✅ ${3} blogs creados`);

    // Crear Reservas
    console.log('📝 Creando reservas...');
    const reserva1 = await reservaService.create({
      cliente_id: 1, // Ana Martínez
      evento_id: 1,  // Boda de Ana y Roberto
      numero_personas: 150,
      estado_id: 1, // Confirmada
      fecha_reserva: '2025-11-15T16:00:00',
      creado_en: '2024-10-01',
      actualizado_en: '2024-10-01',
    });

    const reserva2 = await reservaService.create({
      cliente_id: 2, // Roberto Silva
      evento_id: 2,  // Conferencia Empresarial
      numero_personas: 400,
      estado_id: 1, // Confirmada
      fecha_reserva: '2025-12-05T09:00:00',
      creado_en: '2024-09-15',
      actualizado_en: '2024-09-15',
    });

    const reserva3 = await reservaService.create({
      cliente_id: 3, // Laura Torres
      evento_id: 3,  // Cumpleaños de Laura
      numero_personas: 30,
      estado_id: 2, // Pendiente
      fecha_reserva: '2025-10-20T19:00:00',
      creado_en: '2024-09-01',
      actualizado_en: '2024-09-01',
    });

    console.log(`✅ ${3} reservas creadas`);

    // Crear Facturas
    console.log('📝 Creando facturas...');
    const factura1 = await facturaService.create({
      reserva_id: 1, // Boda de Ana y Roberto
      fecha_emision: '2024-10-02',
      estado_id: 1, // Pagada
      creado_en: '2024-10-02',
      actualizado_en: '2024-10-05',
    });

    const factura2 = await facturaService.create({
      reserva_id: 2, // Conferencia Empresarial
      fecha_emision: '2024-09-16',
      estado_id: 2, // Pendiente
      creado_en: '2024-09-16',
      actualizado_en: '2024-09-16',
    });

    const factura3 = await facturaService.create({
      reserva_id: 3, // Cumpleaños de Laura
      fecha_emision: '2024-09-02',
      estado_id: 3, // Vencida
      creado_en: '2024-09-02',
      actualizado_en: '2024-09-02',
    });

    console.log(`✅ ${3} facturas creadas`);

    // Crear Pagos
    console.log('📝 Creando pagos...');
    const pago1 = await pagoService.create({
      factura_id: 1, // Factura de la boda
      monto: 2500.00,
      metodo_pago: 'Tarjeta de Crédito',
      estado_id: 1, // Completado
      fecha_pago: '2024-10-05',
      creado_en: '2024-10-05',
    });

    const pago2 = await pagoService.create({
      factura_id: 1, // Segunda parte del pago de la boda
      monto: 1500.00,
      metodo_pago: 'Transferencia Bancaria',
      estado_id: 1, // Completado
      fecha_pago: '2024-10-10',
      creado_en: '2024-10-10',
    });

    const pago3 = await pagoService.create({
      factura_id: 2, // Pago parcial de la conferencia
      monto: 5000.00,
      metodo_pago: 'Transferencia Bancaria',
      estado_id: 2, // Procesando
      fecha_pago: '2024-09-20',
      creado_en: '2024-09-20',
    });

    console.log(`✅ ${3} pagos creados`);

    // Crear Notificaciones
    console.log('📝 Creando notificaciones...');
    const notificacion1 = await notificacionService.create({
      usuario_id: 1, // Juan Pérez
      titulo: 'Nuevo pago recibido',
      contenido: 'Se ha recibido un pago de $2,500.00 para la reserva de la boda de Ana y Roberto.',
      tipo: 'pago',
      enviado_en: '2024-10-05T10:30:00',
    });

    const notificacion2 = await notificacionService.create({
      usuario_id: 2, // María García
      titulo: 'Reserva confirmada',
      contenido: 'La reserva para la Conferencia Empresarial 2025 ha sido confirmada exitosamente.',
      tipo: 'reserva',
      enviado_en: '2024-09-15T14:20:00',
    });

    const notificacion3 = await notificacionService.create({
      usuario_id: 1, // Juan Pérez
      titulo: 'Factura vencida',
      contenido: 'La factura #3 para el cumpleaños de Laura Torres ha vencido. Se requiere seguimiento.',
      tipo: 'factura',
      enviado_en: '2024-10-10T09:00:00',
    });

    const notificacion4 = await notificacionService.create({
      usuario_id: 3, // Carlos López
      titulo: 'Nuevo blog publicado',
      contenido: 'Se ha publicado un nuevo artículo: "Guía para organizar el evento perfecto".',
      tipo: 'blog',
      enviado_en: '2024-10-01T16:45:00',
    });

    console.log(`✅ ${4} notificaciones creadas`);

    // Crear Reportes
    console.log('📝 Creando reportes...');
    const reporte1 = await reporteService.create({
      administrador_id: 1,
      titulo: 'Reporte Mensual de Ventas - Octubre 2024',
      descripcion: 'Análisis detallado de las ventas y reservas del mes de octubre, incluyendo tendencias y comparativas.',
      datos: JSON.stringify({
        ventas_totales: 15750.00,
        reservas_totales: 12,
        eventos_realizados: 8,
        clientes_nuevos: 5,
        servicios_mas_demandados: ['Catering Gourmet', 'Fotografía y Video', 'Decoración Premium']
      }),
      generado_en: '2024-10-31',
    });

    const reporte2 = await reporteService.create({
      administrador_id: 1,
      titulo: 'Análisis de Satisfacción del Cliente',
      descripcion: 'Reporte basado en encuestas de satisfacción de los últimos eventos realizados.',
      datos: JSON.stringify({
        calificacion_promedio: 4.7,
        eventos_evaluados: 15,
        aspectos_mejor_valorados: ['Calidad del servicio', 'Puntualidad', 'Atención al cliente'],
        areas_de_mejora: ['Variedad en el menú', 'Tiempo de respuesta']
      }),
      generado_en: '2024-10-25',
    });

    const reporte3 = await reporteService.create({
      administrador_id: 1,
      titulo: 'Proyección de Ingresos Q4 2024',
      descripcion: 'Estimación de ingresos para el último trimestre del año basada en reservas confirmadas.',
      datos: JSON.stringify({
        ingresos_proyectados: 45000.00,
        reservas_confirmadas: 25,
        eventos_pendientes: 18,
        crecimiento_estimado: '15%'
      }),
      generado_en: '2024-10-01',
    });

    console.log(`✅ ${3} reportes creados`);

    console.log('\n🎉 ¡Seed completado exitosamente!');
    console.log('\n📊 Resumen:');
    console.log(`   📋 MÓDULO MAESTRAS:`);
    console.log(`   - Estados: 5`);
    console.log(`   - Tipos: 5`);
    console.log(`   📋 MÓDULO DE NEGOCIO:`);
    console.log(`   - Usuarios: 3`);
    console.log(`   - Clientes: 3`);
    console.log(`   - Locales: 3`);
    console.log(`   - Servicios: 5`);
    console.log(`   - Eventos: 4`);
    console.log(`   📋 MÓDULO TRANSACCIONAL:`);
    console.log(`   - Blogs: 3`);
    console.log(`   - Reservas: 3`);
    console.log(`   - Facturas: 3`);
    console.log(`   - Pagos: 3`);
    console.log(`   - Notificaciones: 4`);
    console.log(`   - Reportes: 3`);
    console.log('\n💡 Puedes probar la API en http://localhost:3001');
    console.log('🔗 Endpoints disponibles:');
    console.log('   📋 Maestras: /estados, /tipos');
    console.log('   📋 Negocio: /clientes, /eventos, /locales, /servicios, /usuarios');
    console.log('   📋 Transaccional: /blogs, /reservas, /facturas, /pagos, /notificaciones, /reportes');
  } catch (error) {
    console.error('❌ Error durante el seed:', error);
  } finally {
    await app.close();
  }
}

seed();
