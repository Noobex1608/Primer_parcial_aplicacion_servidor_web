import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Entidad Pago - Representa los pagos del sistema
 */
@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  factura_id!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monto!: number;

  @Column({ type: 'varchar', length: 100 })
  metodo_pago!: string;

  @Column({ type: 'int' })
  estado_id!: number;

  @Column({ type: 'varchar', length: 50 })
  fecha_pago!: string;

  @Column({ type: 'varchar', length: 50 })
  creado_en!: string;
}

/**
 * Entidad MetodoPago - Representa los métodos de pago disponibles
 */
@Entity('metodos_pago')
export class MetodoPago {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  descripcion?: string;
}
