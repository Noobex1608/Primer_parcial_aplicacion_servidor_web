import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Entidad Evento - Representa los eventos organizados en el sistema
 */
@Entity('eventos')
export class Evento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 150 })
  nombre!: string;

  @Column({ type: 'varchar', length: 100 })
  tipo!: string;

  @Column({ type: 'datetime' })
  fecha_inicio!: Date;

  @Column({ type: 'datetime' })
  fecha_fin!: Date;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;

  @Column({ type: 'int', nullable: true })
  capacidad_maxima!: number;

  @Column({ type: 'varchar', length: 200, nullable: true })
  ubicacion!: string;

  @CreateDateColumn({ type: 'datetime' })
  creado_en!: Date;

  @UpdateDateColumn({ type: 'datetime' })
  actualizado_en!: Date;
}
