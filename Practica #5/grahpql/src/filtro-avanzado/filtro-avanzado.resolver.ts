import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FiltroAvanzadoService } from './filtro-avanzado.service';
import { FiltroAvanzado } from './entities/filtro-avanzado.entity';
import { CreateFiltroAvanzadoInput } from './dto/create-filtro-avanzado.input';
import { UpdateFiltroAvanzadoInput } from './dto/update-filtro-avanzado.input';
import { ClienteConReservas } from './entities/cliente-con-reservas.entity';
import { EventoFiltrado } from './entities/evento-filtrado.entity';
import { ServicioPaginado } from './entities/servicio-paginado.entity';
import { BuscarClienteInput } from './dto/buscar-cliente.input';
import { BuscarEventoInput } from './dto/buscar-evento.input';
import { PaginacionInput } from './dto/paginacion.input';

@Resolver(() => FiltroAvanzado)
export class FiltroAvanzadoResolver {
  constructor(private readonly filtroAvanzadoService: FiltroAvanzadoService) {}


  @Query(() => [ClienteConReservas], {
    name: 'buscarClientesConReservas',
    description: 'Busca clientes con múltiples filtros y retorna sus últimas reservas ordenadas'
  })
  buscarClientesConReservas(
    @Args('filtro', { type: () => BuscarClienteInput, nullable: true, defaultValue: {} })
    filtro: BuscarClienteInput
  ) {
    return this.filtroAvanzadoService.buscarClientesConReservas(filtro);
  }


  @Query(() => [EventoFiltrado], {
    name: 'buscarEventosFiltrados',
    description: 'Busca eventos con filtros complejos de fecha, ubicación, tipo y duración'
  })
  buscarEventosFiltrados(
    @Args('filtro', { type: () => BuscarEventoInput, nullable: true, defaultValue: {} })
    filtro: BuscarEventoInput
  ) {
    return this.filtroAvanzadoService.buscarEventosFiltrados(filtro);
  }


  @Query(() => ServicioPaginado, {
    name: 'buscarServiciosPaginados',
    description: 'Busca servicios con paginación, filtros de precio, tipo y ordenamiento'
  })
  buscarServiciosPaginados(
    @Args('paginacion', { type: () => PaginacionInput, nullable: true, defaultValue: {} })
    paginacion: PaginacionInput
  ) {
    return this.filtroAvanzadoService.buscarServiciosPaginados(paginacion);
  }


  @Mutation(() => FiltroAvanzado)
  createFiltroAvanzado(@Args('createFiltroAvanzadoInput') createFiltroAvanzadoInput: CreateFiltroAvanzadoInput) {
    return this.filtroAvanzadoService.create(createFiltroAvanzadoInput);
  }

  @Mutation(() => FiltroAvanzado)
  updateFiltroAvanzado(@Args('updateFiltroAvanzadoInput') updateFiltroAvanzadoInput: UpdateFiltroAvanzadoInput) {
    return this.filtroAvanzadoService.update(updateFiltroAvanzadoInput.id, updateFiltroAvanzadoInput);
  }

  @Mutation(() => FiltroAvanzado)
  removeFiltroAvanzado(@Args('id', { type: () => Int }) id: number) {
    return this.filtroAvanzadoService.remove(id);
  }
}
