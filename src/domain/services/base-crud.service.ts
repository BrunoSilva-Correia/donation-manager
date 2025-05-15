import { BadRequestException, NotFoundException } from '@nestjs/common';

export abstract class BaseCrudService<T> {
  protected abstract repository: {
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    create(data: T): Promise<T>;
    update(id: string, data: T): Promise<T>;
    delete(id: string): Promise<void>;
    findByEmail?(email: string): Promise<T | null>;
  };
  protected abstract entityName: string;

  async findById(id: string) {
    const item = await this.repository.findById(id);

    if (!item) {
      throw new NotFoundException(`${this.entityName} not found`);
    }

    return item;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  protected async create(data: T) {
    return await this.repository.create(data);
  }

  protected async update(id: string, data: Partial<T>) {
    const item = await this.findById(id);
    (item as any).updateProps?.(data);
    return await this.repository.update(id, item);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.repository.delete(id);
  }

  protected async validateEmail(email: string) {
    if (!this.repository.findByEmail) return;

    const existing = await this.repository.findByEmail(email);
    if (existing) {
      throw new BadRequestException('Email already used');
    }
  }

  // protected async validateCreatedBy(createdBy: string): Promise<void> {}
}
