import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificacionDto } from '../dto/create-notificacion.dto';
import { UpdateNotificacionDto } from '../dto/update-notificacion.dto';
import { Notificacion } from '../entities/Notificacion';

/**
 * Servicio para gestionar operaciones CRUD de notificaciones
 */
@Injectable()
export class NotificacionService {
  constructor(
    @InjectRepository(Notificacion)
    private notificacionRepository: Repository<Notificacion>,
  ) {}

  /**
   * Crear una nueva notificación
   */
  async create(createNotificacionDto: CreateNotificacionDto): Promise<Notificacion> {
    const notificacion = this.notificacionRepository.create(createNotificacionDto);
    return await this.notificacionRepository.save(notificacion);
  }

  /**
   * Obtener todas las notificaciones
   */
  async findAll(): Promise<Notificacion[]> {
    return await this.notificacionRepository.find();
  }

  /**
   * Obtener una notificación por ID
   */
  async findOne(id: number): Promise<Notificacion> {
    const notificacion = await this.notificacionRepository.findOne({ where: { id } });
    if (!notificacion) {
      throw new NotFoundException(`Notificación con ID ${id} no encontrada`);
    }
    return notificacion;
  }

  /**
   * Actualizar una notificación
   */
  async update(id: number, updateNotificacionDto: UpdateNotificacionDto): Promise<Notificacion> {
    const notificacion = await this.findOne(id);
    Object.assign(notificacion, updateNotificacionDto);
    return await this.notificacionRepository.save(notificacion);
  }

  /**
   * Eliminar una notificación
   */
  async remove(id: number): Promise<void> {
    const notificacion = await this.findOne(id);
    await this.notificacionRepository.remove(notificacion);
  }
}