import { NullTemplateVisitor } from '@angular/compiler';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ClientListComponent } from './Clients/client-list/client-list.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crm-front';

  constructor(private router:Router){

  }

  ListarClientes(){
    this.router.navigate(["clients"]);
  }
};

