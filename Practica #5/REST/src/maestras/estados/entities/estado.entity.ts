import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Entidad Estado
 * Representa los diferentes estados que puede tener un registro en el sistema
 */
@Entity('estados')
export class Estado {
  /**
   * Identificador único del estado
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Nombre del estado (ej: Activo, Inactivo, Pendiente, etc.)
   */
  @Column({ length: 50, unique: true })
  nombre: string;

  /**
   * Descripción del estado
   */
  @Column({ length: 200, nullable: true })
  descripcion: string;

  /**
   * Código corto del estado para referencia rápida
   */
  @Column({ length: 10, unique: true })
  codigo: string;

  /**
   * Fecha de creación del registro
   */
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;

  /**
   * Indica si el estado está activo en el sistema
   */
  @Column({ default: true })
  activo: boolean;
}
