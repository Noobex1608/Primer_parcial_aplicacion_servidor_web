import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

/**
 * DTO para crear un nuevo servicio
 */
export class CreateServicioDto {
  /**
   * Nombre del servicio
   */
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(150, { message: 'El nombre no puede exceder 150 caracteres' })
  nombre: string;

  /**
   * Descripción del servicio
   */
  @IsOptional()
  @IsString()
  descripcion?: string;

  /**
   * Precio del servicio
   */
  @IsNumber()
  @Min(0, { message: 'El precio no puede ser negativo' })
  precio: number;

  /**
   * Tipo de servicio
   */
  @IsString()
  @MaxLength(100, { message: 'El tipo no puede exceder 100 caracteres' })
  tipo: string;

  /**
   * Disponibilidad del servicio
   */
  @IsOptional()
  @IsBoolean()
  disponible?: boolean;

  /**
   * Duración en minutos del servicio
   */
  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'La duración debe ser al menos 1 minuto' })
  duracion_minutos?: number;
}
