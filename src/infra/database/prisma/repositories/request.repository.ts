import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, request } from '@prisma/client';
import { BasePrismaRepository } from './base.repository';
import { RequestEntity } from '@/domain/entities';
import { RequestMapper } from '../mappers';
import { RequestRepository } from '@/domain/repositories';

@Injectable()
export class PrismaRequestRepository
  extends BasePrismaRepository<
    RequestEntity,
    request,
    Prisma.requestUncheckedCreateInput
  >
  implements RequestRepository
{
  protected model = this.prisma.request;
  protected mapper = RequestMapper;

  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
