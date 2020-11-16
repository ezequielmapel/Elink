import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LinkInputWidgetComponent} from './linkInput/linkInput.component';
import {MenuWidgetComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {ModalComponent} from "./modal/modal.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FloatButtonComponent } from './float-button/float-button.component';
import {ModalService} from "../chat/shared/modal.service";


@NgModule({
  declarations: [
    LinkInputWidgetComponent,
    MenuWidgetComponent,
    ModalComponent,
    FloatButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    LinkInputWidgetComponent,
    MenuWidgetComponent,
    FormsModule,
    ModalComponent,
    FloatButtonComponent
  ],
  providers: [
    ModalService
  ],
})
export class WidgetsModule {
}
