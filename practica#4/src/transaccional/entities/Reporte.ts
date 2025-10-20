import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Entidad Reporte - Representa los reportes del sistema
 */
@Entity('reportes')
export class Reporte {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  administrador_id!: number;

  @Column({ type: 'varchar', length: 200 })
  titulo!: string;

  @Column({ type: 'text' })
  descripcion!: string;

  @Column({ type: 'text', nullable: true })
  datos?: string;

  @Column({ type: 'varchar', length: 50 })
  generado_en!: string;
}
