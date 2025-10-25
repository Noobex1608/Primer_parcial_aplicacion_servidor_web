import {
  IsNumber,
  IsString,
} from 'class-validator';

/**
 * DTO para crear un nuevo pago
 */
export class CreatePagoDto {
  /**
   * ID de la factura
   */
  @IsNumber()
  factura_id: number;

  /**
   * Monto del pago
   */
  @IsNumber()
  monto: number;

  /**
   * Método de pago
   */
  @IsString()
  metodo_pago: string;

  /**
   * Estado del pago
   */
  @IsNumber()
  estado_id: number;

  /**
   * Fecha del pago
   */
  @IsString()
  fecha_pago: string;

  /**
   * Fecha de creación
   */
  @IsString()
  creado_en: string;
}