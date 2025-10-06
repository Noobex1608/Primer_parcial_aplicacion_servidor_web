import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Pago } from "../entity/pago";

export class PagoService {
    private repository: Repository<Pago>;

    constructor() {
        this.repository = AppDataSource.getRepository(Pago);
    }

    async create(data: Partial<Pago>): Promise<Pago> {
        const pago = this.repository.create(data);
        return await this.repository.save(pago);
    }

    async findAll(): Promise<Pago[]> {
        return await this.repository.find({
            relations: ["factura", "metodo_pago"]
        });
    }

    async findOne(id: number): Promise<Pago | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["factura", "metodo_pago"]
        });
    }

    async update(id: number, data: Partial<Pago>): Promise<Pago | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
