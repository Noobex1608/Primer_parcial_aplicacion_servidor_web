import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Reserva } from "./reserva";
import { Pago } from "./pago";

@Entity("facturas")
export class Factura {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "reserva_id" })
    reserva_id: number;

    @Column({ type: "date" })
    fecha_emision: Date;

    @Column({ name: "estado_id" })
    estado_id: number;

    @CreateDateColumn({ name: "creado_en" })
    creado_en: Date;

    @UpdateDateColumn({ name: "actualizado_en" })
    actualizado_en: Date;

    // Relaciones
    @ManyToOne(() => Reserva, (reserva) => reserva.facturas)
    @JoinColumn({ name: "reserva_id" })
    reserva: Reserva;

    @OneToMany(() => Pago, (pago) => pago.factura)
    pagos: Pago[];

    @OneToMany(() => DetalleFactura, (detalle) => detalle.factura)
    detalles: DetalleFactura[];
}

@Entity("detalle_facturas")
export class DetalleFactura {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "factura_id" })
    factura_id: number;

    @Column({ name: "servicio_id" })
    servicio_id: number;

    @Column({ type: "text" })
    descripcion: string;

    @Column({ type: "int" })
    cantidad: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    precio_unitario: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    total: number;

    // Relaciones
    @ManyToOne(() => Factura, (factura) => factura.detalles)
    @JoinColumn({ name: "factura_id" })
    factura: Factura;
}