import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserEntity } from '@/domain/entities';
import { UserMapper } from '../mappers';
import { Prisma, user } from '@prisma/client';
import { BasePrismaRepository } from './base.repository';
import { UserRepository } from '@/domain/repositories';

@Injectable()
export class PrismaUserRepository
  extends BasePrismaRepository<
    UserEntity,
    user,
    Prisma.userUncheckedCreateInput
  >
  implements UserRepository
{
  protected model = this.prisma.user;
  protected mapper = UserMapper;

  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
