import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { dataSource } from './ormconfig';
import { EndpointsModule } from './endpoints/endpoints.module';
import { routes } from './routes';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
    EndpointsModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
