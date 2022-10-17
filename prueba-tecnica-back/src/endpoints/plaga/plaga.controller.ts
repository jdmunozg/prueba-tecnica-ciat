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
import { PlagaService } from './plaga.service';
import { CreatePlagaDto } from './dto/create-plaga.dto';
import { UpdatePlagaDto } from './dto/update-plaga.dto';
import { Response } from 'express';
import { Plaga } from './entities/plaga.entity';

@Controller()
export class PlagaController {
  constructor(private readonly plagaService: PlagaService) {}

  @Get()
  findAll() {
    return this.plagaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.plagaService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updatePlagaDtoList: UpdatePlagaDto[],
  ) {
    try {
      const result: Plaga[] = await this.plagaService.update(
        updatePlagaDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
