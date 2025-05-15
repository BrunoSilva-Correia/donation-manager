import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { UserEntity } from '../entities';
import { BaseCrudService } from './base-crud.service';
import { hashPassword } from '@/utils/hash-password';

@Injectable()
export class UserService extends BaseCrudService<UserEntity> {
  protected repository = this._repository;
  protected entityName = 'User';

  constructor(private readonly _repository: UserRepository) {
    super();
  }

  async create(data: UserEntity) {
    await this.validateEmail(data.email);
    data.password = await hashPassword(data.password);
    return await this.repository.create(data);
  }

  async findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  async update(id: string, data: Partial<UserEntity>) {
    const user = await this.findById(id);
    if (data.email) {
      await this.validateEmail(data.email);
    }
    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    user.updateProps(data);
    return await this.repository.update(id, user);
  }
}
