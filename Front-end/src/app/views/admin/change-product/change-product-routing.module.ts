import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeProductComponent } from './change-product/change-product.component';

const routes: Routes = [
  {path:'',component:ChangeProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeProductRoutingModule { }
