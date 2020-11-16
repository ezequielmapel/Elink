import {Component, OnInit} from "@angular/core";
import {Message} from '../shared/message';
import {RoomService} from "./room.service";
import {ZeldBotService} from "../../bot/zeld.bot.service";


@Component({
  selector: 'chat-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomChatComponent implements OnInit{
    messages : Message[] = [];

  constructor( private roomService: RoomService, private zeldBot:ZeldBotService ) {
  }

  ngOnInit() {
    this.getMessages();

  }

  addMessage(message: Message) {
    this.roomService.addMessage(message);
  }

  getMessages() {
    // return this.roomService.getMessages().subscribe(messages => {
    //   this.zeldBot.readMessages(messages);
    //   this.messages = messages;
    // });
    return this.roomService.messagesChange.subscribe( (messages: Message[]) => {
      this.zeldBot.readMessages(messages);
      this.messages = messages;
    });

  }
}
