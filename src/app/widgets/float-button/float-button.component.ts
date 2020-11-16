import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'widgets-floatButton',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.css']
})
export class FloatButtonComponent implements OnInit {
  @Input()
  icon:string = '';

  @Input()
  action: any;

  @Output()
  clickEmit: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('floatButton')
  floatButton: ElementRef;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  click( action:any ){
    this.clickEmit.emit('false');
  }

  mouse( action: string ){
    const asset = 'assets/images/icons/';
    let image = 'scissors.svg';
    if(action === 'enter'){
      image = 'scissors_hover.svg';
    }
    this.render.setAttribute(this.floatButton.nativeElement, 'src', asset+image)
  }
}
