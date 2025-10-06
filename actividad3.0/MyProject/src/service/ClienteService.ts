import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Cliente } from "../entity/cliente";

export class ClienteService {
    private repository: Repository<Cliente>;

    constructor() {
        this.repository = AppDataSource.getRepository(Cliente);
    }

    async create(data: Partial<Cliente>): Promise<Cliente> {
        const cliente = this.repository.create(data);
        return await this.repository.save(cliente);
    }

    async findAll(): Promise<Cliente[]> {
        return await this.repository.find({
            relations: ["usuario"]
        });
    }

    async findOne(id: number): Promise<Cliente | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["usuario"]
        });
    }

    async update(id: number, data: Partial<Cliente>): Promise<Cliente | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
