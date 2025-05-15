import { BeneficiaryEntity } from '@/domain/entities';
import { beneficiary } from '@prisma/client';

export class BeneficiaryMapper {
  static toDomain(beneficiary: beneficiary): BeneficiaryEntity {
    return new BeneficiaryEntity({
      email: beneficiary.email,
      name: beneficiary.name,
      createdBy: beneficiary.createdBy,
      location: beneficiary.location,
      necessities: beneficiary.necessities,
      id: beneficiary.id,
    });
  }

  static toDatabase(beneficiary: BeneficiaryEntity): beneficiary {
    return {
      email: beneficiary.email,
      name: beneficiary.name,
      location: beneficiary.location,
      necessities: beneficiary.necessities,
      id: beneficiary.id,
      createdBy: beneficiary.createdBy,
    };
  }
}
