import { Injectable, Logger } from '@nestjs/common';
import { CreateConsultasNegocioInput } from './dto/create-consultas-negocio.input';
import { UpdateConsultasNegocioInput } from './dto/update-consultas-negocio.input';
import { HttpNegocioService } from './services/http-negocio.service';
import { ClientePorCiudad } from './entities/cliente-por-ciudad.entity';
import { EventoConEstadisticas } from './entities/evento-con-estadisticas.entity';
import { AnalisisServicioTipo } from './entities/analisis-servicio-tipo.entity';

@Injectable()
export class ConsultasNegociosService {
  private readonly logger = new Logger(ConsultasNegociosService.name);

  constructor(private readonly httpNegocioService: HttpNegocioService) {}

  /**
   * Query 1: Obtener clientes agrupados por ciudad con estadísticas
   */
  async getClientesPorCiudad(): Promise<ClientePorCiudad[]> {
    return this.httpNegocioService.getClientesPorCiudad();
  }

  /**
   * Query 2: Obtener eventos con estadísticas calculadas (duración, locales cercanos)
   */
  async getEventosConEstadisticas(): Promise<EventoConEstadisticas[]> {
    return this.httpNegocioService.getEventosConEstadisticas();
  }

  /**
   * Query 3: Análisis de servicios por tipo con estadísticas de precios
   */
  async getAnalisisServiciosPorTipo(): Promise<AnalisisServicioTipo[]> {
    return this.httpNegocioService.getAnalisisServiciosPorTipo();
  }

  // Métodos legacy / CRUD (placeholders) para compatibilidad con el resolver existente
  create(createConsultasNegocioInput: CreateConsultasNegocioInput) {
    return 'This action adds a new consultasNegocio';
  }

  findAll() {
    return `This action returns all consultasNegocios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consultasNegocio`;
  }

  update(id: number, updateConsultasNegocioInput: UpdateConsultasNegocioInput) {
    return `This action updates a #${id} consultasNegocio`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultasNegocio`;
  }
}
