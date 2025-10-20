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
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { ServicioService } from '../services/servicio.service';

/**
 * Controlador para gestionar endpoints de servicios
 */
@Controller('servicios')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  /**
   * POST /servicios - Crear un nuevo servicio
   */
  @Post()
  create(@Body() createServicioDto: CreateServicioDto) {
    return this.servicioService.create(createServicioDto);
  }

  /**
   * GET /servicios - Obtener todos los servicios
   */
  @Get()
  findAll() {
    return this.servicioService.findAll();
  }

  /**
   * GET /servicios/:id - Obtener un servicio por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.servicioService.findOne(id);
  }

  /**
   * PATCH /servicios/:id - Actualizar un servicio
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServicioDto: UpdateServicioDto,
  ) {
    return this.servicioService.update(id, updateServicioDto);
  }

  /**
   * DELETE /servicios/:id - Eliminar un servicio
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.servicioService.remove(id);
  }
}
