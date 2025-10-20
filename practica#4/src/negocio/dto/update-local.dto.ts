import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalDto } from './create-local.dto';

/**
 * DTO para actualizar un local existente
 * Todas las propiedades son opcionales
 */
export class UpdateLocalDto extends PartialType(CreateLocalDto) {}
