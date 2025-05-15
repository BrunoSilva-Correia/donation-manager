import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class CreateUserDto implements Omit<UserDto, 'id'> {
  @ApiProperty({
    description: 'User name',
    required: true,
    example: 'Jonh Doe',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User email',
    required: true,
    example: 'jonh.doe@email.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    required: true,
    example: 'MyP4$$w0rd',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
