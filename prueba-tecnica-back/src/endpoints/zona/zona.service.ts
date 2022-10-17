import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateZonaDto } from './dto/create-zona.dto';
import { UpdateZonaDto } from './dto/update-zona.dto';
import { Zona } from './entities/zona.entity';

@Injectable()
export class ZonaService {
  constructor(
    @InjectRepository(Zona)
    private zonaRepository: Repository<Zona>,
  ) {}

  findAll() {
    return this.zonaRepository.find();
  }

  async findOne(id: number): Promise<Zona> {
    return await this.zonaRepository.findOneBy({ id });
  }

  async update(updateZonaDtoList: UpdateZonaDto[]): Promise<Zona[]> {
    return await this.zonaRepository.save(updateZonaDtoList);
  }
}
