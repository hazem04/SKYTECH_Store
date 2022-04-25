import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../.././../services/data.service';
import { CartModule } from 'src/app/models/cart/cart.module';
import { ResultModule } from 'src/app/models/result/result.module';
import { ProductModule } from 'src/app/models/product/product.module';
import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.css']
})
export class ChangeProductComponent implements OnInit {
  form=new FormGroup({
    id_produit:new FormControl(''),
    lib_produit:new FormControl(''),
    prix_produit:new FormControl(''),
    id_cat:new FormControl(''),
    mail_admin:new FormControl(''),
    description:new FormControl(''),
    img_produit:new FormControl(''),
    qte_produit:new FormControl('')
  });
  constructor(private dataservice:DataService,private route:ActivatedRoute,private routf:Router,private auth:AuthService) {
    this.admin=this.auth.getUsername();
   }
  id_produit:any="";
  data:any;
  admin:any="";
  prod=new ProductModule();
  ngOnInit(): void {
    this.id_produit=this.route.snapshot.params['edit'];
    this.getdata();
  }
  getdata(){
 
    this.form.controls['id_produit'].setValue(this.id_produit)
    
   this.dataservice.getdatabyid(this.id_produit).subscribe(res=>{
    this.data=res;
  
      this.prod=this.data;
      this.form.controls['lib_produit'].setValue(this.data.lib_produit);
      this.form.controls['prix_produit'].setValue(this.data.prix_produit);
      
      this.form.controls['mail_admin'].setValue(this.data.mail_admin);
      this.form.controls['description'].setValue(this.data.description);
      this.form.controls['qte_produit'].setValue(this.data.qte_produit);
      this.form.controls['img_produit'].setValue(this.data.img_produit);
      
       })
  
      
     
    
    
  }
  updatedata(){
    
    this.dataservice.updatedata(this.prod,this.admin).subscribe(res=>{this.routf.navigate(['/admin'])});
  
  }
}
