import { UserEntity } from '../entities';
import { IRepository } from './repository';

export abstract class UserRepository implements IRepository<UserEntity> {
  abstract findById(id: string): Promise<UserEntity | null>;
  abstract findByEmail(email: string): Promise<UserEntity | null>;
  abstract findAll(): Promise<UserEntity[]>;
  abstract create(data: UserEntity): Promise<UserEntity>;
  abstract update(id: string, data: UserEntity): Promise<UserEntity>;
  abstract delete(id: string): Promise<void>;
}
