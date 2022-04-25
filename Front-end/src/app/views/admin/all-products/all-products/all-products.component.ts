import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';
import { DataService } from '../.././../services/data.service';
import { CartModule } from 'src/app/models/cart/cart.module';
import { ResultModule } from 'src/app/models/result/result.module';
import { ProductModule } from 'src/app/models/product/product.module';
import { AuthService } from 'src/app/views/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any;
  files:any;
  admin:any="";
  prod=new ProductModule();
  constructor(private dataservice:DataService,private formBuilder:FormBuilder,private auth:AuthService,private route:Router) {
    this.admin=auth.getUsername();
    
   }

  ngOnInit(): void {
    this.getproductsdata();
  }
  getproductsdata(){
    this.dataservice.getData().subscribe(res=>{this.products=res;})
  }
 
insertdata(){
  let id_cat=(<HTMLInputElement>document.getElementById("option")).value;
 this.prod.id_cat=parseInt(id_cat,10);
  this.dataservice.insertdata(this.prod,this.admin).subscribe(res=>{
    this.getproductsdata();
  });
  
  
}
deleteproduct(id_produit: any){
  this.dataservice.deletedata(id_produit).subscribe(res=>{
    this.getproductsdata();
});

}
imageShow: any= ''; 
onFileChanged(event: any) 
{ this.prod.img_produit = event.target.files[0] 
  var reader = new FileReader(); 
  reader.readAsDataURL(event.target.files[0]); 
  reader.onload = (event) => { this.imageShow = (<FileReader>event.target).result; }
}
logout(){
  this.auth.logout();
  this.route.navigate(['/']);
}
}
