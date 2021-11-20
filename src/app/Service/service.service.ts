import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Modelo/Client';
import { BrowserModule } from '@angular/platform-browser';
  
@Injectable({
  providedIn: 'root'
})

export class Service {
    constructor(private http: HttpClient) { }

    Url="http://localhost:8080/crm/client";

    getClient(){
      return this.http.get<Client[]>(this.Url);
    }
}