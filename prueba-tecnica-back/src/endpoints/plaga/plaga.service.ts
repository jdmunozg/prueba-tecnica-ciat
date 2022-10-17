import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlagaDto } from './dto/create-plaga.dto';
import { UpdatePlagaDto } from './dto/update-plaga.dto';
import { Plaga } from './entities/plaga.entity';

@Injectable()
export class PlagaService {
  constructor(
    @InjectRepository(Plaga)
    private plagaRepository: Repository<Plaga>,
  ) {}

  findAll() {
    return this.plagaRepository.find();
  }

  async findOne(id: number): Promise<Plaga> {
    return await this.plagaRepository.findOneBy({ id });
  }

  async update(updatePublicacionDtoList: UpdatePlagaDto[]): Promise<Plaga[]> {
    return await this.plagaRepository.save(updatePublicacionDtoList);
  }
}
