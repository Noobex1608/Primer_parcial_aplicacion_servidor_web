import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Reserva, ReservaMesaAsignacion } from "./reserva"
import { Servicio } from "./Servicio"

@Entity()
export class Local {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    direccion: string

    @Column()
    ciudad: string

    @Column()
    telefono: string

    @Column()
    capacidad: number

    @Column()
    estadoId: number

    @CreateDateColumn({ name: 'creado_en' })
    creado_en: Date

    @UpdateDateColumn({ name: 'actualizado_en' })
    actualizado_en: Date;

    @OneToMany(() => Reserva, reserva => reserva.local)
    reservas?: Reserva[];

    @OneToMany(() => Servicio, servicio => servicio.local)
    servicios?: Servicio[];
}

@Entity()
export class Mesa {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    reservaId?: number

    @ManyToOne(() => Reserva, reserva => reserva.mesas_asignadas)
    reserva?: Reserva;

    @Column()
    numero: number

    @Column()
    tipo: string

    @Column()
    estado_id: number

    @CreateDateColumn({ name: 'creado_en' })
    creado_en: Date

    @UpdateDateColumn({ name: 'actualizado_en' })
    actualizado_en: Date;

    @OneToMany(() => ReservaMesaAsignacion, asignacion => asignacion.mesa)
    asignaciones?: ReservaMesaAsignacion[];
}
