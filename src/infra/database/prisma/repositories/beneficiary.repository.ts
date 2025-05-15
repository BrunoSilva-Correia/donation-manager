import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, beneficiary } from '@prisma/client';
import { BasePrismaRepository } from './base.repository';
import { BeneficiaryEntity } from '@/domain/entities';
import { BeneficiaryMapper } from '../mappers';
import { BeneficiaryRepository } from '@/domain/repositories';

@Injectable()
export class PrismaBeneficiaryRepository
  extends BasePrismaRepository<
    BeneficiaryEntity,
    beneficiary,
    Prisma.beneficiaryUncheckedCreateInput
  >
  implements BeneficiaryRepository
{
  protected model = this.prisma.beneficiary;
  protected mapper = BeneficiaryMapper;

  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
