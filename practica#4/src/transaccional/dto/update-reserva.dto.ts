import { PartialType } from '@nestjs/mapped-types';
import { CreateReservaDto } from './create-reserva.dto';

/**
 * DTO para actualizar una reserva
 * Hereda de CreateReservaDto pero hace todas las propiedades opcionales
 */
export class UpdateReservaDto extends PartialType(CreateReservaDto) {}