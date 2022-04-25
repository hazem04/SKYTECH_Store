import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';


@NgModule({
  declarations: [
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AllProductsModule { }
