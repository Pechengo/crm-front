import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/Modelo/Product';
import { ProductService } from 'src/app/Service/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product;
  productForm: FormGroup;

  constructor(
    private service:ProductService,
    private fb:FormBuilder,
    private dialog:MatDialogRef<Product>,
    private router:Router){}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: '',
      desc_product: '',
      price_product: ''
    })
  }

  onSubmit(){
    this.service.insertProduct(this.productForm.value).subscribe(resp =>
      this.goToProductList());
  }

  goToProductList(){
    window.location.reload();
  }

  close(){
    this.dialog.close();
  }
}
