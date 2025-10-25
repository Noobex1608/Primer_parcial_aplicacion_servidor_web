import { Injectable, Logger } from '@nestjs/common';
import { TopServicioConLocalInput } from './dto/top-servicio-con-local.input';
import { ServicioWithLocal } from './entities/servicio-with-local.entity';
import { EventoWithLocals } from './entities/evento-with-local.entity';
import { ResumenCiudad } from './entities/resumen-ciudad.entity';
import { HttpService } from './services/http.service';

@Injectable()
export class ConsultaAggService {
  private readonly logger = new Logger(ConsultaAggService.name);

  constructor(private readonly httpService: HttpService) {}

  async getTopServiciosConLocales(limit = 5): Promise<ServicioWithLocal[]> {
    return this.httpService.getTopServiciosConLocales(limit);
  }

  async getEventosPorCiudad(ciudad: string): Promise<EventoWithLocals[]> {
    return this.httpService.getEventosPorCiudad(ciudad);
  }

  async getResumenPorCiudad(): Promise<ResumenCiudad[]> {
    return this.httpService.getResumenPorCiudad();
  }

  // Métodos legacy / CRUD (placeholders) para compatibilidad con el resolver existente
  create(createConsultaAggInput: any) {
    return 'This action adds a new consultaAgg';
  }

  findAll() {
    return `This action returns all consultaAgg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consultaAgg`;
  }

  update(id: number, updateConsultaAggInput: any) {
    return `This action updates a #${id} consultaAgg`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultaAgg`;
  }
}

