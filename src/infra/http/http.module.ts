import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import {
  BeneficiaryController,
  DonationController,
  DonatorController,
  RequestController,
  UserController,
} from './controllers';
import {
  BeneficiaryService,
  DonationService,
  DonatorService,
  RequestService,
  UserService,
} from '@/domain/services';

@Module({
  imports: [DatabaseModule],
  controllers: [
    UserController,
    DonatorController,
    BeneficiaryController,
    DonationController,
    RequestController,
  ],
  providers: [
    UserService,
    DonatorService,
    BeneficiaryService,
    DonationService,
    RequestService,
  ],
})
export class HttpModule {}
