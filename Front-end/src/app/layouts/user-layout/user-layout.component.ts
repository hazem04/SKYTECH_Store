import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/services/auth.service';
import {Router} from '@angular/router';
import { GettingproductsService } from 'src/app/views/services/gettingproducts.service';
@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css','./struct.css']
})
export class UserLayoutComponent implements OnInit {
  LoggedIn:boolean=false;
  cat:string="ShopAll";
  constructor(private auth:AuthService,private router:Router,private srv:GettingproductsService) {
      this.LoggedIn=this.auth.LoggedIn();
   }
  

  ngOnInit(): void {
  }
  
  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }
  login(){
    this.router.navigate(['/signin']);
  }
  searchProduct(){
    var search=(<HTMLInputElement>document.getElementById("search")).value;
    this.router.navigate(['/products',search])
  }
  
}
