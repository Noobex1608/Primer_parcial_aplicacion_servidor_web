import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Notificacion } from "../entity/notificacion";

export class NotificacionService {
    private repository: Repository<Notificacion>;

    constructor() {
        this.repository = AppDataSource.getRepository(Notificacion);
    }

    async create(data: Partial<Notificacion>): Promise<Notificacion> {
        const notificacion = this.repository.create(data);
        return await this.repository.save(notificacion);
    }

    async findAll(): Promise<Notificacion[]> {
        return await this.repository.find();
    }

    async findOne(id: number): Promise<Notificacion | null> {
        return await this.repository.findOne({
            where: { id }
        });
    }

    async update(id: number, data: Partial<Notificacion>): Promise<Notificacion | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
