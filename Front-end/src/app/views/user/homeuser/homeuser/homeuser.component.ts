import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/services/auth.service';
import { GettingproductsService } from 'src/app/views/services/gettingproducts.service';
import { CartModule } from 'src/app/models/cart/cart.module';
import { ResultModule } from 'src/app/models/result/result.module';
import { faCircleXmark, faCoffee, faCross, faTrash, faTruck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {
  LoggedIn:boolean=false;
  constructor(private auth:AuthService) {
      this.LoggedIn=this.auth.LoggedIn();
   }

  ngOnInit(): void {
  }
  
}
