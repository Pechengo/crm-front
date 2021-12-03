import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../Modelo/Sale';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SaleService {

  constructor(private http: HttpClient) { }

  private Url = "http://localhost:8080/sales";

  getSales(): Observable<any> {
    return this.http.get(this.Url);
  }

  getSalesFiltered(filteredValue: any): Observable<any> {
    return this.http.get(`${this.Url}?idClient=${filteredValue.client}&fIni=${filteredValue.formatedFIni}&fFin=${filteredValue.formatedFFin}`);
  }

  addSale(sale: any): Observable<any> {
    return this.http.post(this.Url, sale);
  }
}
