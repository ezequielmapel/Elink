import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'widget-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css'],

})
export class InputComponent implements OnInit{
  @Input()
  placeholder: string;

  @Input()
  type: string;

  @Input()
  urlIconInput: string;

  @Input()
  hiddenButton: string = 'true';

  @Input()
  urlIconButton: string;

  @Output()
  keyDownEventEmitter: EventEmitter<String> = new EventEmitter<String>();

  //wasAnimated: string = 'open';
  isOpen: boolean = false;


  constructor() {

  }

  ngOnInit(): void {

  }

  onKeyDown(event){
    this.keyDownEventEmitter.emit(event.value);
    this.hiddenButton = 'true';
    this.toogle();
  }

  toogle(){
    this.isOpen = !this.isOpen;
  }


}
