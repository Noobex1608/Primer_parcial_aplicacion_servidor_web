import {
  IsNumber,
  IsString,
} from 'class-validator';

/**
 * DTO para crear una nueva factura
 */
export class CreateFacturaDto {
  /**
   * ID de la reserva
   */
  @IsNumber()
  reserva_id: number;

  /**
   * Fecha de emisión
   */
  @IsString()
  fecha_emision: string;

  /**
   * Estado de la factura
   */
  @IsNumber()
  estado_id: number;

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