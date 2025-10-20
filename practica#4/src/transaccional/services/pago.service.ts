import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePagoDto } from '../dto/create-pago.dto';
import { UpdatePagoDto } from '../dto/update-pago.dto';
import { Pago } from '../entities/Pago';

/**
 * Servicio para gestionar operaciones CRUD de pagos
 */
@Injectable()
export class PagoService {
  constructor(
    @InjectRepository(Pago)
    private pagoRepository: Repository<Pago>,
  ) {}

  /**
   * Crear un nuevo pago
   */
  async create(createPagoDto: CreatePagoDto): Promise<Pago> {
    const pago = this.pagoRepository.create(createPagoDto);
    return await this.pagoRepository.save(pago);
  }

  /**
   * Obtener todos los pagos
   */
  async findAll(): Promise<Pago[]> {
    return await this.pagoRepository.find();
  }

  /**
   * Obtener un pago por ID
   */
  async findOne(id: number): Promise<Pago> {
    const pago = await this.pagoRepository.findOne({ where: { id } });
    if (!pago) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }
    return pago;
  }

  /**
   * Actualizar un pago
   */
  async update(id: number, updatePagoDto: UpdatePagoDto): Promise<Pago> {
    const pago = await this.findOne(id);
    Object.assign(pago, updatePagoDto);
    return await this.pagoRepository.save(pago);
  }

  /**
   * Eliminar un pago
   */
  async remove(id: number): Promise<void> {
    const pago = await this.findOne(id);
    await this.pagoRepository.remove(pago);
  }
}