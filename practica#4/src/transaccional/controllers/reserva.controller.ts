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
import { CreateReservaDto } from '../dto/create-reserva.dto';
import { UpdateReservaDto } from '../dto/update-reserva.dto';
import { ReservaService } from '../services/reserva.service';

/**
 * Controlador para gestionar endpoints de reservas
 */
@Controller('reservas')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  /**
   * POST /reservas - Crear una nueva reserva
   */
  @Post()
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservaService.create(createReservaDto);
  }

  /**
   * GET /reservas - Obtener todas las reservas
   */
  @Get()
  findAll() {
    return this.reservaService.findAll();
  }

  /**
   * GET /reservas/:id - Obtener una reserva por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reservaService.findOne(id);
  }

  /**
   * PATCH /reservas/:id - Actualizar una reserva
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReservaDto: UpdateReservaDto,
  ) {
    return this.reservaService.update(id, updateReservaDto);
  }

  /**
   * DELETE /reservas/:id - Eliminar una reserva
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reservaService.remove(id);
  }
}