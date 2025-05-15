interface DonationEntityProps {
  id?: string;
  donatorId: string;
  description: string;
  expiryAt: Date;
  location: string;
}

export class DonationEntity {
  private props: DonationEntityProps;

  constructor(props: DonationEntityProps) {
    this.props = props;
  }

  public set id(id: string) {
    this.props.id = id;
  }
  public get id(): string | null {
    return this.props.id ?? null;
  }

  public set donatorId(donatorId: string) {
    this.props.donatorId = donatorId;
  }
  public get donatorId() {
    return this.props.donatorId;
  }

  public set description(description: string) {
    this.props.description = description;
  }
  public get description() {
    return this.props.description;
  }

  public set expiryAt(expiryAt: Date) {
    this.props.expiryAt = expiryAt;
  }
  public get expiryAt() {
    return this.props.expiryAt;
  }

  public set location(location: string) {
    this.props.location = location;
  }
  public get location() {
    return this.props.location;
  }

  updateProps(data: Partial<DonationEntityProps>) {
    if (data.description) this.description = data.description;
    if (data.location) this.location = data.location;
    if (data.expiryAt) this.expiryAt = data.expiryAt;
    if (data.donatorId) this.donatorId = data.donatorId;
  }
}
