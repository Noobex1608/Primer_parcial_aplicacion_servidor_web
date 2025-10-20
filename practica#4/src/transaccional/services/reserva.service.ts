import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservaDto } from '../dto/create-reserva.dto';
import { UpdateReservaDto } from '../dto/update-reserva.dto';
import { Reserva } from '../entities/Reserva';

/**
 * Servicio para gestionar operaciones CRUD de reservas
 */
@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,
  ) {}

  /**
   * Crear una nueva reserva
   */
  async create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    const reserva = this.reservaRepository.create(createReservaDto);
    return await this.reservaRepository.save(reserva);
  }

  /**
   * Obtener todas las reservas
   */
  async findAll(): Promise<Reserva[]> {
    return await this.reservaRepository.find();
  }

  /**
   * Obtener una reserva por ID
   */
  async findOne(id: number): Promise<Reserva> {
    const reserva = await this.reservaRepository.findOne({ where: { id } });
    if (!reserva) {
      throw new NotFoundException(`Reserva con ID ${id} no encontrada`);
    }
    return reserva;
  }

  /**
   * Actualizar una reserva
   */
  async update(id: number, updateReservaDto: UpdateReservaDto): Promise<Reserva> {
    const reserva = await this.findOne(id);
    Object.assign(reserva, updateReservaDto);
    return await this.reservaRepository.save(reserva);
  }

  /**
   * Eliminar una reserva
   */
  async remove(id: number): Promise<void> {
    const reserva = await this.findOne(id);
    await this.reservaRepository.remove(reserva);
  }
}