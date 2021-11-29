import { Component, Inject, OnInit } from '@angular/core';
import { Client } from 'src/app/Modelo/Client';
import { MatDialogRef, MatDialog, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ClientService } from 'src/app/Service/clientservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent { //implements OnInit {
  client: Client;
  clientForm: FormGroup;

  constructor(
    private service:ClientService, 
    private fb:FormBuilder, 
    private dialog:MatDialogRef<Client>, 
    private router:Router){}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      idclient: '',
      name: '',
      surname: ''
    })
  };

  onSubmit(){
    this.service.insertClient(this.clientForm.value).subscribe(resp => this.goToClientList());
  };
  
  goToClientList(){
    window.location.reload();
  }
      //this.service.insertClient(this.form).subscribe(resp=> {
      //});
  close(){
    this.dialog.close();
  }
}