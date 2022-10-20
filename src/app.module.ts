import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events.gateway';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [EventsGateway, AppService],
})
export class AppModule {}