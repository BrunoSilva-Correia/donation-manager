import { RequestEntity } from '@/domain/entities';
import { RequestStatus } from '@/shared/enums';
import { request, RequestStatusEnum } from '@prisma/client';

export class RequestMapper {
  static toDomain(request: request): RequestEntity {
    return new RequestEntity({
      beneficiaryId: request.beneficiaryId,
      donationId: request.donationId,
      status: RequestMapper.toDomainStatus(request.status),
      id: request.id,
    });
  }

  static toDatabase(request: RequestEntity): request {
    return {
      beneficiaryId: request.beneficiaryId,
      donationId: request.donationId,
      status: RequestMapper.toDatabaseStatus(request.status),
      id: request.id,
    };
  }

  static toDomainStatus(status: string): RequestStatus {
    switch (status) {
      case 'PENDING':
        return RequestStatus.PENDING;
      case 'APPROVED':
        return RequestStatus.APPROVED;
      case 'FINISHED':
        return RequestStatus.FINISHED;
      case 'CANCELED':
        return RequestStatus.CANCELED;
      default:
        throw new Error(`Invalid status from database: ${status}`);
    }
  }

  static toDatabaseStatus(status: RequestStatus): RequestStatusEnum {
    switch (status) {
      case RequestStatus.PENDING:
        return RequestStatusEnum.PENDING;
      case RequestStatus.APPROVED:
        return RequestStatusEnum.APPROVED;
      case RequestStatus.FINISHED:
        return RequestStatusEnum.FINISHED;
      case RequestStatus.CANCELED:
        return RequestStatusEnum.CANCELED;
      default:
        throw new Error(`Invalid application status: ${status}`);
    }
  }
}
