import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

/**
 * DTO para actualizar un usuario existente
 * Todas las propiedades son opcionales
 */
export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
