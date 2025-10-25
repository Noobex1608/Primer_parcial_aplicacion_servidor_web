import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacturaDto } from '../dto/create-factura.dto';
import { UpdateFacturaDto } from '../dto/update-factura.dto';
import { Factura } from '../entities/Factura';

/**
 * Servicio para gestionar operaciones CRUD de facturas
 */
@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private facturaRepository: Repository<Factura>,
  ) {}

  /**
   * Crear una nueva factura
   */
  async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
    const factura = this.facturaRepository.create(createFacturaDto);
    return await this.facturaRepository.save(factura);
  }

  /**
   * Obtener todas las facturas
   */
  async findAll(): Promise<Factura[]> {
    return await this.facturaRepository.find();
  }

  /**
   * Obtener una factura por ID
   */
  async findOne(id: number): Promise<Factura> {
    const factura = await this.facturaRepository.findOne({ where: { id } });
    if (!factura) {
      throw new NotFoundException(`Factura con ID ${id} no encontrada`);
    }
    return factura;
  }

  /**
   * Actualizar una factura
   */
  async update(id: number, updateFacturaDto: UpdateFacturaDto): Promise<Factura> {
    const factura = await this.findOne(id);
    Object.assign(factura, updateFacturaDto);
    return await this.facturaRepository.save(factura);
  }

  /**
   * Eliminar una factura
   */
  async remove(id: number): Promise<void> {
    const factura = await this.findOne(id);
    await this.facturaRepository.remove(factura);
  }
}