import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalFilterComponent } from 'src/app/Modal/modal-filter/modal-filter.component';
import { ModalNewComponent } from 'src/app/Modal/modal-new/modal-new.component';
import { Client } from 'src/app/Modelo/Client';
import { Product } from 'src/app/Modelo/Product';
import { Sale } from 'src/app/Modelo/Sale';
import { ClientService } from 'src/app/Service/clientservice.service';
import { ProductService } from 'src/app/Service/productservice.service';
import { SaleService } from 'src/app/Service/saleservice.service';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
  public sales: Sale[];
  public clients: Client[];
  public products: Product[];
  public saleForm: FormGroup;
  public saleList: Sale[];
  constructor(private saleService: SaleService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private clientService: ClientService,
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.ListarVentas();
    this.ListarClientes();
    this.ListarProductos();
  }

  ListarVentas() {
    this.saleService.getSales().subscribe(data => {
      this.sales = data;
    })
  }

  ListarClientes() {
    this.clientService.getClient().subscribe(data => {
      this.clients = data;
    })
  }

  ListarProductos() {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    })
  }

  generarFiltro() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';
    this.dialog.open(ModalFilterComponent, dialogConfig).afterClosed().subscribe(data => {
      this.listarVentasFiltradas(data);
    })
  }

  listarVentasFiltradas(filteredValue: any) {
    this.saleService.getSalesFiltered(filteredValue).subscribe(data =>
      this.sales = data);
  }

  agregarVenta() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';
    this.dialog.open(ModalNewComponent, dialogConfig).afterClosed().subscribe(sale => {
      this.saleService.addSale(sale).subscribe(resp => {
        this.ListarVentas();
      });
    });
  }
}

