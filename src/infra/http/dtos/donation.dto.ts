import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DonationDto {
  id: string;
  donatorId: string;
  description: string;
  expiryAt: Date;
  location: string;
}

export class CreateDonationDto implements Omit<DonationDto, 'id'> {
  @ApiProperty({
    description: 'Donation description',
    required: true,
    example: 'Food',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Donation expiration date',
    required: true,
    example: '2025-01-01',
  })
  @IsString()
  @IsNotEmpty()
  @IsDateString()
  expiryAt: Date;

  @ApiProperty({
    description: 'Donation location (city)',
    required: true,
    example: 'Fortaleza',
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    description: 'Donator uuid',
    required: true,
    example: '0dc8db28-0309-4b04-a260-35c15d92d3c2',
  })
  @IsUUID()
  @IsNotEmpty()
  donatorId: string;
}

export class UpdateDonationDto extends PartialType(CreateDonationDto) {}
