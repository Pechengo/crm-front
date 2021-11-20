import { NullTemplateVisitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListComponent } from './Client/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crm-front';

  constructor(private router:Router){

  }

  Listar(){
    this.router.navigate(["list"]);
  }
}
