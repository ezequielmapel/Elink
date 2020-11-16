import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[isMyMessage]',

})
export class IsMyMessageDirective implements  OnInit{
  constructor(private elementRef : ElementRef, private ren : Renderer2) {

  }

  ngOnInit(): void {
    this.toogleClass('myMessage', 'message');
  }

  private toogleClass(newClass : string, oldClass : string) : void{
    this.ren.removeClass(this.elementRef.nativeElement, oldClass);
    this.ren.addClass(this.elementRef.nativeElement, newClass)
  }
}
