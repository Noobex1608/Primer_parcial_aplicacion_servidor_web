import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Administrador } from "./administrador";

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  administrador_id: number;

  @Column()
  titulo: string;

  @Column({ type: "text" })
  contenido: string;

  @Column({ nullable: true })
  etiquetas?: string;

  @CreateDateColumn()
  publicado_en: Date;

  @UpdateDateColumn()
  actualizado_en: Date;

  // Relaciones
  @ManyToOne(() => Administrador, (administrador) => administrador.blogs)
  @JoinColumn({ name: "administrador_id" })
  administrador?: Administrador;
}