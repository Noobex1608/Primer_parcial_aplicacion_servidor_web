import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'Evento con locales cercanos o en la misma ciudad' })
export class EventoWithLocals {
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

  @Field(() => [LocalSummary])
  locales: LocalSummary[];
}

import { LocalSummary } from './servicio-with-local.entity';
