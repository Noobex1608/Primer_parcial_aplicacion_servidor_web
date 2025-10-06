import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario_id: number;

  @Column()
  nombre_completo: string;

  @Column({ nullable: true })
  direccion?: string;

  @Column({ type: "date" })
  fecha_registro: Date;

  @Column({ default: true })
  activo: boolean;

  @CreateDateColumn()
  creado_en: Date;

  @UpdateDateColumn()
  actualizado_en: Date;

  // Relaciones
  @OneToOne(() => Usuario, (usuario) => usuario.cliente)
  @JoinColumn({ name: "usuario_id" })
  usuario?: Usuario;
}