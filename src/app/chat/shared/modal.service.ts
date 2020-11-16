import {ElementRef, Injectable, Renderer2} from "@angular/core";

@Injectable()
export class ModalService{

  constructor() {
  }


  hidden( elementRef: ElementRef, hidden:boolean ){
    //this.render.setAttribute(elementRef.nativeElement, 'hidden', hidden.toString());
  }
}
