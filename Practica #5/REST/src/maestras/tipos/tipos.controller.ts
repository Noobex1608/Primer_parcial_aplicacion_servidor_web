import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { TiposService } from './tipos.service';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';

/**
 * Controlador para la gestión de Tipos
 * Define los endpoints REST para operaciones CRUD
 */
@Controller('tipos')
export class TiposController {
  constructor(private readonly tiposService: TiposService) {}

  /**
   * Crea un nuevo tipo
   * POST /tipos
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTipoDto: CreateTipoDto) {
    return this.tiposService.create(createTipoDto);
  }

  /**
   * Obtiene todos los tipos
   * GET /tipos
   */
  @Get()
  findAll() {
    return this.tiposService.findAll();
  }

  /**
   * Obtiene un tipo por su ID
   * GET /tipos/:id
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tiposService.findOne(id);
  }

  /**
   * Actualiza un tipo existente
   * PATCH /tipos/:id
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipoDto: UpdateTipoDto,
  ) {
    return this.tiposService.update(id, updateTipoDto);
  }

  /**
   * Elimina un tipo
   * DELETE /tipos/:id
   */
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tiposService.remove(id);
  }
}
