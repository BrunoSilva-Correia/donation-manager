import { UserEntity } from '@/domain/entities';
import { user } from '@prisma/client';

export class UserMapper {
  static toDomain(user: user): UserEntity {
    return new UserEntity({
      email: user.email,
      name: user.name,
      password: user.password,
      id: user.id,
    });
  }

  static toDatabase(user: UserEntity): user {
    return {
      email: user.email,
      name: user.name,
      password: user.password,
      id: user.id,
    };
  }
}
