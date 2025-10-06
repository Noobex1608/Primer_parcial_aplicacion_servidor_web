import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Administrador } from "../entity/administrador";

export class AdministradorService {
    private repository: Repository<Administrador>;

    constructor() {
        this.repository = AppDataSource.getRepository(Administrador);
    }

    async create(data: Partial<Administrador>): Promise<Administrador> {
        const administrador = this.repository.create(data);
        return await this.repository.save(administrador);
    }

    async findAll(): Promise<Administrador[]> {
        return await this.repository.find({
            relations: ["usuario", "blogs"]
        });
    }

    async findOne(id: number): Promise<Administrador | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["usuario", "blogs"]
        });
    }

    async update(id: number, data: Partial<Administrador>): Promise<Administrador | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
