import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
// Administrador/Usuario no implementados en src/entity; usar placeholder temporalmente

@Entity("reportes")
export class Reporte {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "administrador_id" })
    administrador_id: number;

    @Column({ type: "varchar", length: 200 })
    titulo: string;

    @Column({ type: "text" })
    descripcion: string;

    @Column({ type: "datetime" })
    fecha_generacion: Date;

    @CreateDateColumn({ name: "creado_en" })
    creado_en: Date;

    @UpdateDateColumn({ name: "actualizado_en" })
    actualizado_en: Date;

    // Relaciones
    // Relación hacia Administrador (entidad faltante) - Comentado para evitar errores de TypeORM
    // @ManyToOne(() => (Object as any), (administrador: any) => administrador.reportes)
    // @JoinColumn({ name: "administrador_id" })
    // administrador: any;
}