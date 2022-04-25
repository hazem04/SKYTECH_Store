import { Component, OnInit , Input } from '@angular/core';
import { AuthService } from 'src/app/views/services/auth.service';
import { GettingproductsService } from 'src/app/views/services/gettingproducts.service';
import { ProductModule } from 'src/app/models/product/product.module';
import { ResultModule } from 'src/app/models/result/result.module';
import { faCircleXmark, faCoffee, faCross, faTrash, faTruck ,faStore} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataArray:Array<ProductModule>=[];
  user:string="";
  fastore=faStore;
  Category:string="Shop All";
  @Input() data:any;
  constructor(private productservice:GettingproductsService,private auth:AuthService,private route:ActivatedRoute,private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if(this.route.snapshot.params['cat']=="Shopall"){
      this.productservice.getAllProducts().subscribe(data=>{
        this.dataArray=data;
        
      })
     }else if(this.route.snapshot.params['cat']=="Laptops" || this.route.snapshot.params['cat']=="Audio" || this.route.snapshot.params['cat']=="Monitors" || this.route.snapshot.params['cat']=="Accessories"){
       this.productservice.getCategory(this.route.snapshot.params['cat']).subscribe(data=>{
         this.dataArray=data;
       })
     }
     else{
      this.productservice.searchProducts(this.route.snapshot.params['cat']).subscribe(data=>{
        this.dataArray=data;
      })
     }
   
    if(this.auth.LoggedIn()){
      this.user=this.auth.getUsername();
    }
   }

   ngOnInit(): void {
    this.route.params.subscribe(
        params => {
            const cat = params['cat'];
            if(cat=="Shopall"){
              this.Category="Shop All";
              
            }else{
            this.Category=cat}
            
            
        }
    );
    
}
  
  addToCart(item:any){
    this.productservice.addToCart(item.id_produit,this.user).subscribe(res=>{
      if(res.status=="success"){
        //success message
      }
    })
  }
 
 
  
}
