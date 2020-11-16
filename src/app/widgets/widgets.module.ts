import {NgModule} from "@angular/core";
import {InputComponent} from "./input/input.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CalendarComponent} from "./calendar/calendar.component";
import { ButtonshortenComponent } from './buttonshorten/buttonshorten.component';

@NgModule({
  declarations: [
    InputComponent,
    CalendarComponent,
    ButtonshortenComponent
  ],
  imports:[
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    InputComponent,
    CalendarComponent,
    ButtonshortenComponent
  ]
})
export class WidgetsModule{ }
