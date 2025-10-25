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
import { CreateNotificacionDto } from '../dto/create-notificacion.dto';
import { UpdateNotificacionDto } from '../dto/update-notificacion.dto';
import { NotificacionService } from '../services/notificacion.service';

/**
 * Controlador para gestionar endpoints de notificaciones
 */
@Controller('notificaciones')
export class NotificacionController {
  constructor(private readonly notificacionService: NotificacionService) {}

  /**
   * POST /notificaciones - Crear una nueva notificación
   */
  @Post()
  create(@Body() createNotificacionDto: CreateNotificacionDto) {
    return this.notificacionService.create(createNotificacionDto);
  }

  /**
   * GET /notificaciones - Obtener todas las notificaciones
   */
  @Get()
  findAll() {
    return this.notificacionService.findAll();
  }

  /**
   * GET /notificaciones/:id - Obtener una notificación por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.notificacionService.findOne(id);
  }

  /**
   * PATCH /notificaciones/:id - Actualizar una notificación
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNotificacionDto: UpdateNotificacionDto,
  ) {
    return this.notificacionService.update(id, updateNotificacionDto);
  }

  /**
   * DELETE /notificaciones/:id - Eliminar una notificación
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.notificacionService.remove(id);
  }
}