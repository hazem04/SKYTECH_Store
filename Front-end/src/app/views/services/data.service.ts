import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ProductModule } from 'src/app/models/product/product.module';
const httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl='http://localhost/skytech/api/admin';
  constructor(private httpclient:HttpClient) { }
  getData(){
    return this.httpclient.get(`${this.baseUrl}/read.php`)
  }
  insertdata(data: any,admin:any){
    return this.httpclient.get(`${this.baseUrl}/create.php?lib_produit=${data.lib_produit}
    &prix_produit=${data.prix_produit} &img_produit=${data.img_produit} &id_cat=${data.id_cat}&description=${data.description}&mail_admin=${admin}&qte_produit=${data.qte_produit}`)
  }
  deletedata(data: any){
    return this.httpclient.get(`${this.baseUrl}/delete.php?id_produit=${data}`)
  }
  getdatabyid(data: any){
    return this.httpclient.get(`${this.baseUrl}/single_read.php?id_produit=${data}`)
  }
  updatedata(data: any,admin:any){
    return this.httpclient.get(`${this.baseUrl}/update.php?id_produit=${data.id_produit}&lib_produit=${data.lib_produit}
    &prix_produit=${data.prix_produit}&img_produit=${data.img_produit}&id_cat=${parseInt(data.id_cat)}&description=${data.description}&mail_admin=${admin}&qte_produit=20`)
  }
}
