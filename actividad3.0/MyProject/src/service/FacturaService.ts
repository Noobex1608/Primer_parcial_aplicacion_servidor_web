import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Factura } from "../entity/factura";

export class FacturaService {
    private repository: Repository<Factura>;

    constructor() {
        this.repository = AppDataSource.getRepository(Factura);
    }

    async create(data: Partial<Factura>): Promise<Factura> {
        const factura = this.repository.create(data);
        return await this.repository.save(factura);
    }

    async findAll(): Promise<Factura[]> {
        return await this.repository.find({
            relations: ["reserva", "pagos", "detalles"]
        });
    }

    async findOne(id: number): Promise<Factura | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["reserva", "pagos", "detalles"]
        });
    }

    async update(id: number, data: Partial<Factura>): Promise<Factura | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
