import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { Servicio } from '../entities/Servicio';

/**
 * Servicio para gestionar operaciones CRUD de servicios
 */
@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio)
    private servicioRepository: Repository<Servicio>,
  ) {}

  /**
   * Crear un nuevo servicio
   */
  async create(createServicioDto: CreateServicioDto): Promise<Servicio> {
    const servicio = this.servicioRepository.create(createServicioDto);
    return await this.servicioRepository.save(servicio);
  }

  /**
   * Obtener todos los servicios
   */
  async findAll(): Promise<Servicio[]> {
    return await this.servicioRepository.find();
  }

  /**
   * Obtener un servicio por ID
   */
  async findOne(id: number): Promise<Servicio> {
    const servicio = await this.servicioRepository.findOne({ where: { id } });
    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }
    return servicio;
  }

  /**
   * Actualizar un servicio
   */
  async update(
    id: number,
    updateServicioDto: UpdateServicioDto,
  ): Promise<Servicio> {
    const servicio = await this.findOne(id);
    Object.assign(servicio, updateServicioDto);
    return await this.servicioRepository.save(servicio);
  }

  /**
   * Eliminar un servicio
   */
  async remove(id: number): Promise<void> {
    const servicio = await this.findOne(id);
    await this.servicioRepository.remove(servicio);
  }
}
