import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeadminRoutingModule } from './homeadmin-routing.module';
import { HomeadminComponent } from './homeadmin/homeadmin.component';


@NgModule({
  declarations: [
    HomeadminComponent
  ],
  imports: [
    CommonModule,
    HomeadminRoutingModule
  ]
})
export class HomeadminModule { }
