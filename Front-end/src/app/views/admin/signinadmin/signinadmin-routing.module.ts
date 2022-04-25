import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninadminComponent } from './signinadmin/signinadmin.component';

const routes: Routes = [
  {path:'',component:SigninadminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninadminRoutingModule { }
