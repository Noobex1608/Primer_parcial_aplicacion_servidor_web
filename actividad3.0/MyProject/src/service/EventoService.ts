import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Evento } from "../entity/eventos";

export class EventoService {
    private repository: Repository<Evento>;

    constructor() {
        this.repository = AppDataSource.getRepository(Evento);
    }

    async create(data: Partial<Evento>): Promise<Evento> {
        const evento = this.repository.create(data);
        return await this.repository.save(evento);
    }

    async findAll(): Promise<Evento[]> {
        return await this.repository.find({
            relations: ["organizador"]
        });
    }

    async findOne(id: number): Promise<Evento | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["organizador"]
        });
    }

    async update(id: number, data: Partial<Evento>): Promise<Evento | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
