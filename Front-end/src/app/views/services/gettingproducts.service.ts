import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,Observer} from 'rxjs';
import {map} from 'rxjs/operators';
import { CartModule } from 'src/app/models/cart/cart.module';
import { ResultModule } from 'src/app/models/result/result.module';
import { ProductModule } from 'src/app/models/product/product.module';
const httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })}
@Injectable({
  providedIn: 'root'
})
export class GettingproductsService {
  baseUrl='http://localhost/skytech/api/cart';
  constructor(private http:HttpClient) { }
  searchProducts(search:any){
   return this.http.get<Array<ProductModule>>(`http://localhost/skytech/api/products/searchForProducts.php?lib_produit=${search}`);
  }
 addToCart(item:any,mail:any){
  return this.http.get<ResultModule>(`${this.baseUrl}/addToCart.php?id_produit=${item}&mail_user=${mail}`);
 }
 getAllProducts(){
   return this.http.get<Array<ProductModule>>(`http://localhost/skytech/api/products/getAllProducts.php`);
 }
 gettingCart(id:any){
   return this.http.get<Array<CartModule>>(`${this.baseUrl}/getCart.php?mail=${id}`);
 }
 changeQuantity(item:any,value:any){
    return this.http.get<ResultModule>(`${this.baseUrl}/updateCart.php?id_produit=${item.id_produit}&id_panier=${item.id_panier}&qte_produit=${value}`);
 }
 deletingOneProduct(item:any){
   return this.http.get<ResultModule>(`${this.baseUrl}/deleteFromCart.php?id_produit=${item.id_produit}&id_panier=${item.id_panier}`);
 }
 deletingAllProducts(id:any){
   return this.http.get<ResultModule>(`${this.baseUrl}/deleteAllCart.php?mail_user=${id}`);
 }
 getCategory(name:any){
  return this.http.get<Array<ProductModule>>(`http://localhost/skytech/api/products/getACategory.php?lib_cat=${name}`);
 }
 
}
