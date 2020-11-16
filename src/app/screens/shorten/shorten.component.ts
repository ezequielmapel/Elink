import {Component, ElementRef, ViewChild, Renderer2, Output, EventEmitter, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {InputValidatorService} from "../../shared/services/validators/inputValidator.service";
import {InputValidationModel} from "../../shared/services/validators/inputValidation.model";

@Component({
  selector: 'index-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.css'],
  animations: [
    trigger('wasAnimated', [
      state('open', style({
        transform: 'rotate(0)',
        backgroundImage: 'url(assets/images/icons/smile.svg)',

      })),
      state('close', style({
        transform: 'rotate(-360deg)',
        backgroundImage: 'url(assets/images/icons/x-circle.svg)'
      })),
      transition('open => close', animate('1000ms ease-out')),
      transition('close => open', animate('1000ms ease-in'))
    ])
  ]
})
export class ShortenComponent implements OnInit {
  @ViewChild('linkOlder')
  linkOlder: ElementRef

  @ViewChild('linkNew')
  linkNew: ElementRef;

  @ViewChild('sender')
  sender: ElementRef;

  textDescription: string = "Informe os campos e espere um smile verde"
  placeholder: string = "Informe o link"
  placeholderLinkNew: string = "Novo link"
  wasAnimated: string = 'close';
  validatorLinkNew: string = 'close';


  constructor(private render: Renderer2, private validator: InputValidatorService) {
  }

  ngOnInit(): void {
  }

  mouse(enter: boolean) {
    let asset = 'assets/images/icons/send.svg';
    if (enter) {
      asset = 'assets/images/icons/send_light.svg';
    }
    this.render.setAttribute(this.sender.nativeElement, 'src', asset);
  }


  toggle(animationStarter: string = 'linkOlder') {
    if(animationStarter === 'linkNew'){
      this.validatorLinkNew = (this.validatorLinkNew === 'close' ? 'open' : 'close');
      return;
    }
    this.wasAnimated = (this.wasAnimated === 'close' ? 'open' : 'close');
  }

  animationClose(animationStarter: string){
    if(animationStarter === 'linkNew'){
      this.validatorLinkNew = 'close';
      return;
    }
    this.wasAnimated = 'close';
  }
  animationStart(animationStarter: string){
    if(animationStarter === 'linkNew'){
      this.validatorLinkNew = 'open';
      return;
    }
    this.wasAnimated = 'open';
  }

  validate(event: any, value: string) {
    if ( this.validator.validate(value.trim(), {type: event}) ) {
      this.animationStart(event);
    }else{
      this.animationClose(event);
    }
  }

}
