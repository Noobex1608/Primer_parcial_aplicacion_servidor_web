import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Entidad Usuario - Representa los usuarios del sistema
 */
@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 255 })
  contraseña!: string;

  @Column({ type: 'varchar', length: 50, default: 'cliente' })
  rol!: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  telefono!: string;

  @Column({ type: 'boolean', default: true })
  activo!: boolean;

  @CreateDateColumn({ type: 'datetime' })
  creado_en!: Date;

  @UpdateDateColumn({ type: 'datetime' })
  actualizado_en!: Date;
}
