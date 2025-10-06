import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Mesa } from "../entity/Local";

export class MesaService {
    private repository: Repository<Mesa>;

    constructor() {
        this.repository = AppDataSource.getRepository(Mesa);
    }

    async create(data: Partial<Mesa>): Promise<Mesa> {
        const mesa = this.repository.create(data);
        return await this.repository.save(mesa);
    }

    async findAll(): Promise<Mesa[]> {
        return await this.repository.find({
            relations: ["asignaciones"]
        });
    }

    async findOne(id: number): Promise<Mesa | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["asignaciones"]
        });
    }

    async update(id: number, data: Partial<Mesa>): Promise<Mesa | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
