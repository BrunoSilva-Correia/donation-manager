import { RequestStatus } from '@/shared/enums';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class RequestDto {
  id: string;
  donationId: string;
  beneficiaryId: string;
  status: RequestStatus;
}

export class CreateRequestDto implements Omit<RequestDto, 'id'> {
  @ApiProperty({
    description: 'Donation uuid',
    required: true,
    example: '0dc8db28-0309-4b04-a260-35c15d92d3c2',
  })
  @IsUUID()
  @IsNotEmpty()
  donationId: string;

  @ApiProperty({
    description: 'Beneficiary uuid',
    required: true,
    example: '0dc8db28-0309-4b04-a260-35c15d92d3c2',
  })
  @IsString()
  @IsNotEmpty()
  beneficiaryId: string;

  @ApiProperty({
    description: 'Donation status',
    enum: RequestStatus,
    enumName: 'RequestStatus',
    required: true,
    example: 'PENDING',
  })
  @IsEnum(RequestStatus)
  @IsNotEmpty()
  status: RequestStatus;
}

export class UpdateRequestDto extends PartialType(CreateRequestDto) {}
