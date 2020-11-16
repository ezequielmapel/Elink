import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {ScreenRoutesModule} from './screens-routing.module';
import {IndexComponent} from './index/index.component';
import {WidgetsModule} from '../widgets/widgets.module';
import {ChatModule} from '../chat/chat.module';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ShortenComponent} from "./shorten/shorten.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputValidatorService} from "../shared/services/validators/inputValidator.service";


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    ContactComponent,
    ShortenComponent,
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    ChatModule,
    BrowserAnimationsModule,

  ],
  exports: [
    IndexComponent,
    ScreenRoutesModule
  ],
  providers:[
    InputValidatorService
  ]

})

export class ScreenModule {
}

