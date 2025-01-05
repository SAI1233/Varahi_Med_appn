import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BarcodePopupComponent } from '../barcode-popup/barcode-popup.component';
import { CommonModule } from '@angular/common';
import { MatMenuTrigger, MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatButton, MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-new-registration',
  standalone: true,
  imports: [CommonModule,FormsModule,MatMenuModule,MatDialogModule,MatButtonModule],
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.scss']
})
export class NewRegistrationComponent implements OnInit {
  registrationForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      bodyTemp: ['', Validators.required],
      pulse: ['', Validators.required],
      currentMedi: ['', Validators.required],
      mobNum: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      goverIden: ['', Validators.required],
      photo: [null, Validators.required],
      emgncyfirstname: ['', Validators.required],
      emgncylastname: ['', Validators.required],
      emgncyrelation: ['', Validators.required],
      emgncycontact: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // alert('Form Submitted');

 

      const dialogRef = this.dialog.open(BarcodePopupComponent, {
        width: '80%', height: '80vh', maxWidth: '80vw', maxHeight: '90vh'
      });
  
      dialogRef.afterClosed().subscribe((result) => { });
    
  }

  






}