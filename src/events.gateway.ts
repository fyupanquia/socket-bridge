import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({
  //transports: ['websocket'],
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer() private server: Server;
  wsClients = [];

  handleConnection(client: any) {
    console.log('someone connected!');
    this.wsClients.push(client);
    client.emit("welcome", "hi from server");
    return client;
  }
  emit(event, payload): Observable<WsResponse<any>> | any {
    console.log({ wsClients: this.wsClients });
    console.log({ event, payload });
    this.server.emit(event, payload);
  }
}
