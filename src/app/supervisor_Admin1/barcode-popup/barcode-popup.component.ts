import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxBarcode6Module } from 'ngx-barcode6';

@Component({
  selector: 'app-barcode-popup',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, NgxBarcode6Module],
  templateUrl: './barcode-popup.component.html',
  styleUrls: ['./barcode-popup.component.css']
})
export class BarcodePopupComponent {
  emrNumber: string = '1234567890';
}