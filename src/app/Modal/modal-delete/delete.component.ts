import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<ModalDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

  cancelar(): void {
    this.dialogo.close(false);
  }
  confirmado(): void {
    this.dialogo.close(true);
  }

  ngOnInit() {
  }

}