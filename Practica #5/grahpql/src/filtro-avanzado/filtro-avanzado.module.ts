import { Module } from '@nestjs/common';
import { FiltroAvanzadoService } from './filtro-avanzado.service';
import { FiltroAvanzadoResolver } from './filtro-avanzado.resolver';
import { HttpFiltroService } from './services/http-filtro.service';

@Module({
  providers: [FiltroAvanzadoResolver, FiltroAvanzadoService, HttpFiltroService],
  exports: [FiltroAvanzadoService],
})
export class FiltroAvanzadoModule {}
