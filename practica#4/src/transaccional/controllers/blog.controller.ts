import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { UpdateBlogDto } from '../dto/update-blog.dto';
import { BlogService } from '../services/blog.service';

/**
 * Controlador para gestionar endpoints de blogs
 */
@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  /**
   * POST /blogs - Crear un nuevo blog
   */
  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  /**
   * GET /blogs - Obtener todos los blogs
   */
  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  /**
   * GET /blogs/:id - Obtener un blog por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.blogService.findOne(id);
  }

  /**
   * PATCH /blogs/:id - Actualizar un blog
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    return this.blogService.update(id, updateBlogDto);
  }

  /**
   * DELETE /blogs/:id - Eliminar un blog
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.blogService.remove(id);
  }
}