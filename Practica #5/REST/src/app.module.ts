import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NegocioModule } from './negocio/negocio.module';
import { EstadosModule } from './maestras/estados/estados.module';
import { TiposModule } from './maestras/tipos/tipos.module';
import { TransaccionalModule } from './transaccional/transaccional.module';
import { Estado } from './maestras/estados/entities/estado.entity';
import { Tipo } from './maestras/tipos/entities/tipo.entity';
import { Cliente } from './negocio/entities/Cliente';
import { Evento } from './negocio/entities/Evento';
import { Local } from './negocio/entities/Local';
import { Servicio } from './negocio/entities/Servicio';
import { Usuario } from './negocio/entities/Usuario';
import { Blog } from './transaccional/entities/Blog';
import { Factura, DetalleFactura } from './transaccional/entities/Factura';
import { Notificacion } from './transaccional/entities/Notificacion';
import { Pago, MetodoPago } from './transaccional/entities/Pago';
import { Reporte } from './transaccional/entities/Reporte';
import { Reserva, ReservaMesaAsignacion, ReservaServicio } from './transaccional/entities/Reserva';

/**
 * Módulo principal de la aplicación REST
 * Configura TypeORM con SQLite e importa todos los módulos de la aplicación
 */
@Module({
  imports: [
    // Configuración de HttpModule para consumir APIs REST
    HttpModule,
    // Configuración de TypeORM con SQLite
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Archivo de base de datos SQLite
      entities: [
        // Entidades de maestras
        Estado,
        Tipo,
        // Entidades de negocio
        Cliente,
        Evento,
        Local,
        Servicio,
        Usuario,
        // Entidades transaccionales
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
      ],
      synchronize: true, // Sincronizar automáticamente el esquema (solo para desarrollo)
      logging: true, // Habilitar logs de SQL para depuración
    }),
    // Módulos de maestras (REST API)
    EstadosModule,
    TiposModule,
    // Módulo de negocio
    NegocioModule,
    // Módulo transaccional
    TransaccionalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
