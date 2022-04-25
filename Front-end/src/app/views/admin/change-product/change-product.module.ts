import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeProductRoutingModule } from './change-product-routing.module';
import { ChangeProductComponent } from './change-product/change-product.component';


@NgModule({
  declarations: [
    ChangeProductComponent
  ],
  imports: [
    CommonModule,
    ChangeProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChangeProductModule { }
