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
import { CreateEventoDto } from '../dto/create-evento.dto';
import { UpdateEventoDto } from '../dto/update-evento.dto';
import { EventoService } from '../services/evento.service';

/**
 * Controlador para gestionar endpoints de eventos
 */
@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  /**
   * POST /eventos - Crear un nuevo evento
   */
  @Post()
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventoService.create(createEventoDto);
  }

  /**
   * GET /eventos - Obtener todos los eventos
   */
  @Get()
  findAll() {
    return this.eventoService.findAll();
  }

  /**
   * GET /eventos/:id - Obtener un evento por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.eventoService.findOne(id);
  }

  /**
   * PATCH /eventos/:id - Actualizar un evento
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEventoDto: UpdateEventoDto,
  ) {
    return this.eventoService.update(id, updateEventoDto);
  }

  /**
   * DELETE /eventos/:id - Eliminar un evento
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.eventoService.remove(id);
  }
}
