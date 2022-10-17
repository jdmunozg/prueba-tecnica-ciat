import { Module } from '@nestjs/common';
import { PlagaModule } from './plaga/plaga.module';
import { ZonaModule } from './zona/zona.module';
import { PalmeraModule } from './palmera/palmera.module';

@Module({
  imports: [PlagaModule, ZonaModule, PalmeraModule]
})
export class EndpointsModule {}
