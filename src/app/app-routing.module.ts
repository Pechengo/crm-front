import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './Clients/client-list/client-list.component';
import { ProductListComponent } from './Products/product-list/product-list.component';

const routes: Routes = [
  {path:'clients', component:ClientListComponent},
  {path:'products', component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
