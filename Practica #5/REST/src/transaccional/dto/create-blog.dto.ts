import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * DTO para crear un nuevo blog
 */
export class CreateBlogDto {
  @IsNumber()
  administrador_id: number;

  @IsString()
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  @MaxLength(200, { message: 'El título no puede exceder 200 caracteres' })
  titulo: string;

  @IsString()
  @MinLength(10, { message: 'El contenido debe tener al menos 10 caracteres' })
  contenido: string;

  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'Las etiquetas no pueden exceder 500 caracteres' })
  etiquetas?: string;

  @IsString()
  publicado_en: string;

  @IsString()
  actualizado_en: string;
}