import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './Clients/client-list/client-list.component';
import { ClientComponent } from './Clients/client/client.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { SaleListComponent } from './Sale/sale-list/sale-list.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'sales', component: SaleListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
