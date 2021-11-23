import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { matDialogAnimations } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { Client } from 'src/app/Modelo/Client';
import { Service } from 'src/app/Service/service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, style, transition, trigger } from '@angular/animations';
import { ClientComponent } from '../client/client.component';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Observable } from 'rxjs';
import { ClientEditComponent } from '../client-edit/client-edit.component';
import { ModalDeleteComponent } from 'src/app/Modal/modal-delete/delete.component';

@Component({
  selector: 'app-clients',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clients:Client[];
  public clientListForm: FormGroup;
  constructor(private service:Service, private router:Router, private dialog: MatDialog, private fb: FormBuilder) { }

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

  EditarCliente(client:any){
    this.clientListForm = this.fb.group({
      id: client.id,
      name: client.name,
      surname: client.surname
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';    
    dialogConfig.data = this.clientListForm.value;    
    this.dialog.open(ClientEditComponent,dialogConfig)
    console.log(dialogConfig.data)
  }

  EliminarCliente(client: any){
    this.dialog.open(ModalDeleteComponent,{
      data: "¿Desea eliminar el cliente"+" "+client.name+" "+client.surname+"?"})
      .afterClosed().subscribe((confirmado: Boolean)=>{
        if (confirmado){
          this.service.deleteClient(client.id).subscribe(resp=>{
            if(resp==true){
              this.clients.pop();
              window.location.reload();
            }
          })
        } else {
          close();
        }
      })
  }
}
