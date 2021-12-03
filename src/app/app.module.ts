import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './Clients/client-list/client-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './Service/clientservice.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogContainer } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table'
import { ClientComponent } from './Clients/client/client.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ClientEditComponent } from './Clients/client-edit/client-edit.component';
import { ModalComponent } from './Modal/modal.component';
import { ModalDeleteComponent } from './Modal/modal-delete/delete.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductEditComponent } from './Products/product-edit/product-edit.component';
import { ProductComponent } from './Products/product/product.component';
import { SaleComponent } from './Sale/sale.component';
import { SaleListComponent } from './Sale/sale-list/sale-list.component';
import { SaleNewComponent } from './Sale/sale-new/sale-new.component';
import { ModalFilterComponent } from './Modal/modal-filter/modal-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { ProductService } from './Service/productservice.service';
import { SaleService } from './Service/saleservice.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { ModalNewComponent } from './Modal/modal-new/modal-new.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientComponent,
    ClientEditComponent,
    ModalComponent,
    ModalDeleteComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductComponent,
    SaleComponent,
    SaleListComponent,
    SaleNewComponent,
    ModalFilterComponent,
    ModalNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    ClientService,
    ProductService,
    SaleService,
    MatDatepickerModule,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [ClientComponent]
})
export class AppModule { }
