import { Component, Input, OnInit } from "@angular/core";
import { Message } from '../shared/message';

@Component({
    selector:'chat-message',
    templateUrl:'./message.component.html',
    styleUrls:['./message.component.css']
})
export class MessageChatComponent implements OnInit{

    @Input()
    message : string;
    @Input()
    author : string;
    @Input()
    imageUrl : string;
    @Input()
    hour : string;
    @Input()
    me : boolean;

    constructor(){
    }
    ngOnInit(){

    }
 }
