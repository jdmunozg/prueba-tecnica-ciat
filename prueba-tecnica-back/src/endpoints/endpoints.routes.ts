import { PlagaModule } from './plaga/plaga.module';
import { ZonaModule } from './zona/zona.module';

export const EndpointRoutes = [
  {
    path: 'plaga',
    module: PlagaModule,
  },
  {
    path: 'zona',
    module: ZonaModule,
  },
];
