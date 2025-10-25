import { Module } from '@nestjs/common';
import { ConsultasNegociosService } from './consultas-negocios.service';
import { ConsultasNegociosResolver } from './consultas-negocios.resolver';
import { HttpNegocioService } from './services/http-negocio.service';

@Module({
  providers: [ConsultasNegociosResolver, ConsultasNegociosService, HttpNegocioService],
  exports: [ConsultasNegociosService],
})
export class ConsultasNegociosModule {}
