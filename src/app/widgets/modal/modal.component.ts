import {
  Component,
  ElementRef, EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import {ModalService} from "../../chat/shared/modal.service";

@Component({
  selector:'widgets-modal',
  templateUrl:'modal.component.html',
  styleUrls:['modal.component.css'],

})
export class ModalComponent implements OnInit, OnChanges{
  @Input() cols = 4;
  @Input() title = "Título";
  @Input() icon = "";

  @Output() close = new EventEmitter<string>();

  @Input() hiddenModal: string;

  @ViewChild('modal')
  modal: ElementRef;

  @ViewChild('closeButtonModal', {static:false})
  closeButton: ElementRef;


  constructor(private elementRef:ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    console.log(this.hiddenModal);
    console.log('hidden modal');
  }

  mouse(event: string){
    const asset = 'assets/images/icons/'
    let image = 'x.svg';
    if(event === 'enter'){
      image = 'x_red.svg';
    }
    this.render.setAttribute(this.closeButton.nativeElement, 'src', asset+image);
  }

  mouseClick(){
    //this.hiddenModal = 'true';
    this.close.emit('true');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Cliquei para xx");
  }
}
