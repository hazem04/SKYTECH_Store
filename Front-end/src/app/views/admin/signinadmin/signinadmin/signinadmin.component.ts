import { Component, OnInit } from '@angular/core';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signinadmin',
  templateUrl: './signinadmin.component.html',
  styleUrls: ['./signinadmin.component.css']
})
export class SigninadminComponent implements OnInit {
  data:any;
  errorMessage:any;
  constructor(private authadmin:AuthadminService,private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    var email=(<HTMLInputElement>document.getElementById("mail_admin")).value;
    var password=(<HTMLInputElement>document.getElementById("password_admin")).value;
    let datatosend=`{"mailuser":"${email}","passworduser":"${password}"}`;
    this.authadmin.login(datatosend).subscribe((res)=>{
      this.data=res;
      this.authadmin.saveToken(this.data.token)
      this.route.navigate(['/admin/home'])
    },err=>{
      this.errorMessage="invalid email and password";
    });
  }
}
