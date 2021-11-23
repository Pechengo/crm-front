import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { matDialogAnimations } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { Client } from 'src/app/Modelo/Client';
import { Service } from 'src/app/Service/service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, style, transition, trigger } from '@angular/animations';
import { ClientComponent } from '../client/client.component';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-clients',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clients:Client[];
  constructor(private service:Service, private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ListarClientes()
  }

  ListarClientes(){
    this.service.getClient().subscribe(data=>{
      console.log(data);
      this.clients=data;
    })
  }

  NuevoCliente(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';
    this.dialog.open(ClientComponent,dialogConfig);
  }

  Editar(){
    this.router.navigate(["edit"]);
  }

  Eliminar(){
    this.router.navigate(["delete"]);
  }
}