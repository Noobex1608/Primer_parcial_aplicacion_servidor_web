import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Estado {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    tipo: string


}
