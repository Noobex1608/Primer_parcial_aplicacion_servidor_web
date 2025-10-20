import { PartialType } from '@nestjs/mapped-types';
import { CreateServicioDto } from './create-servicio.dto';

/**
 * DTO para actualizar un servicio existente
 * Todas las propiedades son opcionales
 */
export class UpdateServicioDto extends PartialType(CreateServicioDto) {}
