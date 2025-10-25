import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType({ description: 'Análisis de servicios agrupados por tipo con estadísticas de precios' })
export class AnalisisServicioTipo {
  @Field()
  tipo: string;

  @Field(() => Int)
  totalServicios: number;

  @Field(() => Float)
  precioPromedio: number;

  @Field(() => Float)
  precioMinimo: number;

  @Field(() => Float)
  precioMaximo: number;

  @Field(() => [ServicioInfo])
  servicios: ServicioInfo[];
}

@ObjectType()
export class ServicioInfo {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field(() => Float)
  precio: number;
}
