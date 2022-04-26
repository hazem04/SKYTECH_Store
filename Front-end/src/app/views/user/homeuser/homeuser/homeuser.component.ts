import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/services/auth.service';
import { GettingproductsService } from 'src/app/views/services/gettingproducts.service';
import { CartModule } from 'src/app/models/cart/cart.module';
import { ResultModule } from 'src/app/models/result/result.module';
import { faCircleXmark, faCoffee, faCross, faTrash, faTruck } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css','./struct.css']
})
export class HomeuserComponent implements OnInit {
  LoggedIn:boolean=false;
  constructor(private auth:AuthService,private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.LoggedIn=this.auth.LoggedIn();
   }

  ngOnInit(): void {
  }
  
}
