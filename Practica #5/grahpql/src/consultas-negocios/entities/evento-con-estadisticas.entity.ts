import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'Evento con estadísticas calculadas como duración y locales cercanos' })
export class EventoConEstadisticas {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  tipo: string;

  @Field()
  fecha_inicio: string;

  @Field()
  fecha_fin: string;

  @Field()
  ubicacion: string;

  @Field(() => Int)
  duracionDias: number;

  @Field(() => Int)
  cantidadLocalesCercanos: number;

  @Field(() => [LocalDetalle])
  localesCercanos: LocalDetalle[];
}

@ObjectType()
export class LocalDetalle {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  ciudad: string;
}
