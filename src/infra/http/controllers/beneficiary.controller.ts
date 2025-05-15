import { BeneficiaryService } from '@/domain/services';
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
import { BeneficiaryMapper } from '../mappers';
import { CreateBeneficiaryDto, UpdateBeneficiaryDto } from '../dtos';
import { Response } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('beneficiary')
export class BeneficiaryController {
  constructor(private readonly service: BeneficiaryService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) {
      throw new BadRequestException('Id must be provided');
    }
    const donator = await this.service.findById(id);

    return BeneficiaryMapper.toHttp(donator);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    const beneficiary = await this.service.findAll();
    if (!beneficiary?.length) {
      return [];
    }
    return beneficiary.map(BeneficiaryMapper.toHttp);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateBeneficiaryDto, @Res() res: Response) {
    const donator = await this.service.create(BeneficiaryMapper.toDomain(body));
    res.setHeader('Location', `/beneficiary/${donator.id}`);
    return res.json(BeneficiaryMapper.toHttp(donator));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.CREATED)
  async patch(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateBeneficiaryDto,
    @Res() res: Response,
  ) {
    const donator = await this.service.update(
      id,
      BeneficiaryMapper.toDomain(body),
    );
    res.setHeader('Location', `/beneficiary/${donator.id}`);
    return res.json(BeneficiaryMapper.toHttp(donator));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.service.delete(id);
    return;
  }
}
