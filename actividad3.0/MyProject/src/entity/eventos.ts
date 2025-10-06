import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column({ type: "datetime" })
  fecha_inicio: Date;

  @Column({ type: "datetime" })
  fecha_fin: Date;

  @Column({ type: "text" })
  descripcion: string;

  @Column()
  organizador_id: number;

  @CreateDateColumn()
  creado_en: Date;

  @UpdateDateColumn()
  actualizado_en: Date;

  // Relaciones
  @ManyToOne(() => Usuario, (usuario) => usuario.eventos)
  @JoinColumn({ name: "organizador_id" })
  organizador?: Usuario;
}