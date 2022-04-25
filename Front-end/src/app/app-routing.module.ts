import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { NotfoundComponent } from './views/notfound/notfound/notfound.component';



const routes: Routes = [
  {path:'signup',loadChildren:()=>import('./views/user/signup/signup.module').then(m=>m.SignupModule)},
    {path:'signin',loadChildren:()=>import('./views/user/signin/signin.module').then(m=>m.SigninModule)},
  {path: '',component:UserLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/user/homeuser/homeuser.module').then(m=>m.HomeuserModule)},
    {path:'products/:cat',loadChildren:()=>import('./views/user/product/product.module').then(m=>m.ProductModule)},
    {path:'cart',loadChildren:()=>import('./views/user/cart/cart.module').then(m=>m.CartModule)},
    {path:'payment',loadChildren:()=>import('./views/user/payment/payment.module').then(m=>m.PaymentModule)}
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/all-products/all-products.module').then(m=>m.AllProductsModule)},
    {path:'changeProduct/:edit',loadChildren:()=>import('./views/admin/change-product/change-product.module').then(m=>m.ChangeProductModule)}
  ]},
  {path:'products',loadChildren:()=>import('./views/admin/all-products/all-products.module').then(m=>m.AllProductsModule)},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
