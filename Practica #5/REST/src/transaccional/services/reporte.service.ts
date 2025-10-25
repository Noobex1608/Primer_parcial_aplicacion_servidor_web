import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReporteDto } from '../dto/create-reporte.dto';
import { UpdateReporteDto } from '../dto/update-reporte.dto';
import { Reporte } from '../entities/Reporte';

/**
 * Servicio para gestionar operaciones CRUD de reportes
 */
@Injectable()
export class ReporteService {
  constructor(
    @InjectRepository(Reporte)
    private reporteRepository: Repository<Reporte>,
  ) {}

  /**
   * Crear un nuevo reporte
   */
  async create(createReporteDto: CreateReporteDto): Promise<Reporte> {
    const reporte = this.reporteRepository.create(createReporteDto);
    return await this.reporteRepository.save(reporte);
  }

  /**
   * Obtener todos los reportes
   */
  async findAll(): Promise<Reporte[]> {
    return await this.reporteRepository.find();
  }

  /**
   * Obtener un reporte por ID
   */
  async findOne(id: number): Promise<Reporte> {
    const reporte = await this.reporteRepository.findOne({ where: { id } });
    if (!reporte) {
      throw new NotFoundException(`Reporte con ID ${id} no encontrado`);
    }
    return reporte;
  }

  /**
   * Actualizar un reporte
   */
  async update(id: number, updateReporteDto: UpdateReporteDto): Promise<Reporte> {
    const reporte = await this.findOne(id);
    Object.assign(reporte, updateReporteDto);
    return await this.reporteRepository.save(reporte);
  }

  /**
   * Eliminar un reporte
   */
  async remove(id: number): Promise<void> {
    const reporte = await this.findOne(id);
    await this.reporteRepository.remove(reporte);
  }
}