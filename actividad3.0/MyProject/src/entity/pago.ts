import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Factura } from "./factura";

@Entity("metodos_pago")
export class MetodoPago {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    nombre: string;

    @Column({ type: "text", nullable: true })
    descripcion: string;

    // Relaciones
    @OneToMany(() => Pago, (pago) => pago.metodo_pago)
    pagos: Pago[];
}

@Entity("pagos")
export class Pago {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "factura_id" })
    factura_id: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    monto: number;

    @Column({ type: "datetime" })
    fecha_pago: Date;

    @Column({ name: "metodo_pago_id" })
    metodo_pago_id: number;

    @Column({ name: "estado_id" })
    estado_id: number;

    @CreateDateColumn({ name: "creado_en" })
    creado_en: Date;

    @UpdateDateColumn({ name: "actualizado_en" })
    actualizado_en: Date;

    // Relaciones
    @ManyToOne(() => Factura, (factura) => factura.pagos)
    @JoinColumn({ name: "factura_id" })
    factura: Factura;

    @ManyToOne(() => MetodoPago, (metodo) => metodo.pagos)
    @JoinColumn({ name: "metodo_pago_id" })
    metodo_pago: MetodoPago;
}