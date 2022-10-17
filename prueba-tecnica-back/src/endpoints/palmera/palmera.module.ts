import { Module } from '@nestjs/common';
import { PalmeraService } from './palmera.service';
import { PalmeraController } from './palmera.controller';
import { Palmera } from './entities/palmera.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Palmera])],
  controllers: [PalmeraController],
  providers: [PalmeraService],
})
export class PalmeraModule {}
