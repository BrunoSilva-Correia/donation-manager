import { DonationEntity } from '@/domain/entities';
import { DonationDto } from '../dtos';

export class DonationMapper {
  static toHttp(donation: DonationEntity): DonationDto {
    return {
      id: donation.id,
      description: donation.description,
      donatorId: donation.donatorId,
      location: donation.location,
      expiryAt: donation.expiryAt,
    };
  }

  static toDomain(donation: Partial<DonationDto>): DonationEntity {
    return new DonationEntity({
      id: donation.id,
      description: donation.description,
      donatorId: donation.donatorId,
      location: donation.location,
      expiryAt: donation.expiryAt,
    });
  }
}
