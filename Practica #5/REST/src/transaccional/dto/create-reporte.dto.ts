import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * DTO para crear un nuevo reporte
 */
export class CreateReporteDto {
  /**
   * ID del administrador
   */
  @IsNumber()
  administrador_id: number;

  /**
   * Título del reporte
   */
  @IsString()
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  @MaxLength(200, { message: 'El título no puede exceder 200 caracteres' })
  titulo: string;

  /**
   * Descripción del reporte
   */
  @IsString()
  @MinLength(10, { message: 'La descripción debe tener al menos 10 caracteres' })
  descripcion: string;

  /**
   * Datos del reporte (opcional)
   */
  @IsOptional()
  @IsString()
  datos?: string;

  /**
   * Fecha de generación
   */
  @IsString()
  generado_en: string;
}