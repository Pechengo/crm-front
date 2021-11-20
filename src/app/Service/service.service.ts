import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Modelo/Client';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})

export class Service {
    constructor(private http:HttpClient) { }

    Url="http://localhost:8080/test";

    getClient():Observable<Client[]> {
      return this.http.get<Client[]>(this.Url);
    }
}