import { InputType, Field, Int } from '@nestjs/graphql';

@InputType({ description: 'Filtros para buscar clientes con múltiples criterios' })
export class BuscarClienteInput {
  @Field({ nullable: true, description: 'Buscar por nombre (coincidencia parcial)' })
  nombre?: string;

  @Field({ nullable: true, description: 'Buscar por email (coincidencia parcial)' })
  email?: string;

  @Field({ nullable: true, description: 'Buscar por teléfono (coincidencia parcial)' })
  telefono?: string;

  @Field({ nullable: true, description: 'Campo por el cual ordenar: nombre, totalReservas' })
  ordenarPor?: string;

  @Field({ nullable: true, description: 'Dirección del ordenamiento: ASC o DESC', defaultValue: 'DESC' })
  ordenamiento?: string;

  @Field(() => Int, { nullable: true, description: 'Límite de reservas a retornar por cliente', defaultValue: 5 })
  limiteReservas?: number;

  @Field({ nullable: true, description: 'Ordenar reservas por fecha: ASC o DESC', defaultValue: 'DESC' })
  ordenarReservasPor?: string;
}
