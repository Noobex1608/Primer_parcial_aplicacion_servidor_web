import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType({ description: 'Servicio combinado con lista de locales relacionados' })
export class ServicioWithLocal {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field(() => Float)
  precio: number;

  @Field()
  tipo: string;

  @Field(() => [LocalSummary])
  locales: LocalSummary[];
}

@ObjectType()
export class LocalSummary {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  ciudad: string;
}
