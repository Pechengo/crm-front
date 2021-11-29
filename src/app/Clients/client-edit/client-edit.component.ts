import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client } from 'src/app/Modelo/Client';
import { ClientService } from 'src/app/Service/clientservice.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client: Client;
  clientEditForm: FormGroup;

  constructor(private service:ClientService, 
    private fb:FormBuilder, 
    private dialog:MatDialogRef<Client>, 
    private router:Router,
    
    public dialogRef:MatDialogRef<Client>,@Inject(MAT_DIALOG_DATA) public data: any,) {
      this.clientEditForm= this.fb.group({
        idclient: this.data.idclient,
        name: this.data.name,
        surname: this.data.surname
      })
    }

  ngOnInit(): void {}

  guardarCliente(){
    this.service.editClient(this.clientEditForm.value).subscribe(resp=>window.location.reload());
  }

  close(){
    this.dialog.close();
  }
}