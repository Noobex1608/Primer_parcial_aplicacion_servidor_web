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
import { CreatePagoDto } from '../dto/create-pago.dto';
import { UpdatePagoDto } from '../dto/update-pago.dto';
import { PagoService } from '../services/pago.service';

/**
 * Controlador para gestionar endpoints de pagos
 */
@Controller('pagos')
export class PagoController {
  constructor(private readonly pagoService: PagoService) {}

  /**
   * POST /pagos - Crear un nuevo pago
   */
  @Post()
  create(@Body() createPagoDto: CreatePagoDto) {
    return this.pagoService.create(createPagoDto);
  }

  /**
   * GET /pagos - Obtener todos los pagos
   */
  @Get()
  findAll() {
    return this.pagoService.findAll();
  }

  /**
   * GET /pagos/:id - Obtener un pago por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pagoService.findOne(id);
  }

  /**
   * PATCH /pagos/:id - Actualizar un pago
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePagoDto: UpdatePagoDto,
  ) {
    return this.pagoService.update(id, updatePagoDto);
  }

  /**
   * DELETE /pagos/:id - Eliminar un pago
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pagoService.remove(id);
  }
}