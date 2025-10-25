import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventoDto } from '../dto/create-evento.dto';
import { UpdateEventoDto } from '../dto/update-evento.dto';
import { Evento } from '../entities/Evento';

/**
 * Servicio para gestionar operaciones CRUD de eventos
 */
@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>,
  ) {}

  /**
   * Crear un nuevo evento
   */
  async create(createEventoDto: CreateEventoDto): Promise<Evento> {
    const evento = this.eventoRepository.create(createEventoDto);
    return await this.eventoRepository.save(evento);
  }

  /**
   * Obtener todos los eventos
   */
  async findAll(): Promise<Evento[]> {
    return await this.eventoRepository.find();
  }

  /**
   * Obtener un evento por ID
   */
  async findOne(id: number): Promise<Evento> {
    const evento = await this.eventoRepository.findOne({ where: { id } });
    if (!evento) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
    return evento;
  }

  /**
   * Actualizar un evento
   */
  async update(id: number, updateEventoDto: UpdateEventoDto): Promise<Evento> {
    const evento = await this.findOne(id);
    Object.assign(evento, updateEventoDto);
    return await this.eventoRepository.save(evento);
  }

  /**
   * Eliminar un evento
   */
  async remove(id: number): Promise<void> {
    const evento = await this.findOne(id);
    await this.eventoRepository.remove(evento);
  }
}
