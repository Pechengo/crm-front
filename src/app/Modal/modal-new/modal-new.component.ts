import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/Modelo/Client';
import { Product } from 'src/app/Modelo/Product';
import { ClientService } from 'src/app/Service/clientservice.service';
import { ProductService } from 'src/app/Service/productservice.service';
import { SaleService } from 'src/app/Service/saleservice.service';

@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.css']
})
export class ModalNewComponent implements OnInit {
  clients: Client[];
  products: Product[];
  productPriceValue: Product;
  selectedClient = new FormControl();
  selectedProduct = new FormControl();
  selectedQuantity = new FormControl();
  newSale: FormGroup;
  constructor(private fb: FormBuilder,
    private clientService: ClientService,
    private productService: ProductService,
    private saleService: SaleService,
    private datePipe: DatePipe,
    public dialog: MatDialogRef<ModalNewComponent>,
    @Inject(MAT_DIALOG_DATA) public idClient: number,
    @Inject(MAT_DIALOG_DATA) public idProduct: number,
    @Inject(MAT_DIALOG_DATA) public quantity: number,
    @Inject(MAT_DIALOG_DATA) public salePrice: number,
    @Inject(MAT_DIALOG_DATA) public saleDate: string
  ) {
    this.newSale = this.fb.group({
      formClient: this.selectedClient,
      formProduct: this.selectedProduct,
      formQuantity: this.selectedQuantity
    })
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(product => {
      this.products = product;
    });
    this.clientService.getClient().subscribe(client => {
      this.clients = client;
    });
  }

  confirmado(idClient: any, idProduct: any, quantity: any) {
    this.productService.getProductById(idProduct).subscribe(filteredProduct => {
      this.productPriceValue = filteredProduct;
      let selectedValues = {
        idSale: '',
        idClient,
        idProduct,
        quantity,
        salePrice: quantity * this.productPriceValue.price_product,
        saleDate: new Date()
      }
      this.dialog.close(selectedValues);
    })
  }

  cancelado() {
    this.dialog.close();
  }

}
