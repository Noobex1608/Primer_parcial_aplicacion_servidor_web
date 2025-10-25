import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entidades
import { Blog } from './entities/Blog';
import { Factura, DetalleFactura } from './entities/Factura';
import { Notificacion } from './entities/Notificacion';
import { Pago, MetodoPago } from './entities/Pago';
import { Reporte } from './entities/Reporte';
import { Reserva, ReservaMesaAsignacion, ReservaServicio } from './entities/Reserva';

// Controladores
import { BlogController } from './controllers/blog.controller';
import { FacturaController } from './controllers/factura.controller';
import { NotificacionController } from './controllers/notificacion.controller';
import { PagoController } from './controllers/pago.controller';
import { ReporteController } from './controllers/reporte.controller';
import { ReservaController } from './controllers/reserva.controller';

// Servicios
import { BlogService } from './services/blog.service';
import { FacturaService } from './services/factura.service';
import { NotificacionService } from './services/notificacion.service';
import { PagoService } from './services/pago.service';
import { ReporteService } from './services/reporte.service';
import { ReservaService } from './services/reserva.service';

// Servicios heredados
import { TransaccionalService } from './transaccional.service';
import { TransaccionalController } from './transaccional.controller';

/**
 * Módulo Transaccional - Gestiona las entidades transaccionales del sistema
 * Incluye: Blogs, Facturas, Notificaciones, Pagos, Reportes y Reservas
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Blog,
      Factura,
      DetalleFactura,
      Notificacion,
      Pago,
      MetodoPago,
      Reporte,
      Reserva,
      ReservaMesaAsignacion,
      ReservaServicio,
    ]),
  ],
  controllers: [
    TransaccionalController,
    BlogController,
    FacturaController,
    NotificacionController,
    PagoController,
    ReporteController,
    ReservaController,
  ],
  providers: [
    TransaccionalService,
    BlogService,
    FacturaService,
    NotificacionService,
    PagoService,
    ReporteService,
    ReservaService,
  ],
  exports: [
    BlogService,
    FacturaService,
    NotificacionService,
    PagoService,
    ReporteService,
    ReservaService,
  ],
})
export class TransaccionalModule {}
