import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/Modelo/Product';
import { ProductService } from 'src/app/Service/productservice.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productEditForm: FormGroup;

  constructor(
    private service: ProductService,
    private fb: FormBuilder,
    private dialog:MatDialogRef<Product>,
    private router:Router,

    public dialogRef:MatDialogRef<Product>,@Inject(MAT_DIALOG_DATA) public data: any,){
      this.productEditForm = this.fb.group({
        idproduct: this.data.idproduct,
        desc_product: this.data.desc_product,
        price_product: this.data.price_product
      })
    }
  

  ngOnInit(): void {  }

  guardarProducto(){
    this.service.editProduct(this.productEditForm.value).subscribe(resp=>
      window.location.reload());
  }

  close(){
    this.dialog.close();
  }
}
