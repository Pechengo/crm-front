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

    private Url = 'http://localhost:8080'
    getClient():Observable<any> {
      return this.http.get(this.Url+"/clients");
    }

    insertClient(client:any): Observable<any>{
      return this.http.post(this.Url+"/clients",client);
    }

    deleteClient(id:any): Observable<any>{
      return this.http.delete(this.Url+"/delete"+id);
    }

    editClient(client:any): Observable<any>{
      return this.http.post(this.Url+"/update"+client.id,client);
    }
}