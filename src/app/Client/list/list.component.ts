import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Modelo/Client';
import { Service } from 'src/app/Service/service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clients: Client[] = [];
  constructor(private service:Service, private router:Router) { }

  ngOnInit(): void {
    this.service.getClient()
    .subscribe(data=>{
      this.clients=data;
    })
  }

}
