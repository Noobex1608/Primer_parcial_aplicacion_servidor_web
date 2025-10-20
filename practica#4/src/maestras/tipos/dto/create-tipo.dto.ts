import { IsNotEmpty, IsString, IsOptional, IsBoolean, MaxLength, MinLength } from 'class-validator';

/**
 * DTO para la creación de un Tipo
 * Contiene las validaciones necesarias para crear un nuevo tipo en el sistema
 */
export class CreateTipoDto {
  /**
   * Nombre del tipo
   * @example 'Cliente VIP'
   */
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser un texto' })
  @MaxLength(50, { message: 'El nombre no puede tener más de 50 caracteres' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  nombre: string;

  /**
   * Descripción del tipo
   * @example 'Tipo de cliente con beneficios especiales y prioridad en los servicios'
   */
  @IsOptional()
  @IsString({ message: 'La descripción debe ser un texto' })
  @MaxLength(200, { message: 'La descripción no puede tener más de 200 caracteres' })
  descripcion?: string;

  /**
   * Código corto del tipo
   * @example 'CLVIP'
   */
  @IsNotEmpty({ message: 'El código es obligatorio' })
  @IsString({ message: 'El código debe ser un texto' })
  @MaxLength(10, { message: 'El código no puede tener más de 10 caracteres' })
  @MinLength(2, { message: 'El código debe tener al menos 2 caracteres' })
  codigo: string;

  /**
   * Categoría del tipo
   * @example 'Clientes'
   */
  @IsOptional()
  @IsString({ message: 'La categoría debe ser un texto' })
  @MaxLength(50, { message: 'La categoría no puede tener más de 50 caracteres' })
  categoria?: string;

  /**
   * Indica si el tipo está activo
   * @example true
   */
  @IsOptional()
  @IsBoolean({ message: 'El campo activo debe ser verdadero o falso' })
  activo?: boolean;
}
