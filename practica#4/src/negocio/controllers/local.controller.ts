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
import { CreateLocalDto } from '../dto/create-local.dto';
import { UpdateLocalDto } from '../dto/update-local.dto';
import { LocalService } from '../services/local.service';

/**
 * Controlador para gestionar endpoints de locales
 */
@Controller('locales')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  /**
   * POST /locales - Crear un nuevo local
   */
  @Post()
  create(@Body() createLocalDto: CreateLocalDto) {
    return this.localService.create(createLocalDto);
  }

  /**
   * GET /locales - Obtener todos los locales
   */
  @Get()
  findAll() {
    return this.localService.findAll();
  }

  /**
   * GET /locales/:id - Obtener un local por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.localService.findOne(id);
  }

  /**
   * PATCH /locales/:id - Actualizar un local
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLocalDto: UpdateLocalDto,
  ) {
    return this.localService.update(id, updateLocalDto);
  }

  /**
   * DELETE /locales/:id - Eliminar un local
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.localService.remove(id);
  }
}
