import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Local } from "./Local"
import { ReservaServicio } from "./reserva"
import { DetalleFactura } from "./factura"

@Entity()
export class Servicio {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    descripcion: string

    @Column("decimal")
    precio: number

    @Column()
    tipo: string

    @Column()
    local_id: number

    @ManyToOne(() => Local, local => local.servicios)
    local?: Local;
    
    @Column()
    estado_id: number

    @CreateDateColumn({ name: 'creado_en' })
    creado_en: Date

    @UpdateDateColumn({ name: 'actualizado_en' })
    actualizado_en: Date


    @OneToMany(() => ReservaServicio, reservaServicio => reservaServicio.servicio)
    reservas?: ReservaServicio[];

    // Nota: DetalleFactura en 'factura.ts' no define la relación hacia Servicio actualmente,
    // por eso dejamos fuera la relación inversa aquí hasta que se implemente.

}
