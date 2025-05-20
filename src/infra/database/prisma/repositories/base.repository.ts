import { randomUUID } from 'crypto';
import { PrismaService } from '../prisma.service';

export abstract class BasePrismaRepository<
  DomainEntity,
  PrismaModel extends { id: string },
  InputData,
> {
  protected abstract model: {
    findUnique(args: {
      where: { id?: string; email?: string };
    }): Promise<PrismaModel | null>;
    findMany(): Promise<PrismaModel[]>;
    create(args: { data: InputData }): Promise<PrismaModel>;
    update(args: {
      where: { id: string };
      data: InputData;
    }): Promise<PrismaModel>;
    delete(args: { where: { id: string } }): Promise<PrismaModel>;
  };

  protected abstract mapper: {
    toDomain(data: PrismaModel): DomainEntity;
    toDatabase(entity: DomainEntity): InputData & { id?: string };
  };

  constructor(protected readonly prisma: PrismaService) {}

  async findById(id: string): Promise<DomainEntity | null> {
    console.log(id);
    const data = await this.model.findUnique({ where: { id } });
    return data ? this.mapper.toDomain(data) : null;
  }

  async findByEmail(email: string): Promise<DomainEntity | null> {
    const data = await this.model.findUnique({ where: { email } });
    return data ? this.mapper.toDomain(data) : null;
  }

  async findAll(): Promise<DomainEntity[] | null> {
    const data = await this.model.findMany();
    return data.length ? data.map(this.mapper.toDomain) : null;
  }

  async create(entity: DomainEntity): Promise<DomainEntity> {
    const data = this.mapper.toDatabase(entity);
    data.id = data.id ?? randomUUID();
    const created = await this.model.create({ data });
    return this.mapper.toDomain(created);
  }

  async update(id: string, entity: DomainEntity): Promise<DomainEntity> {
    const data = this.mapper.toDatabase(entity);
    const updated = await this.model.update({ where: { id }, data });
    return this.mapper.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.model.delete({ where: { id } });
  }
}
