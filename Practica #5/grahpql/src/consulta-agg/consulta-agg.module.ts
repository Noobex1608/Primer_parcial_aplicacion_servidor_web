import { Module } from '@nestjs/common';
import { ConsultaAggService } from './consulta-agg.service';
import { ConsultaAggResolver } from './consulta-agg.resolver';
import { HttpService } from './services/http.service';

@Module({
  providers: [ConsultaAggResolver, ConsultaAggService, HttpService],
})
export class ConsultaAggModule {}
