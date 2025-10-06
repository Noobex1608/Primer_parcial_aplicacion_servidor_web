import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Estado } from "../entity/Estado";

export class EstadoService {
    private repository: Repository<Estado>;

    constructor() {
        this.repository = AppDataSource.getRepository(Estado);
    }

    async create(data: Partial<Estado>): Promise<Estado> {
        const estado = this.repository.create(data);
        return await this.repository.save(estado);
    }

    async findAll(): Promise<Estado[]> {
        return await this.repository.find();
    }

    async findOne(id: number): Promise<Estado | null> {
        return await this.repository.findOne({
            where: { id }
        });
    }

    async update(id: number, data: Partial<Estado>): Promise<Estado | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
