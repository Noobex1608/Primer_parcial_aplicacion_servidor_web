import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estado } from './entities/estado.entity';

/**
 * Servicio para la gestión de Estados
 * Implementa la lógica de negocio para operaciones CRUD
 */
@Injectable()
export class EstadosService {
  constructor(
    @InjectRepository(Estado)
    private readonly estadoRepository: Repository<Estado>,
  ) {}

  /**
   * Crea un nuevo estado en la base de datos
   * @param createEstadoDto - Datos del estado a crear
   * @returns El estado creado
   * @throws ConflictException si el nombre o código ya existe
   */
  async create(createEstadoDto: CreateEstadoDto): Promise<Estado> {
    try {
      const estado = this.estadoRepository.create(createEstadoDto);
      return await this.estadoRepository.save(estado);
    } catch (error) {
      // Error de duplicado en SQLite
      if (error.code === 'SQLITE_CONSTRAINT') {
        throw new ConflictException('Ya existe un estado con ese nombre o código');
      }
      throw new InternalServerErrorException('Error al crear el estado');
    }
  }

  /**
   * Obtiene todos los estados de la base de datos
   * @returns Array con todos los estados
   */
  async findAll(): Promise<Estado[]> {
    return await this.estadoRepository.find({
      order: {
        nombre: 'ASC',
      },
    });
  }

  /**
   * Obtiene un estado por su ID
   * @param id - ID del estado a buscar
   * @returns El estado encontrado
   * @throws NotFoundException si el estado no existe
   */
  async findOne(id: number): Promise<Estado> {
    const estado = await this.estadoRepository.findOne({
      where: { id },
    });

    if (!estado) {
      throw new NotFoundException(`No se encontró el estado con ID ${id}`);
    }

    return estado;
  }

  /**
   * Actualiza un estado existente
   * @param id - ID del estado a actualizar
   * @param updateEstadoDto - Datos a actualizar
   * @returns El estado actualizado
   * @throws NotFoundException si el estado no existe
   * @throws ConflictException si el nuevo nombre o código ya existe
   */
  async update(id: number, updateEstadoDto: UpdateEstadoDto): Promise<Estado> {
    const estado = await this.findOne(id);

    try {
      Object.assign(estado, updateEstadoDto);
      return await this.estadoRepository.save(estado);
    } catch (error) {
      if (error.code === 'SQLITE_CONSTRAINT') {
        throw new ConflictException('Ya existe un estado con ese nombre o código');
      }
      throw new InternalServerErrorException('Error al actualizar el estado');
    }
  }

  /**
   * Elimina un estado de la base de datos
   * @param id - ID del estado a eliminar
   * @returns Mensaje de confirmación
   * @throws NotFoundException si el estado no existe
   */
  async remove(id: number): Promise<{ message: string }> {
    const estado = await this.findOne(id);
    await this.estadoRepository.remove(estado);
    return { message: `Estado con ID ${id} eliminado correctamente` };
  }
}
