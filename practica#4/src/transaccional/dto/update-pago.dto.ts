import { PartialType } from '@nestjs/mapped-types';
import { CreatePagoDto } from './create-pago.dto';

/**
 * DTO para actualizar un pago
 * Hereda de CreatePagoDto pero hace todas las propiedades opcionales
 */
export class UpdatePagoDto extends PartialType(CreatePagoDto) {}