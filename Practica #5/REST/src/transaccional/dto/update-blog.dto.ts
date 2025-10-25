import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';

/**
 * DTO para actualizar un blog
 * Hereda de CreateBlogDto pero hace todas las propiedades opcionales
 */
export class UpdateBlogDto extends PartialType(CreateBlogDto) {}