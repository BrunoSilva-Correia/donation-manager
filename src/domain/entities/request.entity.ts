import { RequestStatus } from '@/shared/enums';

interface RequestEntityProps {
  id?: string;
  beneficiaryId: string;
  donationId: string;
  status: RequestStatus;
}

export class RequestEntity {
  private props: RequestEntityProps;

  constructor(props: RequestEntityProps) {
    this.props = props;
  }

  public set id(id: string) {
    this.props.id = id;
  }
  public get id(): string | null {
    return this.props.id ?? null;
  }

  public set beneficiaryId(beneficiaryId: string) {
    this.props.beneficiaryId = beneficiaryId;
  }
  public get beneficiaryId() {
    return this.props.beneficiaryId;
  }

  public set donationId(donationId: string) {
    this.props.donationId = donationId;
  }
  public get donationId() {
    return this.props.donationId;
  }

  public set status(status: RequestStatus) {
    this.props.status = status;
  }
  public get status() {
    return this.props.status;
  }

  updateProps(data: Partial<RequestEntityProps>) {
    if (data.beneficiaryId) this.beneficiaryId = data.beneficiaryId;
    if (data.donationId) this.donationId = data.donationId;
    if (data.status) this.status = data.status;
  }
}
