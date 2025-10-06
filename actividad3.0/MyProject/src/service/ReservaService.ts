import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Reserva } from "../entity/reserva";

export class ReservaService {
    private repository: Repository<Reserva>;

    constructor() {
        this.repository = AppDataSource.getRepository(Reserva);
    }

    async create(data: Partial<Reserva>): Promise<Reserva> {
        const reserva = this.repository.create(data);
        return await this.repository.save(reserva);
    }

    async findAll(): Promise<Reserva[]> {
        return await this.repository.find({
            relations: ["local", "facturas", "mesas_asignadas", "servicios"]
        });
    }

    async findOne(id: number): Promise<Reserva | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["local", "facturas", "mesas_asignadas", "servicios"]
        });
    }

    async update(id: number, data: Partial<Reserva>): Promise<Reserva | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
