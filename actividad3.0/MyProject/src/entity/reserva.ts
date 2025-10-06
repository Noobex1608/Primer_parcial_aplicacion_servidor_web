import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
// Cliente y Evento no están implementados en src/entity; usar placeholders temporales.
import { Local } from "./Local";
import { Factura } from "./factura";
import { Mesa } from "./Local";
import { Servicio } from "./Servicio";

@Entity("reservas")
export class Reserva {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "cliente_id" })
    cliente_id: number;

    @Column({ name: "local_id" })
    local_id: number;

    @Column({ name: "evento_id", nullable: true })
    evento_id?: number;

    @Column({ type: "datetime" })
    fecha_reserva: Date;

    @Column({ name: "cantidad_personas" })
    cantidad_personas: number;

    @Column({ name: "estado_id" })
    estado_id: number;

    @CreateDateColumn({ name: "creado_en" })
    creado_en: Date;

    @UpdateDateColumn({ name: "actualizado_en" })
    actualizado_en: Date;

    // Relaciones
    // Relación hacia Cliente (entidad faltante) - Comentado para evitar errores de TypeORM
    // @ManyToOne(() => (Object as any), (cliente: any) => cliente.reservas)
    // @JoinColumn({ name: "cliente_id" })
    // cliente: any;

    @ManyToOne(() => Local, (local) => local.reservas)
    @JoinColumn({ name: "local_id" })
    local: Local;

    // Relación hacia Evento (entidad faltante) - Comentado para evitar errores de TypeORM
    // @ManyToOne(() => (Object as any), (evento: any) => evento.reservas, { nullable: true })
    // @JoinColumn({ name: "evento_id" })
    // evento?: any;

    @OneToMany(() => Factura, (factura) => factura.reserva)
    facturas: Factura[];

    @OneToMany(() => ReservaMesaAsignacion, (mesa) => mesa.reserva)
    mesas_asignadas: ReservaMesaAsignacion[];

    @OneToMany(() => ReservaServicio, (servicio) => servicio.reserva)
    servicios: ReservaServicio[];
}

@Entity("reserva_mesa_asignaciones")
export class ReservaMesaAsignacion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "reserva_id" })
    reserva_id: number;

    @Column({ name: "mesa_id" })
    mesa_id: number;

    @Column({ type: "varchar", length: 100 })
    nombre: string;

    @Column({ type: "varchar", length: 10 })
    sexo: string;

    @Column({ type: "int" })
    edad: number;

    @Column({ name: "cantidad_personas" })
    cantidad_personas: number;

    @CreateDateColumn({ name: "creado_en" })
    creado_en: Date;

    @UpdateDateColumn({ name: "actualizado_en" })
    actualizado_en: Date;

    // Relaciones
    @ManyToOne(() => Reserva, (reserva) => reserva.mesas_asignadas)
    @JoinColumn({ name: "reserva_id" })
    reserva: Reserva;

    @ManyToOne(() => Mesa, (mesa) => mesa.asignaciones)
    @JoinColumn({ name: "mesa_id" })
    mesa: Mesa;
}

@Entity("reserva_servicios")
export class ReservaServicio {

    @Column({ name: "reserva_id", primary: true })
    reserva_id: number;

    @Column({ name: "servicio_id", primary: true })
    servicio_id: number;

    @Column({ type: "int" })
    cantidad: number;

    // Relaciones
    @ManyToOne(() => Reserva, (reserva) => reserva.servicios)
    @JoinColumn({ name: "reserva_id" })
    reserva: Reserva;

    @ManyToOne(() => Servicio, (servicio) => servicio.reservas)
    @JoinColumn({ name: "servicio_id" })
    servicio: Servicio;
}

// Entidades relacionadas están definidas en sus propios archivos (Cliente, Local, Evento, Mesa, Servicio)