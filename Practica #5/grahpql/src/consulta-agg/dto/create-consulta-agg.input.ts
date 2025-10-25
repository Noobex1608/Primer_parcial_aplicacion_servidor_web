import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateConsultaAggInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
