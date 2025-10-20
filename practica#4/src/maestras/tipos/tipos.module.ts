import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposService } from './tipos.service';
import { TiposController } from './tipos.controller';
import { Tipo } from './entities/tipo.entity';

/**
 * Módulo de Tipos
 * Configura la entidad Tipo con TypeORM y exporta el servicio para uso en otros módulos
 */
@Module({
  imports: [TypeOrmModule.forFeature([Tipo])],
  controllers: [TiposController],
  providers: [TiposService],
  exports: [TiposService], // Exportar el servicio para uso en otros módulos
})
export class TiposModule {}
