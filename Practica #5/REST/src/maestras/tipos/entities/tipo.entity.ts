import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Entidad Tipo
 * Representa los diferentes tipos o categorías que puede tener un recurso en el sistema
 */
@Entity('tipos')
export class Tipo {
  /**
   * Identificador único del tipo
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Nombre del tipo (ej: Cliente VIP, Evento Corporativo, Servicio Premium, etc.)
   */
  @Column({ length: 50, unique: true })
  nombre: string;

  /**
   * Descripción detallada del tipo
   */
  @Column({ length: 200, nullable: true })
  descripcion: string;

  /**
   * Código corto del tipo para referencia rápida
   */
  @Column({ length: 10, unique: true })
  codigo: string;

  /**
   * Categoría a la que pertenece el tipo
   */
  @Column({ length: 50, nullable: true })
  categoria: string;

  /**
   * Fecha de creación del registro
   */
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;

  /**
   * Indica si el tipo está activo en el sistema
   */
  @Column({ default: true })
  activo: boolean;
}
