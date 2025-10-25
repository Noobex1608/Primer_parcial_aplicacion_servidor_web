import { CreateConsultaAggInput } from './create-consulta-agg.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConsultaAggInput extends PartialType(CreateConsultaAggInput) {
  @Field(() => Int)
  id: number;
}
