import {Component, ElementRef, Renderer2, ViewChild} from "@angular/core";
import {ModalService} from "../../chat/shared/modal.service";
import {ModalComponent} from "../../widgets/modal/modal.component";

@Component({
    selector:'screen-index',
    templateUrl:'index.component.html',
    styleUrls:['index.component.css'],
})
export class IndexComponent{
  hidden: string = 'false';
  closeButton: string;

  @ViewChild('modalroot')
  modal: ElementRef;

  constructor( private render: Renderer2 ) {
  }

  hiddenModal( hidden:string ){
    //this.modalService.hidden(this.modal, hidden);
    console.log(this.hidden+' hiddenn');
    this.hidden = hidden;
    //this.render.removeAttribute(this.modal["elementRef"].nativeElement, 'hidden');

  }


}
