import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeuserRoutingModule } from './homeuser-routing.module';
import { HomeuserComponent } from './homeuser/homeuser.component';


@NgModule({
  declarations: [
    HomeuserComponent
  ],
  imports: [
    CommonModule,
    HomeuserRoutingModule
  ]
})
export class HomeuserModule { }
