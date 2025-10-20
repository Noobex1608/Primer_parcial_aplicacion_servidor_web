import {
  IsNumber,
  IsString,
} from 'class-validator';

/**
 * DTO para crear una nueva reserva
 */
export class CreateReservaDto {
  /**
   * ID del cliente
   */
  @IsNumber()
  cliente_id: number;

  /**
   * ID del evento
   */
  @IsNumber()
  evento_id: number;

  /**
   * Número de personas
   */
  @IsNumber()
  numero_personas: number;

  /**
   * Estado de la reserva
   */
  @IsNumber()
  estado_id: number;

  /**
   * Fecha de la reserva
   */
  @IsString()
  fecha_reserva: string;

  /**
   * Fecha de creación
   */
  @IsString()
  creado_en: string;

  /**
   * Fecha de actualización
   */
  @IsString()
  actualizado_en: string;
}