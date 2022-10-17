import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePalmeraDto } from './dto/create-palmera.dto';
import { UpdatePalmeraDto } from './dto/update-palmera.dto';
import { Palmera } from './entities/palmera.entity';

@Injectable()
export class PalmeraService {
  constructor(
    @InjectRepository(Palmera)
    private palmaRepository: Repository<Palmera>,
  ) {}

  findAll() {
    return this.palmaRepository.find();
  }

  async findOne(id: number): Promise<Palmera> {
    return await this.palmaRepository.findOneBy({ id });
  }

  async update(updatePalmaDtoList: UpdatePalmeraDto[]): Promise<Palmera[]> {
    return await this.palmaRepository.save(updatePalmaDtoList);
  }
}
