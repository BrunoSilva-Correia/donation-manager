import { RequestService } from '@/domain/services';
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
import { RequestMapper } from '../mappers';
import { CreateRequestDto, UpdateRequestDto } from '../dtos';
import { Response } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('request')
export class RequestController {
  constructor(private readonly service: RequestService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    if (!id) {
      throw new BadRequestException('Id must be provided');
    }
    const request = await this.service.findById(id);

    return RequestMapper.toHttp(request);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    const requests = await this.service.findAll();
    if (!requests?.length) {
      return [];
    }
    return requests.map(RequestMapper.toHttp);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateRequestDto, @Res() res: Response) {
    const request = await this.service.create(RequestMapper.toDomain(body));
    res.setHeader('Location', `/requests/${request.id}`);
    return res.json(RequestMapper.toHttp(request));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.CREATED)
  async patch(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateRequestDto,
    @Res() res: Response,
  ) {
    const request = await this.service.update(id, RequestMapper.toDomain(body));
    res.setHeader('Location', `/requests/${request.id}`);
    return res.json(RequestMapper.toHttp(request));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.service.delete(id);
    return;
  }
}
