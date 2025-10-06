import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Blog } from "../entity/blog";

export class BlogService {
    private repository: Repository<Blog>;

    constructor() {
        this.repository = AppDataSource.getRepository(Blog);
    }

    async create(data: Partial<Blog>): Promise<Blog> {
        const blog = this.repository.create(data);
        return await this.repository.save(blog);
    }

    async findAll(): Promise<Blog[]> {
        return await this.repository.find({
            relations: ["administrador"]
        });
    }

    async findOne(id: number): Promise<Blog | null> {
        return await this.repository.findOne({
            where: { id },
            relations: ["administrador"]
        });
    }

    async update(id: number, data: Partial<Blog>): Promise<Blog | null> {
        await this.repository.update(id, data);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
