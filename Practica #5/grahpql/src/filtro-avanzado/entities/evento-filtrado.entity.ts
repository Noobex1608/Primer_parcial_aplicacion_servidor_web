import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'Evento filtrado con información de locales cercanos' })
export class EventoFiltrado {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  tipo: string;

  @Field()
  ubicacion: string;

  @Field()
  fecha_inicio: string;

  @Field()
  fecha_fin: string;

  @Field(() => Int, { description: 'Duración del evento en días' })
  duracionDias: number;

  @Field(() => Int, { description: 'Cantidad de locales cercanos' })
  cantidadLocalesCercanos: number;

  @Field(() => [LocalCercanoFiltro], { description: 'Locales cercanos al evento' })
  localesCercanos: LocalCercanoFiltro[];
}

@ObjectType()
export class LocalCercanoFiltro {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  ciudad: string;

  @Field()
  direccion: string;
}
