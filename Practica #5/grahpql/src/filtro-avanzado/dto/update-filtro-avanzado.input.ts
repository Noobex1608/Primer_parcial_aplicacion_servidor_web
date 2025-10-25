import { CreateFiltroAvanzadoInput } from './create-filtro-avanzado.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFiltroAvanzadoInput extends PartialType(CreateFiltroAvanzadoInput) {
  @Field(() => Int)
  id: number;
}
