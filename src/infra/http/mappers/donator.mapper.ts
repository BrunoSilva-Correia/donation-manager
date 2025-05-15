import { DonatorEntity } from '@/domain/entities';
import { DonatorDto } from '../dtos';

export class DonatorMapper {
  static toHttp(user: DonatorEntity): DonatorDto {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdBy: user.createdBy,
      phone: user.phone,
    };
  }

  static toDomain(user: Partial<DonatorDto>): DonatorEntity {
    return new DonatorEntity({
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      createdBy: user.createdBy,
    });
  }
}
