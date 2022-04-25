import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from "@auth0/angular-jwt";
const httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
  helper=new JwtHelperService()
  role='';
  nom_admin='';
  constructor(private http:HttpClient) { 

  }
  login(data:any){
    return this.http.post("http://localhost:3000/admin/signin",data,httpOptions);
  }
  saveToken(token:any){
    localStorage.setItem('token',token);
  }

  getUsername(){
    let token:any=localStorage.getItem('token');
    let deocdeToken=this.helper.decodeToken(token);
    return deocdeToken.nom_admin;
  }

  LoggedIn(){
    let token:any=localStorage.getItem('token');
    if(!token)
    return false;
    let decodeToken=this.helper.decodeToken(token);
    if(decodeToken.role!=="Admin")
    return false;
    if(this.helper.isTokenExpired(token))
    return false;
    return true;
  }
  

}
