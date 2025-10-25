import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';
import { Estado } from './entities/estado.entity';

/**
 * Módulo de Estados
 * Configura la entidad Estado con TypeORM y exporta el servicio para uso en otros módulos
 */
@Module({
  imports: [TypeOrmModule.forFeature([Estado])],
  controllers: [EstadosController],
  providers: [EstadosService],
  exports: [EstadosService], // Exportar el servicio para uso en otros módulos
})
export class EstadosModule {}
