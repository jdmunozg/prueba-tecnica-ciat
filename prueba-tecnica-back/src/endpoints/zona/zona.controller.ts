import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  HttpException,
  Res,
} from '@nestjs/common';
import { ZonaService } from './zona.service';
import { CreateZonaDto } from './dto/create-zona.dto';
import { UpdateZonaDto } from './dto/update-zona.dto';
import { Zona } from './entities/zona.entity';
import { Response } from 'express';

@Controller()
export class ZonaController {
  constructor(private readonly zonaService: ZonaService) {}

  @Get()
  findAll() {
    return this.zonaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.zonaService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateEspecieDtoList: UpdateZonaDto[],
  ) {
    try {
      const result: Zona[] = await this.zonaService.update(
        updateEspecieDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
