import { Repository } from "@/core/base/repository";
import { CountryEntity } from "@/core/domain/entities";

import { PrismaService } from "./prisma.service";

export class CountriesPrismaRepostiory extends Repository<CountryEntity> {
    create(data: CountryEntity): Promise<CountryEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: CountryEntity): Promise<CountryEntity> {
        throw new Error("Method not implemented.");
    }
    patch(id: number, data: Partial<CountryEntity>): Promise<CountryEntity> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<CountryEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<CountryEntity[]> {
        throw new Error("Method not implemented.");
    }
    getOne(filter: Partial<CountryEntity>): Promise<CountryEntity> {
        throw new Error("Method not implemented.");
    }
    getMany(filter: Partial<CountryEntity>): Promise<CountryEntity[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService) {
        super();
    }
}