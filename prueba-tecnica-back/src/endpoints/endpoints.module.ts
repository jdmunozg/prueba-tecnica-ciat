import { Module } from '@nestjs/common';
import { PlagaModule } from './plaga/plaga.module';
import { ZonaModule } from './zona/zona.module';

@Module({
  imports: [PlagaModule, ZonaModule]
})
export class EndpointsModule {}
