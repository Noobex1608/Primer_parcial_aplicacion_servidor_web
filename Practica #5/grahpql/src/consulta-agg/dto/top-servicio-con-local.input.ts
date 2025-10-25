import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class TopServicioConLocalInput {
  @Field(() => Int, { description: 'Cantidad máxima de servicios a devolver', defaultValue: 5 })
  limit?: number;
}
