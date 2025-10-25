import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class ServicioItem {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  tipo: string;

  @Field(() => Float)
  precio: number;

  @Field()
  descripcion: string;
}

@ObjectType()
export class MetadataPaginacion {
  @Field(() => Int, { description: 'Total de items que cumplen los filtros' })
  totalItems: number;

  @Field(() => Int, { description: 'Total de páginas disponibles' })
  totalPaginas: number;

  @Field(() => Int, { description: 'Página actual' })
  paginaActual: number;

  @Field(() => Int, { description: 'Items por página' })
  itemsPorPagina: number;

  @Field(() => Boolean, { description: 'Indica si hay página anterior' })
  tienePaginaAnterior: boolean;

  @Field(() => Boolean, { description: 'Indica si hay página siguiente' })
  tienePaginaSiguiente: boolean;
}

@ObjectType({ description: 'Resultado paginado de servicios con metadata' })
export class ServicioPaginado {
  @Field(() => [ServicioItem], { description: 'Lista de servicios de la página actual' })
  items: ServicioItem[];

  @Field(() => MetadataPaginacion, { description: 'Información de paginación' })
  metadata: MetadataPaginacion;
}
