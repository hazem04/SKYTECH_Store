import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/services/auth.service';
import { GettingproductsService } from 'src/app/views/services/gettingproducts.service';
import { CartModule } from 'src/app/models/cart/cart.module';
import { ResultModule } from 'src/app/models/result/result.module';
import { faCircleXmark, faCoffee, faCross, faTrash, faTruck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  faTrash=faTrash;
  faCross=faCircleXmark;
  faTruck=faTruck
  quantitySurpassed=false;
  totalprice=0;
  merchandise=0;
  shippingprice="";
  usermail="";
  alertMessage="";
  dataArray:Array<CartModule>=[];
  constructor(private srv:GettingproductsService,private auth:AuthService) {
    
    if(this.auth.LoggedIn()){
    this.usermail=this.auth.getUsername();
    this.srv.gettingCart(this.usermail).subscribe(data=>{this.dataArray=data})}
    
    this.srv.gettingCart(this.usermail).subscribe(data=>{this.dataArray=data;this.init();});
   }

  ngOnInit(): void {
  }

  public init(){
      this.srv.gettingCart(this.usermail).subscribe(data => { this.dataArray = data; });
      this.TotalPrice();
      this.merchandise = this.totalprice;
      this.shippingprice = "FREE";
      if (this.totalprice < 100) {
        this.shippingprice = "7 TND";
        this.totalprice += 7;
      }
  }
  public TotalPrice(){
    this.totalprice=0;
      for(let item of this.dataArray){
        this.totalprice+=item.qte_produit*item.prix_produit;
      }
      
    
  }
  
  public changingQuantity(item:any){
    
    var newValue=(<HTMLInputElement>document.getElementById(item.id_produit));
    newValue.style.color='black';
    if (this.usermail !== "User"){
    this.srv.changeQuantity(item,newValue.value).subscribe(res=>{
      if (res.status=="failed"){
        newValue.style.color='red';
        this.quantitySurpassed=true;
      }else{
      this.quantitySurpassed=false;
      let id=item.id_produit;
      for(let i of this.dataArray){
        if(i.id_produit==id)
        i.qte_produit=parseInt(newValue.value);
      }
      this.init();
      }
    });
  }
    
  }
  public deleteProduct(item:any){
    this.srv.deletingOneProduct(item).subscribe(res=>{
      this.init();
    },err=>{
      console.log(err);
    });
  }
  public deleteAllProducts(){
    this.srv.deletingAllProducts(this.usermail).subscribe(res=>{
      this.init();
      //this.alertMessage="Removed all produts"
    },err=>{
      console.log(err);
    });
  }
  public removeNotification(){
    var alertDiv=(<HTMLInputElement>document.getElementById('alert'));
    alertDiv.style.display='none';
  }

}
