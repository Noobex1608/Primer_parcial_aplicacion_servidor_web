import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'Análisis de clientes agrupados por ciudad' })
export class ClientePorCiudad {
  @Field()
  ciudad: string;

  @Field(() => Int)
  totalClientes: number;

  @Field(() => Int)
  totalLocales: number;

  @Field(() => [ClienteInfo])
  clientes: ClienteInfo[];

  @Field(() => [LocalInfo])
  locales: LocalInfo[];
}

@ObjectType()
export class ClienteInfo {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  email: string;
}

@ObjectType()
export class LocalInfo {
  @Field(() => Int)
  id: number;

  @Field()
  nombre: string;

  @Field()
  ciudad: string;
}
