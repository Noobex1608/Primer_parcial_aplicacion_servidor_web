import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType({ description: 'Cliente con sus reservas filtradas y ordenadas' })
export class ClienteConReservas {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  email: string;

  @Field()
  telefono: string;

  @Field(() => Int, { description: 'Total de reservas del cliente' })
  totalReservas: number;

  @Field(() => [ReservaDetalle], { description: 'Últimas reservas del cliente' })
  reservas: ReservaDetalle[];
}

@ObjectType()
export class ReservaDetalle {
  @Field(() => Int)
  id: number;

  @Field()
  fecha: string;

  @Field()
  estado: string;

  @Field(() => Float)
  monto: number;

  @Field(() => Int, { nullable: true })
  localId?: number;
}
