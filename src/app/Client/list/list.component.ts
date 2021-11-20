import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Client } from 'src/app/Modelo/Client';
import { Service } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public clients:Client[];
  constructor(private service:Service, private router:Router) { }

  ngOnInit(): void {
    this.ListarClientes()
  }

  ListarClientes(){
    this.service.getClient().subscribe(data=>{
      console.log(data);
      this.clients=data;
    })
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }

  Editar(){
    this.router.navigate(["edit"]);
  }

  Eliminar(){
    this.router.navigate(["delete"]);
  }

}
