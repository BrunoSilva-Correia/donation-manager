import { Injectable } from '@nestjs/common';
import { DonatorRepository } from '../repositories';
import { DonatorEntity } from '../entities';
import { UserService } from './user.service';
import { BaseCrudService } from './base-crud.service';

@Injectable()
export class DonatorService extends BaseCrudService<DonatorEntity> {
  protected repository = this._repository;
  protected entityName = 'Donator';

  constructor(
    private readonly _repository: DonatorRepository,
    private readonly userService: UserService,
  ) {
    super();
  }

  async create(data: DonatorEntity) {
    await this.validateEmail(data.email);
    await this.validateCreatedBy(data.createdBy);
    return await super.create(data);
  }

  async update(id: string, data: Partial<DonatorEntity>) {
    await this.validateEmail(data.email);
    await this.validateCreatedBy(data.createdBy);
    return await super.update(id, data);
  }

  protected async validateCreatedBy(createdBy: string): Promise<void> {
    await this.userService.findById(createdBy);
  }
}
