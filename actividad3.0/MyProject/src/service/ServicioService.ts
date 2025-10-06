import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Servicio } from "../entity/Servicio";

export class ServicioService {
    private repository: Repository<Servicio>;

    constructor() {
        this.repository = AppDataSource.getRepository(Servicio);
    }

    async create(data: Partial<Servicio>): Promise<Servicio> {
        const servicio = this.repository.create(data);
        return await this.repository.save(servicio);
    }

    async findAll(): Promise<Servicio[]> {
        return await this.repository.find({
            relations: ["local", "reservas"]
        });
    }

    async findOne(id: number): Promise<Servicio | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["local", "reservas"]
        });
    }

    async update(id: number, data: Partial<Servicio>): Promise<Servicio | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
