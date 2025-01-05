import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-case-transfer',
  standalone: true,
  imports: [MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, MatPaginatorModule],
  templateUrl: './case-transfer.component.html',
  styleUrl: './case-transfer.component.css'
})
export class CaseTransferComponent {

  constructor(private fb: FormBuilder, private dialog: MatDialog) {

  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
  }


  onSubmit(): void {
    alert('transfered sucessfully');
  }


}
