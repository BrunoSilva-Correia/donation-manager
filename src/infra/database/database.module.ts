import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import {
  BeneficiaryRepository,
  DonationRepository,
  DonatorRepository,
  RequestRepository,
  UserRepository,
} from '@/domain/repositories';
import {
  PrismaBeneficiaryRepository,
  PrismaDonationRepository,
  PrismaDonatorRepository,
  PrismaUserRepository,
} from './prisma/repositories';
import { PrismaRequestRepository } from './prisma/repositories/request.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: DonatorRepository,
      useClass: PrismaDonatorRepository,
    },
    {
      provide: BeneficiaryRepository,
      useClass: PrismaBeneficiaryRepository,
    },
    {
      provide: DonationRepository,
      useClass: PrismaDonationRepository,
    },
    {
      provide: RequestRepository,
      useClass: PrismaRequestRepository,
    },
  ],
  exports: [
    UserRepository,
    DonatorRepository,
    BeneficiaryRepository,
    DonationRepository,
    RequestRepository,
  ],
})
export class DatabaseModule {}
