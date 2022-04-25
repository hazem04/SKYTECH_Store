import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
  public img_produit:string='';
  public id_produit:number=0;
  public id_cat:number=0;
  public lib_produit:string='';
  public prix_produit:number=0;
  public qte_produit:number=0;  
  public description:string='';
  public mail_admin:any;
 }
