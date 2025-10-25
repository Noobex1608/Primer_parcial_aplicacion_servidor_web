import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateConsultasNegocioInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
