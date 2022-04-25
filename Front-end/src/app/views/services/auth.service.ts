import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ResultModule } from 'src/app/models/result/result.module';
const httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost/skytech/api';
 // helper=new JwtHelperService()
  constructor(private http:HttpClient) { }
  login(email:string,password:string){
    return this.http.post<ResultModule>(`${this.baseUrl}/signin.php?mail=${email}&pass=${password}`,httpOptions);
  }
  logout(){
    localStorage.clear();
  }
  signup(firstname:string,lastname:string,email:string,numtel:number,password:string){
    return this.http.get<ResultModule>(`${this.baseUrl}/signup.php?mail=${email}&pass=${password}&firstname=${firstname}&lastname=${lastname}&phone=${numtel}`);
  }

  saveToken(token:any,role:any){
    localStorage.setItem('token',token);
    localStorage.setItem('role',role);
  }
  getUsername(){
    let token:any=localStorage.getItem('token');
    //let decodeToken=this.helper.decodeToken(token);
    return token;
  }
  LoggedIn(){
    if(!localStorage.getItem('token'))
    return false;
    
   let role:any=localStorage.getItem('role');
   //let decodeToken=this.helper.decodeToken(token);

   if(role!=="Client")
     return false;
  /* if(this.helper.isTokenExpired(token))
    return false;*/

    return true;
  }
}
