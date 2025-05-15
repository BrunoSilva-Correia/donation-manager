import { RequestEntity } from '@/domain/entities';
import { RequestDto } from '../dtos';

export class RequestMapper {
  static toHttp(request: RequestEntity): RequestDto {
    return {
      beneficiaryId: request.beneficiaryId,
      donationId: request.donationId,
      status: request.status,
      id: request.id,
    };
  }

  static toDomain(request: Partial<RequestDto>): RequestEntity {
    return new RequestEntity({
      beneficiaryId: request.beneficiaryId,
      donationId: request.donationId,
      status: request.status,
      id: request.id,
    });
  }
}
