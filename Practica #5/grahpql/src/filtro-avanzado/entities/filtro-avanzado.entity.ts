import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FiltroAvanzado {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
