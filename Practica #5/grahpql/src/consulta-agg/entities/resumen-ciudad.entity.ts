import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'Resumen de negocios y servicios por ciudad' })
export class ResumenCiudad {
  @Field()
  ciudad: string;

  @Field(() => Int)
  totalLocales: number;

  @Field(() => Int)
  totalServicios: number;
}
