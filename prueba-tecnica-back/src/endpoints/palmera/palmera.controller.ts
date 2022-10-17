import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { PalmeraService } from './palmera.service';
import { CreatePalmeraDto } from './dto/create-palmera.dto';
import { UpdatePalmeraDto } from './dto/update-palmera.dto';
import { Palmera } from './entities/palmera.entity';
import { Response } from 'express';

@Controller()
export class PalmeraController {
  constructor(private readonly palmeraService: PalmeraService) {}

  @Get()
  findAll() {
    return this.palmeraService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.palmeraService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateEspecieDtoList: UpdatePalmeraDto[],
  ) {
    try {
      const result: Palmera[] = await this.palmeraService.update(
        updateEspecieDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
