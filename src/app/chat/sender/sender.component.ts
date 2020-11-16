import {Component, Output, EventEmitter, Renderer2, ViewChild} from '@angular/core';
import {Message} from '../shared/message';
import {RoomService} from "../room/room.service";


@Component({
  selector: 'chat-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderChatComponent {
  placeholder: string = 'Insira o link ...';
  messageInfo: Message;
  message: string;

  @Output()
  textMessageEvent = new EventEmitter<Message>();

  constructor( private roomService:RoomService ) {
  }

  sendMessage(message: any) {
    this.messageInfo = new Message('Eu', '', message.value, true);
    //this.textMessageEvent.emit(this.messageInfo);

    //TODO:check message before send
    if(message.value === '') return;
    this.roomService.addMessage(this.messageInfo);

    message.value = '';
  }

}
