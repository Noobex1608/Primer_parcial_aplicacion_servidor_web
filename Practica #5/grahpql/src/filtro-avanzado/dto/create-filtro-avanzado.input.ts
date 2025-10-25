import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFiltroAvanzadoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
