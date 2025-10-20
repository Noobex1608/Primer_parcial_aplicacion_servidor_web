import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { UpdateTipoDto } from './dto/update-tipo.dto';
import { Tipo } from './entities/tipo.entity';

/**
 * Servicio para la gestión de Tipos
 * Implementa la lógica de negocio para operaciones CRUD
 */
@Injectable()
export class TiposService {
  constructor(
    @InjectRepository(Tipo)
    private readonly tipoRepository: Repository<Tipo>,
  ) {}

  /**
   * Crea un nuevo tipo en la base de datos
   * @param createTipoDto - Datos del tipo a crear
   * @returns El tipo creado
   * @throws ConflictException si el nombre o código ya existe
   */
  async create(createTipoDto: CreateTipoDto): Promise<Tipo> {
    try {
      const tipo = this.tipoRepository.create(createTipoDto);
      return await this.tipoRepository.save(tipo);
    } catch (error) {
      // Error de duplicado en SQLite
      if (error.code === 'SQLITE_CONSTRAINT') {
        throw new ConflictException('Ya existe un tipo con ese nombre o código');
      }
      throw new InternalServerErrorException('Error al crear el tipo');
    }
  }

  /**
   * Obtiene todos los tipos de la base de datos
   * @returns Array con todos los tipos
   */
  async findAll(): Promise<Tipo[]> {
    return await this.tipoRepository.find({
      order: {
        nombre: 'ASC',
      },
    });
  }

  /**
   * Obtiene un tipo por su ID
   * @param id - ID del tipo a buscar
   * @returns El tipo encontrado
   * @throws NotFoundException si el tipo no existe
   */
  async findOne(id: number): Promise<Tipo> {
    const tipo = await this.tipoRepository.findOne({
      where: { id },
    });

    if (!tipo) {
      throw new NotFoundException(`No se encontró el tipo con ID ${id}`);
    }

    return tipo;
  }

  /**
   * Actualiza un tipo existente
   * @param id - ID del tipo a actualizar
   * @param updateTipoDto - Datos a actualizar
   * @returns El tipo actualizado
   * @throws NotFoundException si el tipo no existe
   * @throws ConflictException si el nuevo nombre o código ya existe
   */
  async update(id: number, updateTipoDto: UpdateTipoDto): Promise<Tipo> {
    const tipo = await this.findOne(id);

    try {
      Object.assign(tipo, updateTipoDto);
      return await this.tipoRepository.save(tipo);
    } catch (error) {
      if (error.code === 'SQLITE_CONSTRAINT') {
        throw new ConflictException('Ya existe un tipo con ese nombre o código');
      }
      throw new InternalServerErrorException('Error al actualizar el tipo');
    }
  }

  /**
   * Elimina un tipo de la base de datos
   * @param id - ID del tipo a eliminar
   * @returns Mensaje de confirmación
   * @throws NotFoundException si el tipo no existe
   */
  async remove(id: number): Promise<{ message: string }> {
    const tipo = await this.findOne(id);
    await this.tipoRepository.remove(tipo);
    return { message: `Tipo con ID ${id} eliminado correctamente` };
  }
}
