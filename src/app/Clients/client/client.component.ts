import { Component, Inject, OnInit } from '@angular/core';
import { Client } from 'src/app/Modelo/Client';
import { MatDialogRef, MatDialog, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Service } from 'src/app/Service/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private service:Service, 
    private fb:FormBuilder, 
    private dialog:MatDialogRef<Client>, 
    private router:Router){}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      name: '',
      surname: ''
    })
  };


  onSubmit(){
    this.service.insertClient(this.clientForm.value).subscribe(resp => this.goToClientList());
  };
  
  goToClientList(){
    this.dialog.close();
    this.router.navigate(["clients"]);
  }
      //this.service.insertClient(this.form).subscribe(resp=> {
      //});
}