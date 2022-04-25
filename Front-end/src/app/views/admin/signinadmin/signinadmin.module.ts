import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SigninadminRoutingModule } from './signinadmin-routing.module';
import { SigninadminComponent } from './signinadmin/signinadmin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninadminComponent
  ],
  imports: [
    CommonModule,
    SigninadminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SigninadminModule { }
