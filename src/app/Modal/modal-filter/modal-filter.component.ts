import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/Modelo/Client';
import { ClientService } from 'src/app/Service/clientservice.service';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.css']
})
export class ModalFilterComponent implements OnInit {
  clients: Client[];
  selectedClient: number;
  selectedFIni: any;
  selectedFFin: any;
  constructor(private datepipe: DatePipe,
    private clientService: ClientService,
    public dialog: MatDialogRef<ModalFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public idClient: number,
    @Inject(MAT_DIALOG_DATA) public fIni: string,
    @Inject(MAT_DIALOG_DATA) public fFin: string
  ) { }

  ngOnInit() {
    this.ListarClientes();
  }

  ListarClientes() {
    this.clientService.getClient().subscribe(data => {
      this.clients = data;
    })
  }

  confirmado(client: number, fIni: any, fFin: any) {
    let formatedFIni = this.datepipe.transform(fIni, 'dd/MM/yyyy')?.toString();
    let formatedFFin = this.datepipe.transform(fFin, 'dd/MM/yyyy')?.toString();
    let filteredValue = {
      client,
      formatedFIni,
      formatedFFin
    }
    console.log(filteredValue);
    this.dialog.close(filteredValue);
  }

  cancelado() {
    this.dialog.close();
  }
}

