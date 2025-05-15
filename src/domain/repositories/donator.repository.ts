import { DonatorEntity } from '../entities';
import { IRepository } from './repository';

export abstract class DonatorRepository implements IRepository<DonatorEntity> {
  abstract findById(id: string): Promise<DonatorEntity | null>;
  abstract findByEmail(email: string): Promise<DonatorEntity | null>;
  abstract findAll(): Promise<DonatorEntity[]>;
  abstract create(data: DonatorEntity): Promise<DonatorEntity>;
  abstract update(id: string, data: DonatorEntity): Promise<DonatorEntity>;
  abstract delete(id: string): Promise<void>;
}
