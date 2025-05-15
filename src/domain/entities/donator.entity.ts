interface DonatorEntityProps {
  id?: string;
  name: string;
  email: string;
  phone: string;
  createdBy: string;
}

export class DonatorEntity {
  private props: DonatorEntityProps;

  constructor(props: DonatorEntityProps) {
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

  public set phone(phone: string) {
    this.props.phone = phone;
  }
  public get phone() {
    return this.props.phone;
  }

  public set createdBy(createdBy: string) {
    this.props.createdBy = createdBy;
  }
  public get createdBy() {
    return this.props.createdBy;
  }

  updateProps(data: Partial<DonatorEntityProps>) {
    if (data.name) this.name = data.name;
    if (data.email) this.email = data.email;
    if (data.phone) this.phone = data.phone;
    if (data.createdBy) this.createdBy = data.createdBy;
  }
}
