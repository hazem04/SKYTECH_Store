import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage:any = "";
  constructor(private auth:AuthService,private router:Router) {
    this.router=router;
   }

  ngOnInit(): void {
  }

  formValidation(firstname:string,lastname:string,email:string,numtel:number,password:string):boolean{
    var namergx=/^[A-Za-z]{3,15}$/;
    var passwordrgx=/^[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    var emailrgx=/^[A-Za-z_]{3,20}@[a-zA-Z]{3,10}[.]{1}[A-Za-z]{2,3}$/;
    var phonergx=/^[75429][0-9]{7}$/;
    return(namergx.test(firstname) && namergx.test(lastname) && emailrgx.test(email) && phonergx.test(numtel.toString()) && passwordrgx.test(password));
  }
  verifyData(){
    var firstname=(<HTMLInputElement>document.getElementById("firstname")).value;
    var lastname=(<HTMLInputElement>document.getElementById("firstname")).value;
    var email=(<HTMLInputElement>document.getElementById("mail_user")).value;
    var numtel=parseInt((<HTMLInputElement>document.getElementById("num_tel")).value);
    var password=(<HTMLInputElement>document.getElementById("password_user")).value;
    var confirmpass=(<HTMLInputElement>document.getElementById("confirmpassword_user")).value;
   
    if(password!==confirmpass){
      this.errorMessage="Passwords does not match!"
    }
    else if(this.formValidation(firstname,lastname,email,numtel,password)){
      this.auth.signup(firstname,lastname,email,numtel,password).subscribe(data=>{
        let check:any=data;
        console.log(check);
        if(check.status=="success")
        this.router.navigate(['/signin']);
        else this.errorMessage=check.reason;
      })
      
    }else{
      this.errorMessage="Wrong format!"
    }

  }

}
