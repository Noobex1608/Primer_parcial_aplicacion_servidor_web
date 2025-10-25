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
 * DTO para crear un nuevo local
 */
export class CreateLocalDto {
  /**
   * Nombre del local
   */
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(150, { message: 'El nombre no puede exceder 150 caracteres' })
  nombre: string;

  /**
   * Dirección del local
   */
  @IsString()
  @MaxLength(300, { message: 'La dirección no puede exceder 300 caracteres' })
  direccion: string;

  /**
   * Ciudad del local
   */
  @IsString()
  @MaxLength(100, { message: 'La ciudad no puede exceder 100 caracteres' })
  ciudad: string;

  /**
   * Teléfono del local
   */
  @IsString()
  @MaxLength(15, { message: 'El teléfono no puede exceder 15 caracteres' })
  telefono: string;

  /**
   * Capacidad del local
   */
  @IsNumber()
  @Min(1, { message: 'La capacidad debe ser al menos 1' })
  capacidad: number;

  /**
   * Estado activo del local
   */
  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  /**
   * Horario de atención
   */
  @IsOptional()
  @IsString()
  @MaxLength(100, { message: 'El horario no puede exceder 100 caracteres' })
  horario?: string;
}
