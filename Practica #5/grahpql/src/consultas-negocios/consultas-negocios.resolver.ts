import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConsultasNegociosService } from './consultas-negocios.service';
import { ConsultasNegocio } from './entities/consultas-negocio.entity';
import { ClientePorCiudad } from './entities/cliente-por-ciudad.entity';
import { EventoConEstadisticas } from './entities/evento-con-estadisticas.entity';
import { AnalisisServicioTipo } from './entities/analisis-servicio-tipo.entity';

@Resolver(() => ConsultasNegocio)
export class ConsultasNegociosResolver {
  constructor(private readonly consultasNegociosService: ConsultasNegociosService) {}


  @Query(() => [ClientePorCiudad], { 
    name: 'clientesPorCiudad',
    description: 'Obtiene clientes agrupados por ciudad con estadísticas de locales' 
  })
  clientesPorCiudad() {
    return this.consultasNegociosService.getClientesPorCiudad();
  }


  @Query(() => [EventoConEstadisticas], { 
    name: 'eventosConEstadisticas',
    description: 'Obtiene eventos con estadísticas calculadas como duración y locales cercanos' 
  })
  eventosConEstadisticas() {
    return this.consultasNegociosService.getEventosConEstadisticas();
  }

 
  @Query(() => [AnalisisServicioTipo], { 
    name: 'analisisServiciosPorTipo',
    description: 'Obtiene análisis de servicios agrupados por tipo con estadísticas de precios' 
  })
  analisisServiciosPorTipo() {
    return this.consultasNegociosService.getAnalisisServiciosPorTipo();
  }

}
