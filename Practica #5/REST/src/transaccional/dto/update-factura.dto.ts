import { PartialType } from '@nestjs/mapped-types';
import { CreateFacturaDto } from './create-factura.dto';

/**
 * DTO para actualizar una factura
 * Hereda de CreateFacturaDto pero hace todas las propiedades opcionales
 */
export class UpdateFacturaDto extends PartialType(CreateFacturaDto) {}