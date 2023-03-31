import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetFormComponent } from './components/tweet-form/tweet-form.component';
import {FormsModule} from "@angular/forms";
import { NgxWebstorageModule } from "ngx-webstorage";
import { TweetComponent } from './components/tweet/tweet.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TweetFormComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
