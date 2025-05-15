interface BeneficiaryEntityProps {
  id?: string;
  name: string;
  email: string;
  location: string;
  necessities: string;
  createdBy: string;
}

export class BeneficiaryEntity {
  private props: BeneficiaryEntityProps;

  constructor(props: BeneficiaryEntityProps) {
    this.props = props;
  }

  public set id(id: string) {
    this.props.id = id;
  }
  public get id(): string | null {
    return this.props.id ?? null;
  }

  public set name(name: string) {
    this.props.name = name;
  }
  public get name() {
    return this.props.name;
  }

  public set email(email: string) {
    this.props.email = email;
  }
  public get email() {
    return this.props.email;
  }

  public set location(location: string) {
    this.props.location = location;
  }
  public get location() {
    return this.props.location;
  }

  public set necessities(necessities: string) {
    this.props.necessities = necessities;
  }
  public get necessities() {
    return this.props.necessities;
  }

  public set createdBy(createdBy: string) {
    this.props.createdBy = createdBy;
  }
  public get createdBy() {
    return this.props.createdBy;
  }

  updateProps(data: Partial<BeneficiaryEntityProps>) {
    if (data.name) this.name = data.name;
    if (data.location) this.location = data.location;
    if (data.necessities) this.necessities = data.necessities;
    if (data.createdBy) this.createdBy = data.createdBy;
  }
}
