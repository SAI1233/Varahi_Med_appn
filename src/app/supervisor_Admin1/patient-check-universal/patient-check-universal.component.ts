import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-patient-check-universal',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, MatPaginatorModule, MatPaginatorModule
  ],
  templateUrl: './patient-check-universal.component.html',
  styleUrls: ['./patient-check-universal.component.css']
})
export class PatientCheckUniversalComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Declare paginator

  dataSource = new MatTableDataSource([
    { sNo: 1, emrNumber: 'EMR001', patientName: 'John Doe', wardNumber: 'A1', department: 'Cardiology', status: 'Admitted', mobileNumber: '123-456-7890', admissionDate: '2025-01-01', patientType: 'Inpatient' },
    { sNo: 2, emrNumber: 'EMR002', patientName: 'Jane Smith', wardNumber: 'B1', department: 'Neurology', status: 'Discharged', mobileNumber: '987-654-3210', admissionDate: '2025-01-02', patientType: 'Outpatient' },
    { sNo: 3, emrNumber: 'EMR003', patientName: 'Robert Brown', wardNumber: 'C2', department: 'Orthopedics', status: 'Admitted', mobileNumber: '456-789-0123', admissionDate: '2025-01-03', patientType: 'Inpatient' },
    { sNo: 4, emrNumber: 'EMR004', patientName: 'Mary Johnson', wardNumber: 'D3', department: 'Cardiology', status: 'Discharged', mobileNumber: '654-321-0987', admissionDate: '2025-01-04', patientType: 'Outpatient' },
    { sNo: 5, emrNumber: 'EMR005', patientName: 'Michael Williams', wardNumber: 'E4', department: 'Neurology', status: 'Admitted', mobileNumber: '789-012-3456', admissionDate: '2025-01-05', patientType: 'Inpatient' },
    { sNo: 6, emrNumber: 'EMR006', patientName: 'Elizabeth Martinez', wardNumber: 'F5', department: 'Orthopedics', status: 'Discharged', mobileNumber: '321-654-9870', admissionDate: '2025-01-06', patientType: 'Outpatient' },
    { sNo: 7, emrNumber: 'EMR007', patientName: 'William Garcia', wardNumber: 'G6', department: 'Cardiology', status: 'Admitted', mobileNumber: '135-791-2468', admissionDate: '2025-01-07', patientType: 'Inpatient' },
    { sNo: 8, emrNumber: 'EMR008', patientName: 'Linda Robinson', wardNumber: 'H7', department: 'Neurology', status: 'Discharged', mobileNumber: '246-802-1357', admissionDate: '2025-01-08', patientType: 'Outpatient' },
    { sNo: 9, emrNumber: 'EMR009', patientName: 'James Lee', wardNumber: 'I8', department: 'Orthopedics', status: 'Admitted', mobileNumber: '102-938-4756', admissionDate: '2025-01-09', patientType: 'Inpatient' },
    { sNo: 10, emrNumber: 'EMR010', patientName: 'Patricia Taylor', wardNumber: 'J9', department: 'Cardiology', status: 'Discharged', mobileNumber: '567-890-1234', admissionDate: '2025-01-10', patientType: 'Outpatient' }
  ]);

  filter = {
    patientName: '',
    emrNumber: '',
    mobileNumber: '',
    admissionDate: '',
    patientType: ''
  };

  displayedColumns: string[] = ['sNo', 'emrNumber', 'patientName', 'wardNumber', 'department', 'status', 'mobileNumber', 'admissionDate', 'patientType'];
  pageSize: number = 5;  
  pageSizeOptions: number[] = [5, 10, 20];  

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.dataSource.filterPredicate = (data, filter) => {
      const filterValues = JSON.parse(filter);
      return (
        (filterValues.patientName ? data.patientName.toLowerCase().includes(filterValues.patientName.toLowerCase()) : true) &&
        (filterValues.emrNumber ? data.emrNumber.toLowerCase().includes(filterValues.emrNumber.toLowerCase()) : true) &&
        (filterValues.mobileNumber ? data.mobileNumber.includes(filterValues.mobileNumber) : true) &&
        (filterValues.admissionDate ? data.admissionDate === filterValues.admissionDate : true) &&
        (filterValues.patientType ? data.patientType.toLowerCase().includes(filterValues.patientType.toLowerCase()) : true)
      );
    };
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // Initialize paginator
  }

  applyFilter(): void {
    this.dataSource.filter = JSON.stringify(this.filter);
  }


}