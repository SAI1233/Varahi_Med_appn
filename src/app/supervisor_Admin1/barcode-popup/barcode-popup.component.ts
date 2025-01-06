import { Component, AfterViewInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxBarcode6Module } from 'ngx-barcode6';
import JsBarcode from 'jsbarcode';


@Component({
  selector: 'app-barcode-popup',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, NgxBarcode6Module],
  templateUrl: './barcode-popup.component.html',
  styleUrls: ['./barcode-popup.component.css']
})
export class BarcodePopupComponent implements AfterViewInit{
  emrNumber: string = '1234567890';

  ngAfterViewInit(): void {
    // Generate Barcode in SVG
    JsBarcode('#barcode', this.emrNumber, {
      format: 'CODE128',
      displayValue: false, // Hide the text below the barcode
      width: 2,            // Width of bars
      height: 40,          // Height of the barcode
      margin: 0            // No margin around the barcode
    });
  }

}