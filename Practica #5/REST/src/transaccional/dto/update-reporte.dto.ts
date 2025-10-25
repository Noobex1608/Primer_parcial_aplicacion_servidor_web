import { PartialType } from '@nestjs/mapped-types';
import { CreateReporteDto } from './create-reporte.dto';

/**
 * DTO para actualizar un reporte
 * Hereda de CreateReporteDto pero hace todas las propiedades opcionales
 */
export class UpdateReporteDto extends PartialType(CreateReporteDto) {}