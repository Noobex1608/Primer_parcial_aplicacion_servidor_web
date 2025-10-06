import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Blog } from "./blog";
import { Usuario } from "./usuario";

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario_id: number;

  @CreateDateColumn()
  creado_en: Date;

  @UpdateDateColumn()
  actualizado_en: Date;

  // Relaciones
  @OneToOne(() => Usuario, (usuario) => usuario.administrador)
  @JoinColumn({ name: "usuario_id" })
  usuario?: Usuario;

  @OneToMany(() => Blog, (blog) => blog.administrador)
  blogs?: Blog[];
}