import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MemberListComponent} from './member/member-list.component';
import {MemberListService} from './member/member-list.service';
@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MemberListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
