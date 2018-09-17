import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './member/member-list.component';
import { CustomerService } from './customer/customer.serice';
import { ReportComponent } from './report/report.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    CustomerComponent,
    ReportComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'Report' , component:ReportComponent}, 
      {path:'Voting' , component:MemberListComponent}   
      
    ])
  ],

  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
