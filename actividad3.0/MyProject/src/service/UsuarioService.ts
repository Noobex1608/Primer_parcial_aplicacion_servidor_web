import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Usuario } from "../entity/usuario";

export class UsuarioService {
    private repository: Repository<Usuario>;

    constructor() {
        this.repository = AppDataSource.getRepository(Usuario);
    }

    async create(data: Partial<Usuario>): Promise<Usuario> {
        const usuario = this.repository.create(data);
        return await this.repository.save(usuario);
    }

    async findAll(): Promise<Usuario[]> {
        return await this.repository.find({
            relations: ["cliente", "administrador", "eventos"]
        });
    }

    async findOne(id: number): Promise<Usuario | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["cliente", "administrador", "eventos"]
        });
    }

    async update(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
