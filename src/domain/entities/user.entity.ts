interface UserEntityProps {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export class UserEntity {
  private props: UserEntityProps;

  constructor(props: UserEntityProps) {
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

  public set password(password: string) {
    this.props.password = password;
  }
  public get password() {
    return this.props.password;
  }

  updateProps(data: Partial<UserEntityProps>) {
    if (data.name) this.name = data.name;
    if (data.email) this.email = data.email;
    if (data.password) this.password = data.password;
  }
}
