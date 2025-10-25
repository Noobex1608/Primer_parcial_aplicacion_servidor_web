import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificacionDto } from './create-notificacion.dto';

/**
 * DTO para actualizar una notificación
 * Hereda de CreateNotificacionDto pero hace todas las propiedades opcionales
 */
export class UpdateNotificacionDto extends PartialType(CreateNotificacionDto) {}