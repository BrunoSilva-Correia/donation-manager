import { DonationService } from '@/domain/services';
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
import { DonationMapper } from '../mappers';
import { CreateDonationDto, UpdateDonationDto } from '../dtos';
import { Response } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('donation')
export class DonationController {
  constructor(private readonly service: DonationService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) {
      throw new BadRequestException('Id must be provided');
    }
    const donation = await this.service.findById(id);

    return DonationMapper.toHttp(donation);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    const donations = await this.service.findAll();
    if (!donations?.length) {
      return [];
    }
    return donations.map(DonationMapper.toHttp);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateDonationDto, @Res() res: Response) {
    const donation = await this.service.create(DonationMapper.toDomain(body));
    res.setHeader('Location', `/donations/${donation.id}`);
    return res.json(DonationMapper.toHttp(donation));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.CREATED)
  async patch(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateDonationDto,
    @Res() res: Response,
  ) {
    const donation = await this.service.update(
      id,
      DonationMapper.toDomain(body),
    );
    res.setHeader('Location', `/donations/${donation.id}`);
    return res.json(DonationMapper.toHttp(donation));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.service.delete(id);
    return;
  }
}
