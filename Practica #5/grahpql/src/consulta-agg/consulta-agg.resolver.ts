import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ConsultaAggService } from './consulta-agg.service';
import { ConsultaAgg } from './entities/consulta-agg.entity';
import { CreateConsultaAggInput } from './dto/create-consulta-agg.input';
import { UpdateConsultaAggInput } from './dto/update-consulta-agg.input';
import { ServicioWithLocal, LocalSummary } from './entities/servicio-with-local.entity';
import { EventoWithLocals } from './entities/evento-with-local.entity';
import { ResumenCiudad } from './entities/resumen-ciudad.entity';

@Resolver(() => ConsultaAgg)
export class ConsultaAggResolver {
  constructor(private readonly consultaAggService: ConsultaAggService) {}

  @Mutation(() => ConsultaAgg)
  createConsultaAgg(@Args('createConsultaAggInput') createConsultaAggInput: CreateConsultaAggInput) {
    return this.consultaAggService.create(createConsultaAggInput);
  }

  @Query(() => [ConsultaAgg], { name: 'consultaAgg' })
  findAll() {
    return this.consultaAggService.findAll();
  }

  @Query(() => ConsultaAgg, { name: 'consultaAgg' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.consultaAggService.findOne(id);
  }

  @Mutation(() => ConsultaAgg)
  updateConsultaAgg(@Args('updateConsultaAggInput') updateConsultaAggInput: UpdateConsultaAggInput) {
    return this.consultaAggService.update(updateConsultaAggInput.id, updateConsultaAggInput);
  }

  @Mutation(() => ConsultaAgg)
  removeConsultaAgg(@Args('id', { type: () => Int }) id: number) {
    return this.consultaAggService.remove(id);
  }

  /**
   * Query agregada: Top servicios con lista de locales relacionados.
   * Ejemplo: obtener los 5 servicios más caros y mostrar locales.
   */
  @Query(() => [ServicioWithLocal], { name: 'topServiciosConLocales' })
  topServiciosConLocales(@Args('limit', { type: () => Int, nullable: true }) limit?: number) {
    return this.consultaAggService.getTopServiciosConLocales(limit || 5);
  }

  /**
   * Query agregada: Eventos filtrados por ciudad y locales en esa ciudad.
   */
  @Query(() => [EventoWithLocals], { name: 'eventosPorCiudad' })
  eventosPorCiudad(@Args('ciudad', { type: () => String, nullable: true }) ciudad?: string) {
    return this.consultaAggService.getEventosPorCiudad(ciudad || '');
  }

  /**
   * Query agregada: Resumen de negocios y servicios por ciudad.
   */
  @Query(() => [ResumenCiudad], { name: 'resumenPorCiudad' })
  resumenPorCiudad() {
    return this.consultaAggService.getResumenPorCiudad();
  }

  // Field resolver de ejemplo: resuelve el campo `locales` de ServicioWithLocal
  @ResolveField(() => [LocalSummary], { name: 'locales' })
  resolveLocales(@Parent() servicio: ServicioWithLocal) {
    // En este ejemplo, el servicio ya devuelve la lista de locales en la propiedad `locales`.
    // Este ResolveField demuestra cómo separar la resolución si quisiéramos cargarla bajo demanda.
    return (servicio as any).locales || [];
  }
}
