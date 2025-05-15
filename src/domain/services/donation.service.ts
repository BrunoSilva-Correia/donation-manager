import { Injectable } from '@nestjs/common';
import { DonationRepository } from '../repositories';
import { DonationEntity } from '../entities';
import { BaseCrudService } from './base-crud.service';
import { DonatorService } from './donator.service';

@Injectable()
export class DonationService extends BaseCrudService<DonationEntity> {
  protected repository = this._repository;
  protected entityName = 'Donation';

  constructor(
    private readonly _repository: DonationRepository,
    private readonly donatorService: DonatorService,
  ) {
    super();
  }

  async create(data: DonationEntity) {
    await this.validateDonatorId(data.donatorId);
    return await super.create(data);
  }

  async update(id: string, data: Partial<DonationEntity>) {
    await this.validateDonatorId(data.donatorId);
    return await super.update(id, data);
  }

  protected async validateDonatorId(donatorId: string): Promise<void> {
    await this.donatorService.findById(donatorId);
  }
}
