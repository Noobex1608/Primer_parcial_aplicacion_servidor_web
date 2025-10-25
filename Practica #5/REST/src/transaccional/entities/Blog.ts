import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Entidad Blog - Representa los artículos del blog del sistema
 */
@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  administrador_id!: number;

  @Column({ type: 'varchar', length: 200 })
  titulo!: string;

  @Column({ type: 'text' })
  contenido!: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  etiquetas?: string;

  @Column({ type: 'varchar', length: 50 })
  publicado_en!: string;

  @Column({ type: 'varchar', length: 50 })
  actualizado_en!: string;
}
