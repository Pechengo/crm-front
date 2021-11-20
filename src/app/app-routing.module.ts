import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Client/add/add.component';
import { DeleteComponent } from './Client/delete/delete.component';
import { EditComponent } from './Client/edit/edit.component';
import { ListComponent } from './Client/list/list.component';

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'delete', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
