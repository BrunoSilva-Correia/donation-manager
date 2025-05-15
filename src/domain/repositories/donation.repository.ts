import { DonationEntity } from '../entities';
import { IRepository } from './repository';

export abstract class DonationRepository
  implements IRepository<DonationEntity>
{
  abstract findById(id: string): Promise<DonationEntity | null>;
  abstract findAll(): Promise<DonationEntity[]>;
  abstract create(data: DonationEntity): Promise<DonationEntity>;
  abstract update(id: string, data: DonationEntity): Promise<DonationEntity>;
  abstract delete(id: string): Promise<void>;
}
