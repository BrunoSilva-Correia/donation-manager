import { Injectable } from '@nestjs/common';
import { BeneficiaryRepository } from '../repositories';
import { BeneficiaryEntity } from '../entities';
import { UserService } from './user.service';
import { BaseCrudService } from './base-crud.service';

@Injectable()
export class BeneficiaryService extends BaseCrudService<BeneficiaryEntity> {
  protected repository = this._repository;
  protected entityName = 'Beneficiary';

  constructor(
    private readonly _repository: BeneficiaryRepository,
    private readonly userService: UserService,
  ) {
    super();
  }

  async create(data: BeneficiaryEntity) {
    await this.validateEmail(data.email);
    await this.validateCreatedBy(data.createdBy);
    return await super.create(data);
  }

  async update(id: string, data: Partial<BeneficiaryEntity>) {
    await this.validateEmail(data.email);
    await this.validateCreatedBy(data.createdBy);
    return await super.update(id, data);
  }

  protected async validateCreatedBy(createdBy: string): Promise<void> {
    if (!createdBy) {
      return;
    }
    await this.userService.findById(createdBy);
  }
}
