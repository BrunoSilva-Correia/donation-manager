import { BeneficiaryEntity } from '../entities';
import { IRepository } from './repository';

export abstract class BeneficiaryRepository
  implements IRepository<BeneficiaryEntity>
{
  abstract findById(id: string): Promise<BeneficiaryEntity | null>;
  abstract findByEmail(email: string): Promise<BeneficiaryEntity | null>;
  abstract findAll(): Promise<BeneficiaryEntity[]>;
  abstract create(data: BeneficiaryEntity): Promise<BeneficiaryEntity>;
  abstract update(
    id: string,
    data: BeneficiaryEntity,
  ): Promise<BeneficiaryEntity>;
  abstract delete(id: string): Promise<void>;
}
