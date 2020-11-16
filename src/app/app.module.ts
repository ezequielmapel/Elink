import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenRoutesModule } from './screens/screens-routing.module';
import { WidgetsModule } from './widgets/widgets.module';
import { ScreenModule } from './screens/screen.module';
import { RouterModule } from '@angular/router';
import { ChatModule } from "./chat/chat.module";
import { DataService } from "./dataService.service";
import {ModalService} from "./chat/shared/modal.service";
import {SharedModule} from "./shared/shared.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    WidgetsModule,
    ScreenRoutesModule,
    ChatModule,
    ScreenModule,
    SharedModule
  ],
  providers: [
    DataService,
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
