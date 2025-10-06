import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Reporte } from "../entity/reporte";

export class ReporteService {
    private repository: Repository<Reporte>;

    constructor() {
        this.repository = AppDataSource.getRepository(Reporte);
    }

    async create(data: Partial<Reporte>): Promise<Reporte> {
        const reporte = this.repository.create(data);
        return await this.repository.save(reporte);
    }

    async findAll(): Promise<Reporte[]> {
        return await this.repository.find();
    }

    async findOne(id: number): Promise<Reporte | null> {
        return await this.repository.findOne({
            where: { id }
        });
    }

    async update(id: number, data: Partial<Reporte>): Promise<Reporte | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
