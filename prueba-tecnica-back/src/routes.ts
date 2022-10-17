import { Routes } from '@nestjs/core';
import { EndpointsModule } from './endpoints/endpoints.module';
import { EndpointRoutes } from './endpoints/endpoints.routes';

export const routes: Routes = [
  {
    path: 'prueba',
    module: EndpointsModule,
    children: EndpointRoutes,
  },
];
