import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Entidad Reserva - Representa las reservas del sistema
 */
@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  cliente_id!: number;

  @Column({ type: 'int' })
  evento_id!: number;

  @Column({ type: 'int' })
  numero_personas!: number;

  @Column({ type: 'int' })
  estado_id!: number;

  @Column({ type: 'varchar', length: 50 })
  fecha_reserva!: string;

  @Column({ type: 'varchar', length: 50 })
  creado_en!: string;

  @Column({ type: 'varchar', length: 50 })
  actualizado_en!: string;
}

/**
 * Entidad ReservaMesaAsignacion - Representa las asignaciones de mesas para reservas
 */
@Entity('reserva_mesa_asignaciones')
export class ReservaMesaAsignacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  reserva_id!: number;

  @Column({ type: 'int' })
  mesa_id!: number;

  @Column({ type: 'varchar', length: 200 })
  nombre!: string;

  @Column({ type: 'varchar', length: 10 })
  sexo!: string;

  @Column({ type: 'int' })
  edad!: number;

  @Column({ type: 'int' })
  cantidad_personas!: number;

  @Column({ type: 'varchar', length: 50 })
  creado_en!: string;

  @Column({ type: 'varchar', length: 50 })
  actualizado_en!: string;
}

/**
 * Entidad ReservaServicio - Representa los servicios asociados a las reservas
 */
@Entity('reserva_servicios')
export class ReservaServicio {
  @Column({ type: 'int', primary: true })
  reserva_id!: number;

  @Column({ type: 'int', primary: true })
  servicio_id!: number;

  @Column({ type: 'int' })
  cantidad!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio_unitario!: number;
}
