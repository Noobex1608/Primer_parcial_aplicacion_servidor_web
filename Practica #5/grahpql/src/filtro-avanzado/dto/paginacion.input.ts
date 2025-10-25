import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType({ description: 'Parámetros para búsqueda paginada de servicios' })
export class PaginacionInput {
  @Field(() => Int, { nullable: true, description: 'Número de página (inicia en 1)', defaultValue: 1 })
  pagina?: number;

  @Field(() => Int, { nullable: true, description: 'Cantidad de items por página', defaultValue: 10 })
  limite?: number;

  @Field({ nullable: true, description: 'Texto a buscar en nombre o tipo del servicio' })
  buscarTexto?: string;

  @Field({ nullable: true, description: 'Filtrar por tipo específico de servicio' })
  tipo?: string;

  @Field(() => Float, { nullable: true, description: 'Precio mínimo' })
  precioMin?: number;

  @Field(() => Float, { nullable: true, description: 'Precio máximo' })
  precioMax?: number;

  @Field({ nullable: true, description: 'Campo por el cual ordenar: nombre, precio', defaultValue: 'nombre' })
  ordenarPor?: string;

  @Field({ nullable: true, description: 'Dirección del ordenamiento: ASC o DESC', defaultValue: 'ASC' })
  ordenamiento?: string;
}
