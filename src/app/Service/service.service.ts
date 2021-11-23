import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Modelo/Client';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class Service {
    constructor(private http:HttpClient) { }

    private Url = 'http://localhost:8080/clients'
    getClient():Observable<any> {
      return this.http.get(this.Url);
    }

    insertClient(client:any): Observable<any>{
      return this.http.post(this.Url,client);
    }
}