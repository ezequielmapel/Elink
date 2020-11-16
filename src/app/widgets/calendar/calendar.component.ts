import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'widget-calendar',
  templateUrl: './calendar.component.html',
  styleUrls:['calendar.component.css']
})
export class CalendarComponent implements OnInit{

  @Input()
  hiddenButton: string = 'true';

  constructor() {
  }

  ngOnInit():void {
  }
}
