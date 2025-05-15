import { DonatorEntity } from '@/domain/entities';
import { donator } from '@prisma/client';

export class DonatorMapper {
  static toDomain(donator: donator): DonatorEntity {
    return new DonatorEntity({
      email: donator.email,
      name: donator.name,
      createdBy: donator.createdBy,
      phone: donator.phone,
      id: donator.id,
    });
  }

  static toDatabase(donator: DonatorEntity): donator {
    return {
      email: donator.email,
      name: donator.name,
      phone: donator.phone,
      id: donator.id,
      createdBy: donator.createdBy,
    };
  }
}
