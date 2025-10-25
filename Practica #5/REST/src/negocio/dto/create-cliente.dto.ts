import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * DTO para crear un nuevo cliente
 */
export class CreateClienteDto {
  /**
   * Nombre completo del cliente
   */
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(200, { message: 'El nombre no puede exceder 200 caracteres' })
  nombre_completo: string;

  /**
   * Dirección del cliente
   */
  @IsOptional()
  @IsString()
  @MaxLength(300, { message: 'La dirección no puede exceder 300 caracteres' })
  direccion?: string;

  /**
   * Teléfono del cliente
   */
  @IsOptional()
  @IsString()
  @MaxLength(15, { message: 'El teléfono no puede exceder 15 caracteres' })
  telefono?: string;

  /**
   * Email del cliente
   */
  @IsEmail({}, { message: 'Debe proporcionar un email válido' })
  @MaxLength(100, { message: 'El email no puede exceder 100 caracteres' })
  email: string;

  /**
   * Estado activo del cliente
   */
  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
