import { PlagaModule } from './plaga/plaga.module';
import { ZonaModule } from './zona/zona.module';
import { PalmeraModule } from './palmera/palmera.module';

export const EndpointRoutes = [
  {
    path: 'plaga',
    module: PlagaModule,
  },
  {
    path: 'zona',
    module: ZonaModule,
  },
  {
    path: 'palmera',
    module: PalmeraModule,
  },
];
