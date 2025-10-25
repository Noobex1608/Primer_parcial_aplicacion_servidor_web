import { InputType, Field, Int } from '@nestjs/graphql';

@InputType({ description: 'Filtros complejos para buscar eventos' })
export class BuscarEventoInput {
  @Field({ nullable: true, description: 'Filtrar por tipo de evento (coincidencia parcial)' })
  tipo?: string;

  @Field({ nullable: true, description: 'Filtrar por ubicación (coincidencia parcial)' })
  ubicacion?: string;

  @Field({ nullable: true, description: 'Fecha de inicio mínima (ISO 8601)' })
  fechaDesde?: string;

  @Field({ nullable: true, description: 'Fecha de inicio máxima (ISO 8601)' })
  fechaHasta?: string;

  @Field(() => Int, { nullable: true, description: 'Duración mínima en días' })
  duracionMinimaDias?: number;

  @Field({ nullable: true, description: 'Campo por el cual ordenar: fecha, duracion, nombre' })
  ordenarPor?: string;

  @Field({ nullable: true, description: 'Dirección del ordenamiento: ASC o DESC', defaultValue: 'DESC' })
  ordenamiento?: string;
}
