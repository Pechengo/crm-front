import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './Clients/client-list/client-list.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Service} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogContainer} from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table'
import { ClientComponent } from './Clients/client/client.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ClientEditComponent } from './Clients/client-edit/client-edit.component';
import { ModalComponent } from './Modal/modal.component';
import { ModalDeleteComponent } from './Modal/modal-delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientComponent,
    ClientEditComponent,
    ModalComponent,
    ModalDeleteComponent
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
    ReactiveFormsModule
  ],
  providers: [
    Service
  ],
  bootstrap: [AppComponent],
  entryComponents:[ClientComponent]
})
export class AppModule { }
