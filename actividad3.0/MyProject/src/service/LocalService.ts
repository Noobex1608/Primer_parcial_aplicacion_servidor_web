import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Local } from "../entity/Local";

export class LocalService {
    private repository: Repository<Local>;

    constructor() {
        this.repository = AppDataSource.getRepository(Local);
    }

    async create(data: Partial<Local>): Promise<Local> {
        const local = this.repository.create(data);
        return await this.repository.save(local);
    }

    async findAll(): Promise<Local[]> {
        return await this.repository.find({
            relations: ["reservas", "servicios"]
        });
    }

    async findOne(id: number): Promise<Local | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["reservas", "servicios"]
        });
    }

    async update(id: number, data: Partial<Local>): Promise<Local | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
