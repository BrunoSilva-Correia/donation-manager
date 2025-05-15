import { DonationEntity } from '@/domain/entities';
import { donation } from '@prisma/client';

export class DonationMapper {
  static toDomain(donation: donation): DonationEntity {
    return new DonationEntity({
      description: donation.description,
      donatorId: donation.donatorId,
      expiryAt: donation.expiryAt,
      location: donation.location,
      id: donation.id,
    });
  }

  static toDatabase(donation: DonationEntity): donation {
    return {
      description: donation.description,
      donatorId: donation.donatorId,
      expiryAt: donation.expiryAt,
      location: donation.location,
      id: donation.id,
    };
  }
}
