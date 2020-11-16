import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RoomChatComponent} from './room/room.component';
import {MessageChatComponent} from './message/message.component';
import {SenderChatComponent} from './sender/sender.component';
import {Router, RouterModule} from '@angular/router';
import {RoomService} from "./room/room.service";
import {ZeldBotService} from "../bot/zeld.bot.service";
import { HttpClientModule } from "@angular/common/http";
import { RoomDirective } from "./room/room.directive";


@NgModule({
  declarations: [
    RoomChatComponent,
    MessageChatComponent,
    SenderChatComponent,
    RoomDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    RoomChatComponent
  ],
  providers: [
    RoomService,
    ZeldBotService
  ],

})
export class ChatModule {
}
