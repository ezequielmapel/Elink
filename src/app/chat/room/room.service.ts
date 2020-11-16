import {EventEmitter, Injectable} from "@angular/core";
import { Message } from "../shared/message";
import {BehaviorSubject, observable, Observable, of, Subject} from "rxjs";

@Injectable()
export class RoomService{
  //messages  = of([]);
  //messageChange = new EventEmitter<Message>();
  messagesChange = new Subject();
  messages = [];
  addMessage (message : Message){
    //this.messages.push(message);
    //this.messageChange.emit(message);
    //this.messages.subscribe(messages => messages.push(message));
    this.messages.push(message);
    this.messagesChange.next(this.messages.slice());
  }

  getMessages ():Message[] {
    return this.messages.slice();
  }

}
