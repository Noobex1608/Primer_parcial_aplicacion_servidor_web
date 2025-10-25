import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Entidad Notificacion - Representa las notificaciones del sistema
 */
@Entity('notificaciones')
export class Notificacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  usuario_id!: number;

  @Column({ type: 'varchar', length: 200 })
  titulo!: string;

  @Column({ type: 'text' })
  contenido!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tipo?: string;

  @Column({ type: 'varchar', length: 50 })
  enviado_en!: string;
}
