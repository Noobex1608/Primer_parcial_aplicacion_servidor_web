import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * DTO para crear una nueva notificación
 */
export class CreateNotificacionDto {
  /**
   * ID del usuario
   */
  @IsNumber()
  usuario_id: number;

  /**
   * Título de la notificación
   */
  @IsString()
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  @MaxLength(200, { message: 'El título no puede exceder 200 caracteres' })
  titulo: string;

  /**
   * Contenido de la notificación
   */
  @IsString()
  @MinLength(10, { message: 'El contenido debe tener al menos 10 caracteres' })
  contenido: string;

  /**
   * Tipo de notificación (opcional)
   */
  @IsOptional()
  @IsString()
  @MaxLength(50, { message: 'El tipo no puede exceder 50 caracteres' })
  tipo?: string;

  /**
   * Fecha de envío
   */
  @IsString()
  enviado_en: string;
}