import { RequestEntity } from '../entities';
import { IRepository } from './repository';

export abstract class RequestRepository implements IRepository<RequestEntity> {
  abstract findById(id: string): Promise<RequestEntity | null>;
  // abstract findByDonatorId(id: string): Promise<RequestEntity[] | null>;
  // abstract findByBeneficiaryId(id: string): Promise<RequestEntity[] | null>;
  abstract findAll(): Promise<RequestEntity[]>;
  abstract create(data: RequestEntity): Promise<RequestEntity>;
  abstract update(id: string, data: RequestEntity): Promise<RequestEntity>;
  abstract delete(id: string): Promise<void>;
}
