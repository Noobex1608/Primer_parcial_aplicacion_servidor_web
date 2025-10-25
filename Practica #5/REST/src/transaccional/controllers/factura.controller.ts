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
import { CreateFacturaDto } from '../dto/create-factura.dto';
import { UpdateFacturaDto } from '../dto/update-factura.dto';
import { FacturaService } from '../services/factura.service';

/**
 * Controlador para gestionar endpoints de facturas
 */
@Controller('facturas')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  /**
   * POST /facturas - Crear una nueva factura
   */
  @Post()
  create(@Body() createFacturaDto: CreateFacturaDto) {
    return this.facturaService.create(createFacturaDto);
  }

  /**
   * GET /facturas - Obtener todas las facturas
   */
  @Get()
  findAll() {
    return this.facturaService.findAll();
  }

  /**
   * GET /facturas/:id - Obtener una factura por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.facturaService.findOne(id);
  }

  /**
   * PATCH /facturas/:id - Actualizar una factura
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFacturaDto: UpdateFacturaDto,
  ) {
    return this.facturaService.update(id, updateFacturaDto);
  }

  /**
   * DELETE /facturas/:id - Eliminar una factura
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.facturaService.remove(id);
  }
}