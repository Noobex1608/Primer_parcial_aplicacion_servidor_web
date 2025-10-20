import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';

/**
 * DTO para actualizar un evento existente
 * Todas las propiedades son opcionales
 */
export class UpdateEventoDto extends PartialType(CreateEventoDto) {}
