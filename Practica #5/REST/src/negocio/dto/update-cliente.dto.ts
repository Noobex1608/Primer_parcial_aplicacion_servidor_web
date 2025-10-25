import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

/**
 * DTO para actualizar un cliente existente
 * Todas las propiedades son opcionales
 */
export class UpdateClienteDto extends PartialType(CreateClienteDto) {}
