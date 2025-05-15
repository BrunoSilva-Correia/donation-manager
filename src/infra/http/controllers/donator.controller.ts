import { DonatorService } from '@/domain/services';
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
  Res,
} from '@nestjs/common';
import { DonatorMapper } from '../mappers';
import { CreateDonatorDto, UpdateDonatorDto } from '../dtos';
import { Response } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('donator')
export class DonatorController {
  constructor(private readonly service: DonatorService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) {
      throw new BadRequestException('Id must be provided');
    }
    const donator = await this.service.findById(id);

    return DonatorMapper.toHttp(donator);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    const donators = await this.service.findAll();
    if (!donators?.length) {
      return [];
    }
    return donators.map(DonatorMapper.toHttp);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateDonatorDto, @Res() res: Response) {
    const donator = await this.service.create(DonatorMapper.toDomain(body));
    res.setHeader('Location', `/donators/${donator.id}`);
    return res.json(DonatorMapper.toHttp(donator));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.CREATED)
  async patch(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateDonatorDto,
    @Res() res: Response,
  ) {
    const donator = await this.service.update(id, DonatorMapper.toDomain(body));
    res.setHeader('Location', `/donators/${donator.id}`);
    return res.json(DonatorMapper.toHttp(donator));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.service.delete(id);
    return;
  }
}
