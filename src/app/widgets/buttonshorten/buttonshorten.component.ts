import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'widget-buttonshorten',
  templateUrl: './buttonshorten.component.html',
  styleUrls: ['./buttonshorten.component.css']
})
export class ButtonshortenComponent implements OnInit {
  @Input()
  placeholder: string;

  @Input()
  hiddenButton: string;

  constructor() { }

  ngOnInit(): void {
  }

}
