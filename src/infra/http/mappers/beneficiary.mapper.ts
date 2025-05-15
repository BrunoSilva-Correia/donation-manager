import { BeneficiaryEntity } from '@/domain/entities';
import { BeneficiaryDto } from '../dtos';

export class BeneficiaryMapper {
  static toHttp(beneficiary: BeneficiaryEntity): BeneficiaryDto {
    return {
      id: beneficiary.id,
      email: beneficiary.email,
      name: beneficiary.name,
      location: beneficiary.location,
      necessities: beneficiary.necessities,
      createdBy: beneficiary.createdBy,
    };
  }

  static toDomain(beneficiary: Partial<BeneficiaryDto>): BeneficiaryEntity {
    return new BeneficiaryEntity({
      id: beneficiary.id,
      email: beneficiary.email,
      name: beneficiary.name,
      location: beneficiary.location,
      necessities: beneficiary.necessities,
      createdBy: beneficiary.createdBy,
    });
  }
}
