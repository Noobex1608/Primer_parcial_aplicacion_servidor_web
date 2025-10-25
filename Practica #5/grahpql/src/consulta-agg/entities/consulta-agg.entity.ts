import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ConsultaAgg {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
