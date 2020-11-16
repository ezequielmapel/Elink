import {Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from "@angular/core";
import {RoomService} from "./room.service";

@Directive({
  selector:'[roomDirective]',
})
export class RoomDirective implements OnInit{
  constructor( private elementRef: ElementRef, private render: Renderer2, private roomService: RoomService) {
  }

  ngOnInit() {
    this.scrollRoomBottom();
  }

  scrollRoomBottom (){
    this.roomService.messagesChange.subscribe(( messages ) => {
      setTimeout( () => {
        this.elementRef.nativeElement.scrollTop = this.elementRef.nativeElement.scrollHeight;
      }, 100);
    });
  }
}
