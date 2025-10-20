import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Entidad Cliente - Representa a los clientes del sistema
 */
@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 200 })
  nombre_completo!: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  direccion!: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  telefono!: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email!: string;

  @Column({ type: 'boolean', default: true })
  activo!: boolean;

  @CreateDateColumn({ type: 'datetime' })
  creado_en!: Date;

  @UpdateDateColumn({ type: 'datetime' })
  actualizado_en!: Date;
}
