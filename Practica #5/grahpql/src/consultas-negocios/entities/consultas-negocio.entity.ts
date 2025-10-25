import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ConsultasNegocio {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
