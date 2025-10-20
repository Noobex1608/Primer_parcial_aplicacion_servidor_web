import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entidades
import { Cliente } from './entities/Cliente';
import { Evento } from './entities/Evento';
import { Local } from './entities/Local';
import { Servicio } from './entities/Servicio';
import { Usuario } from './entities/Usuario';

// Controladores
import { ClienteController } from './controllers/cliente.controller';
import { EventoController } from './controllers/evento.controller';
import { LocalController } from './controllers/local.controller';
import { ServicioController } from './controllers/servicio.controller';
import { UsuarioController } from './controllers/usuario.controller';

// Servicios
import { ClienteService } from './services/cliente.service';
import { EventoService } from './services/evento.service';
import { LocalService } from './services/local.service';
import { ServicioService } from './services/servicio.service';
import { UsuarioService } from './services/usuario.service';

/**
 * Módulo de Negocio - Gestiona las entidades core del dominio
 * Incluye: Clientes, Eventos, Locales, Servicios y Usuarios
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente, Evento, Local, Servicio, Usuario]),
  ],
  controllers: [
    ClienteController,
    EventoController,
    LocalController,
    ServicioController,
    UsuarioController,
  ],
  providers: [
    ClienteService,
    EventoService,
    LocalService,
    ServicioService,
    UsuarioService,
  ],
  exports: [
    ClienteService,
    EventoService,
    LocalService,
    ServicioService,
    UsuarioService,
  ],
})
export class NegocioModule {}
