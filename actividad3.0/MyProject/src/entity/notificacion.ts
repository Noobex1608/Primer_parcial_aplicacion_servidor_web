import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
// Nota: la entidad `Usuario` no está implementada en `src/entity` — usamos cualquier placeholder

@Entity("notificaciones")
export class Notificacion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "usuario_id" })
    usuario_id: number;

    @Column({ type: "text" })
    mensaje: string;

    @Column({ type: "varchar", length: 50 })
    tipo: string;

    @Column({ type: "boolean", default: false })
    leida: boolean;

    @Column({ type: "datetime" })
    enviada_en: Date;

    @CreateDateColumn({ name: "creado_en" })
    creado_en: Date;

    @UpdateDateColumn({ name: "actualizado_en" })
    actualizado_en: Date;

    // Relaciones
    // Relación hacia Usuario (entidad faltante) - Comentado para evitar errores de TypeORM
    // @ManyToOne(() => (Object as any), (usuario: any) => usuario.notificaciones)
    // @JoinColumn({ name: "usuario_id" })
    // usuario: any;
}