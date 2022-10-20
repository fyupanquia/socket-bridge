import { Injectable } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

@Injectable()
export class AppService {
  constructor(private readonly eventGateway: EventsGateway) {}

  getHello(): string {
    return 'Hello World!';
  }
  postBridge(body : any): { success: true } {
    this.eventGateway.emit("socket-bridge", body);
    return { success: true };
  }
}
