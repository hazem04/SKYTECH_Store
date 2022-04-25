import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/views/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMessage='';
  dataToken:any;
  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    var email=(<HTMLInputElement>document.getElementById("mail_user")).value;
    var password=(<HTMLInputElement>document.getElementById("password_user")).value;
    //let datatosend=`{"mailuser":"${email}","passworduser":"${password}"}`;
    this.auth.login(email,password).subscribe((res)=>{
      
      if(res.token !== undefined){
      this.dataToken=res;
      this.auth.saveToken(this.dataToken.token,this.dataToken.role)
      if(this.dataToken.role=='Client')
      this.route.navigate(['/']);
      if(this.dataToken.role=='Admin')
      this.route.navigate(['/admin']);
      }
      else{
        this.errorMessage="invalid email and password";
      }
    },err=>{
      this.errorMessage="invalid email and password";
    });
  }

}
