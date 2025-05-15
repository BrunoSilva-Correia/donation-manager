import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class DonatorDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdBy: string;
}

export class CreateDonatorDto implements Omit<DonatorDto, 'id'> {
  @ApiProperty({
    description: 'Donator name',
    required: true,
    example: 'Donator name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Donator email',
    required: true,
    example: 'donator@email.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Donator phone (BR-format)',
    required: true,
    example: '+5521999999999',
  })
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone: string;

  @ApiProperty({
    description: 'User uuid',
    required: true,
    example: '0dc8db28-0309-4b04-a260-35c15d92d3c2',
  })
  @IsUUID()
  @IsNotEmpty()
  createdBy: string;
}

export class UpdateDonatorDto extends PartialType(CreateDonatorDto) {}
