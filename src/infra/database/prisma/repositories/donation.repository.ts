import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, donation } from '@prisma/client';
import { BasePrismaRepository } from './base.repository';
import { DonationEntity } from '@/domain/entities';
import { DonationMapper } from '../mappers';
import { DonationRepository } from '@/domain/repositories';

@Injectable()
export class PrismaDonationRepository
  extends BasePrismaRepository<
    DonationEntity,
    donation,
    Prisma.donationUncheckedCreateInput
  >
  implements DonationRepository
{
  protected model = this.prisma.donation;
  protected mapper = DonationMapper;

  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
