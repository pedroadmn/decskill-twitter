import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetFormComponent } from './components/tweet-form/tweet-form.component';
import {FormsModule} from "@angular/forms";
import { NgxWebstorageModule } from "ngx-webstorage";

@NgModule({
  declarations: [
    AppComponent,
    TweetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
