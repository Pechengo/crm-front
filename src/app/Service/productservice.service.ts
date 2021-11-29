import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  private Url = 'http://localhost:8080/products';

  getProduct(): Observable<any>{
    return this.http.get(this.Url);
  }

  insertProduct(product:any): Observable<any>{
    return this.http.post(this.Url,product);
  }

  deleteProduct(id:any): Observable<any>{
    return this.http.delete(this.Url+"/delete"+id)
  }

  editProduct(product:any): Observable<any>{
    console.log(product);
    return this.http.post(this.Url+"/update"+product.idproduct,product);
  }
}
