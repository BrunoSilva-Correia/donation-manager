import { UserEntity } from '@/domain/entities';
import { UserDto } from '../dtos';

export class UserMapper {
  static toHttp(user: UserEntity): Omit<UserDto, 'password'> {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  static toDomain(user: Partial<UserDto>): UserEntity {
    return new UserEntity({
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
    });
  }
}
