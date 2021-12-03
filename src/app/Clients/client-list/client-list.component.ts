import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalDeleteComponent } from 'src/app/Modal/modal-delete/delete.component';
import { Client } from 'src/app/Modelo/Client';
import { ClientService } from 'src/app/Service/clientservice.service';
import { ClientEditComponent } from '../client-edit/client-edit.component';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
  public clients: Client[];
  public clientListForm: FormGroup;

  constructor(private service: ClientService,
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.ListarClientes();
  }

  ListarClientes() {
    this.service.getClient().subscribe(data => {
      this.clients = data;
    })
    return this.clients;

  }

  NuevoCliente() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';
    this.dialog.open(ClientComponent, dialogConfig);
  }

  EditarCliente(client: any) {
    this.clientListForm = this.fb.group({
      idclient: client.idclient,
      name: client.name,
      surname: client.surname
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';
    dialogConfig.data = this.clientListForm.value;
    this.dialog.open(ClientEditComponent, dialogConfig)
    console.log(dialogConfig.data)
  }

  EliminarCliente(client: any) {
    this.dialog.open(ModalDeleteComponent, {
      data: "¿Desea eliminar el cliente" + " " + client.name + " " + client.surname + "?"
    })
      .afterClosed().subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.service.deleteClient(client.idclient).subscribe(resp => {
            if (resp == true) {
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
