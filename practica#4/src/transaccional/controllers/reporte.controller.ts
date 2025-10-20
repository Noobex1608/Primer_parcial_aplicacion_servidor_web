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
import { CreateReporteDto } from '../dto/create-reporte.dto';
import { UpdateReporteDto } from '../dto/update-reporte.dto';
import { ReporteService } from '../services/reporte.service';

/**
 * Controlador para gestionar endpoints de reportes
 */
@Controller('reportes')
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) {}

  /**
   * POST /reportes - Crear un nuevo reporte
   */
  @Post()
  create(@Body() createReporteDto: CreateReporteDto) {
    return this.reporteService.create(createReporteDto);
  }

  /**
   * GET /reportes - Obtener todos los reportes
   */
  @Get()
  findAll() {
    return this.reporteService.findAll();
  }

  /**
   * GET /reportes/:id - Obtener un reporte por ID
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reporteService.findOne(id);
  }

  /**
   * PATCH /reportes/:id - Actualizar un reporte
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReporteDto: UpdateReporteDto,
  ) {
    return this.reporteService.update(id, updateReporteDto);
  }

  /**
   * DELETE /reportes/:id - Eliminar un reporte
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reporteService.remove(id);
  }
}