import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Entidad Servicio - Representa los servicios ofrecidos
 */
@Entity('servicios')
export class Servicio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 150 })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio!: number;

  @Column({ type: 'varchar', length: 100 })
  tipo!: string;

  @Column({ type: 'boolean', default: true })
  disponible!: boolean;

  @Column({ type: 'int', nullable: true })
  duracion_minutos!: number;

  @CreateDateColumn({ type: 'datetime' })
  creado_en!: Date;

  @UpdateDateColumn({ type: 'datetime' })
  actualizado_en!: Date;
}
