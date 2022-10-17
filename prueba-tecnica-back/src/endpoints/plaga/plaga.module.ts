import { Module } from '@nestjs/common';
import { PlagaService } from './plaga.service';
import { PlagaController } from './plaga.controller';
import { Plaga } from './entities/plaga.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Plaga])],
  controllers: [PlagaController],
  providers: [PlagaService],
})
export class PlagaModule {}
