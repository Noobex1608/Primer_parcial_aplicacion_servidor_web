import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Entidad Factura - Representa las facturas del sistema
 */
@Entity('facturas')
export class Factura {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  reserva_id!: number;

  @Column({ type: 'varchar', length: 50 })
  fecha_emision!: string;

  @Column({ type: 'int' })
  estado_id!: number;

  @Column({ type: 'varchar', length: 50 })
  creado_en!: string;

  @Column({ type: 'varchar', length: 50 })
  actualizado_en!: string;
}

/**
 * Entidad DetalleFactura - Representa los detalles de las facturas
 */
@Entity('detalle_facturas')
export class DetalleFactura {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  factura_id!: number;

  @Column({ type: 'int' })
  servicio_id!: number;

  @Column({ type: 'varchar', length: 500 })
  descripcion!: string;

  @Column({ type: 'int' })
  cantidad!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio_unitario!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total!: number;
}
