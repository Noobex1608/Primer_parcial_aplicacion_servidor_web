import { Injectable, Logger } from '@nestjs/common';
import { CreateFiltroAvanzadoInput } from './dto/create-filtro-avanzado.input';
import { UpdateFiltroAvanzadoInput } from './dto/update-filtro-avanzado.input';
import { HttpFiltroService } from './services/http-filtro.service';
import { ClienteConReservas } from './entities/cliente-con-reservas.entity';
import { EventoFiltrado } from './entities/evento-filtrado.entity';
import { ServicioPaginado } from './entities/servicio-paginado.entity';
import { BuscarClienteInput } from './dto/buscar-cliente.input';
import { BuscarEventoInput } from './dto/buscar-evento.input';
import { PaginacionInput } from './dto/paginacion.input';

@Injectable()
export class FiltroAvanzadoService {
  private readonly logger = new Logger(FiltroAvanzadoService.name);

  constructor(private readonly httpFiltroService: HttpFiltroService) {}

  /**
   * Query 1: Buscar clientes por múltiples criterios con sus últimas reservas
   */
  async buscarClientesConReservas(filtro: BuscarClienteInput): Promise<ClienteConReservas[]> {
    return this.httpFiltroService.buscarClientesConReservas(filtro);
  }

  /**
   * Query 2: Buscar eventos con filtros complejos
   */
  async buscarEventosFiltrados(filtro: BuscarEventoInput): Promise<EventoFiltrado[]> {
    return this.httpFiltroService.buscarEventosFiltrados(filtro);
  }

  /**
   * Query 3: Buscar servicios con paginación
   */
  async buscarServiciosPaginados(paginacion: PaginacionInput): Promise<ServicioPaginado> {
    return this.httpFiltroService.buscarServiciosPaginados(paginacion);
  }

  // Métodos legacy / CRUD (placeholders)
  create(createFiltroAvanzadoInput: CreateFiltroAvanzadoInput) {
    return 'This action adds a new filtroAvanzado';
  }

  findAll() {
    return `This action returns all filtroAvanzado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filtroAvanzado`;
  }

  update(id: number, updateFiltroAvanzadoInput: UpdateFiltroAvanzadoInput) {
    return `This action updates a #${id} filtroAvanzado`;
  }

  remove(id: number) {
    return `This action removes a #${id} filtroAvanzado`;
  }
}
