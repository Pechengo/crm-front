import { Component, OnInit, Query } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalDeleteComponent } from 'src/app/Modal/modal-delete/delete.component';
import { Product } from 'src/app/Modelo/Product';
import { ProductService } from 'src/app/Service/productservice.service';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products:Product[];
  public productListForm: FormGroup;
  
  constructor(
    private service:ProductService, 
    private router:Router, 
    private dialog: MatDialog, 
    private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.ListarProductos();
  }

  ListarProductos(){
    this.service.getProduct().subscribe(data=>{
      this.products=data;
    })
  }

  NuevoProducto(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.height='400px';
    dialogConfig.width='600px';
    this.dialog.open(ProductComponent, dialogConfig);
  }

  EliminarProducto(product: any){
    this.dialog.open(ModalDeleteComponent,{
      data: "¿Desea eliminar el producto"+" "+product.desc_product+"?"})
      .afterClosed().subscribe((confirmado: Boolean)=>{
        if (confirmado){
          this.service.deleteProduct(product.idproduct).subscribe(resp=>{
            if(resp==true){
              this.products.pop();
              window.location.reload();
            }
          })
        } else {
          close();
        }
      })
  }

  EditarProducto(product: any) {
    console.log(product);
    this.productListForm = this.fb.group({
      idproduct: product.idproduct,
      desc_product: product.desc_product,
      price_product: product.price_product
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.height='400px';
    dialogConfig.width='600px';
    dialogConfig.data=this.productListForm.value;
    this.dialog.open(ProductEditComponent,dialogConfig);
  }
}