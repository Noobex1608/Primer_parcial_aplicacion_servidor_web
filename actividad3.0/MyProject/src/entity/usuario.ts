import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Administrador } from "./administrador";
import { Cliente } from "./cliente";
import { Evento } from "./eventos";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  contraseña: string;

  @Column()
  rol: string;

  @Column({ nullable: true })
  telefono?: string;

  @CreateDateColumn()
  creado_en: Date;

  @UpdateDateColumn()
  actualizado_en: Date;

  // Relaciones
  @OneToOne(() => Cliente, (cliente) => cliente.usuario)
  cliente?: Cliente;

  @OneToOne(() => Administrador, (administrador) => administrador.usuario)
  administrador?: Administrador;

  @OneToMany(() => Evento, (evento) => evento.organizador)
  eventos?: Evento[];
}