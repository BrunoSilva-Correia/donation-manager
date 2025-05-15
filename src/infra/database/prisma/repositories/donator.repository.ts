import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, donator } from '@prisma/client';
import { BasePrismaRepository } from './base.repository';
import { DonatorEntity } from '@/domain/entities';
import { DonatorMapper } from '../mappers';
import { DonatorRepository } from '@/domain/repositories';

@Injectable()
export class PrismaDonatorRepository
  extends BasePrismaRepository<
    DonatorEntity,
    donator,
    Prisma.donatorUncheckedCreateInput
  >
  implements DonatorRepository
{
  protected model = this.prisma.donator;
  protected mapper = DonatorMapper;

  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
