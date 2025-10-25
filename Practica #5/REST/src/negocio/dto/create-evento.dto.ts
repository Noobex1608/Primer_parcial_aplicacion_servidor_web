import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

/**
 * DTO para crear un nuevo evento
 */
export class CreateEventoDto {
  /**
   * Nombre del evento
   */
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(150, { message: 'El nombre no puede exceder 150 caracteres' })
  nombre: string;

  /**
   * Tipo de evento
   */
  @IsString()
  @MaxLength(100, { message: 'El tipo no puede exceder 100 caracteres' })
  tipo: string;

  /**
   * Fecha de inicio del evento
   */
  @IsDateString({}, { message: 'Debe proporcionar una fecha de inicio válida' })
  fecha_inicio: string;

  /**
   * Fecha de fin del evento
   */
  @IsDateString({}, { message: 'Debe proporcionar una fecha de fin válida' })
  fecha_fin: string;

  /**
   * Descripción del evento
   */
  @IsOptional()
  @IsString()
  descripcion?: string;

  /**
   * Capacidad máxima del evento
   */
  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'La capacidad debe ser al menos 1' })
  capacidad_maxima?: number;

  /**
   * Ubicación del evento
   */
  @IsOptional()
  @IsString()
  @MaxLength(200, { message: 'La ubicación no puede exceder 200 caracteres' })
  ubicacion?: string;
}
