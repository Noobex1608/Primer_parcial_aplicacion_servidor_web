import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocalDto } from '../dto/create-local.dto';
import { UpdateLocalDto } from '../dto/update-local.dto';
import { Local } from '../entities/Local';

/**
 * Servicio para gestionar operaciones CRUD de locales
 */
@Injectable()
export class LocalService {
  constructor(
    @InjectRepository(Local)
    private localRepository: Repository<Local>,
  ) {}

  /**
   * Crear un nuevo local
   */
  async create(createLocalDto: CreateLocalDto): Promise<Local> {
    const local = this.localRepository.create(createLocalDto);
    return await this.localRepository.save(local);
  }

  /**
   * Obtener todos los locales
   */
  async findAll(): Promise<Local[]> {
    return await this.localRepository.find();
  }

  /**
   * Obtener un local por ID
   */
  async findOne(id: number): Promise<Local> {
    const local = await this.localRepository.findOne({ where: { id } });
    if (!local) {
      throw new NotFoundException(`Local con ID ${id} no encontrado`);
    }
    return local;
  }

  /**
   * Actualizar un local
   */
  async update(id: number, updateLocalDto: UpdateLocalDto): Promise<Local> {
    const local = await this.findOne(id);
    Object.assign(local, updateLocalDto);
    return await this.localRepository.save(local);
  }

  /**
   * Eliminar un local
   */
  async remove(id: number): Promise<void> {
    const local = await this.findOne(id);
    await this.localRepository.remove(local);
  }
}
