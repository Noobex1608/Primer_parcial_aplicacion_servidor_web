import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * DTO para crear un nuevo usuario
 */
export class CreateUsuarioDto {
  /**
   * Nombre del usuario
   */
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El nombre no puede exceder 100 caracteres' })
  nombre: string;

  /**
   * Email del usuario
   */
  @IsEmail({}, { message: 'Debe proporcionar un email válido' })
  @MaxLength(100, { message: 'El email no puede exceder 100 caracteres' })
  email: string;

  /**
   * Contraseña del usuario
   */
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(255, { message: 'La contraseña no puede exceder 255 caracteres' })
  contraseña: string;

  /**
   * Rol del usuario
   */
  @IsOptional()
  @IsString()
  @MaxLength(50, { message: 'El rol no puede exceder 50 caracteres' })
  rol?: string;

  /**
   * Teléfono del usuario
   */
  @IsOptional()
  @IsString()
  @MaxLength(15, { message: 'El teléfono no puede exceder 15 caracteres' })
  telefono?: string;

  /**
   * Estado activo del usuario
   */
  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
