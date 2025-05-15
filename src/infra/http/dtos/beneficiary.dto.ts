import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class BeneficiaryDto {
  id: string;
  name: string;
  email: string;
  location: string;
  necessities: string;
  createdBy: string;
}

export class CreateBeneficiaryDto implements Omit<BeneficiaryDto, 'id'> {
  @ApiProperty({
    description: 'Beneficiary name',
    required: true,
    example: 'ONG - dogs and cats',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Beneficiary email',
    required: true,
    example: 'ong.dogscats@email.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Beneficiary location (city)',
    required: true,
    example: 'Fortaleza',
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    description: 'Beneficiary necessities',
    required: true,
    example: 'Pet food',
  })
  @IsString()
  @IsNotEmpty()
  necessities: string;

  @ApiProperty({
    description: 'User uuid',
    required: true,
    example: '0dc8db28-0309-4b04-a260-35c15d92d3c2',
  })
  @IsUUID()
  @IsNotEmpty()
  createdBy: string;
}

export class UpdateBeneficiaryDto extends PartialType(CreateBeneficiaryDto) {}
