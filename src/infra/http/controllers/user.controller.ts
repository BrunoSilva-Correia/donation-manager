import { UserService } from '@/domain/services';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { UserMapper } from '../mappers';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { Response } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/by-email')
  @HttpCode(HttpStatus.OK)
  async findByEmail(@Query('email') email: string) {
    if (!email) {
      throw new BadRequestException('Email must be provided');
    }

    const user = await this.service.findByEmail(email);
    return UserMapper.toHttp(user);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) {
      throw new BadRequestException('Id must be provided');
    }
    const user = await this.service.findById(id);

    return UserMapper.toHttp(user);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    const users = await this.service.findAll();
    if (!users?.length) {
      return [];
    }
    return users.map(UserMapper.toHttp);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateUserDto, @Res() res: Response) {
    const user = await this.service.create(UserMapper.toDomain(body));
    res.setHeader('Location', `/users/${user.id}`);
    return res.json(UserMapper.toHttp(user));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.CREATED)
  async patch(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateUserDto,
    @Res() res: Response,
  ) {
    const user = await this.service.update(id, UserMapper.toDomain(body));
    res.setHeader('Location', `/users/${user.id}`);
    return res.json(UserMapper.toHttp(user));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.service.delete(id);
    return;
  }
}
