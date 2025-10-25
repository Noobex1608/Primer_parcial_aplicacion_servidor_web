import { CreateConsultasNegocioInput } from './create-consultas-negocio.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConsultasNegocioInput extends PartialType(CreateConsultasNegocioInput) {
  @Field(() => Int)
  id: number;
}
