import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Entidad Local - Representa los locales/establecimientos del sistema
 */
@Entity('locales')
export class Local {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 150 })
  nombre!: string;

  @Column({ type: 'varchar', length: 300 })
  direccion!: string;

  @Column({ type: 'varchar', length: 100 })
  ciudad!: string;

  @Column({ type: 'varchar', length: 15 })
  telefono!: string;

  @Column({ type: 'int' })
  capacidad!: number;

  @Column({ type: 'boolean', default: true })
  activo!: boolean;

  @Column({ type: 'varchar', length: 100, nullable: true })
  horario!: string;

  @CreateDateColumn({ type: 'datetime' })
  creado_en!: Date;

  @UpdateDateColumn({ type: 'datetime' })
  actualizado_en!: Date;
}
