import { Injectable } from '@nestjs/common';
import { RequestRepository } from '../repositories';
import { RequestEntity } from '../entities';
import { BaseCrudService } from './base-crud.service';
import { DonationService } from './donation.service';
import { BeneficiaryService } from './beneficiary.service';

@Injectable()
export class RequestService extends BaseCrudService<RequestEntity> {
  protected repository = this._repository;
  protected entityName = 'Request';

  constructor(
    private readonly _repository: RequestRepository,
    private readonly donationService: DonationService,
    private readonly beneficiaryService: BeneficiaryService,
  ) {
    super();
  }

  async create(data: RequestEntity) {
    await this.validateDonationId(data.donationId);
    await this.validateBeneficiaryId(data.beneficiaryId);
    return await super.create(data);
  }

  async update(id: string, data: Partial<RequestEntity>) {
    await this.validateDonationId(data.donationId);
    await this.validateBeneficiaryId(data.beneficiaryId);
    return await super.update(id, data);
  }

  protected async validateDonationId(donationId: string): Promise<void> {
    await this.donationService.findById(donationId);
  }

  protected async validateBeneficiaryId(donationId: string): Promise<void> {
    await this.beneficiaryService.findById(donationId);
  }
}
