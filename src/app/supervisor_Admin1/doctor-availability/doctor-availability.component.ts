import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-doctor-availability',
  standalone: true,
  imports: [ MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      FormsModule, MatPaginatorModule],
  templateUrl: './doctor-availability.component.html',
  styleUrl: './doctor-availability.component.css'
})
export class DoctorAvailabilityComponent implements OnInit, AfterViewInit {

  
    @ViewChild(MatPaginator) paginator!: MatPaginator; // Declare paginator
  

    dataSource = new MatTableDataSource([
      { sNo: 1, doctorName: 'Dr. John Smith', doctorDepartment: 'Cardiology', timeAvailability: '10:00 AM - 12:00 PM', location: 'Room A1', date: '2025-01-01' },
      { sNo: 2, doctorName: 'Dr. Jane Doe', doctorDepartment: 'Neurology', timeAvailability: '1:00 PM - 3:00 PM', location: 'Room B2', date: '2025-01-02' },
      { sNo: 3, doctorName: 'Dr. Robert Brown', doctorDepartment: 'Orthopedics', timeAvailability: '9:00 AM - 11:00 AM', location: 'Room C3', date: '2025-01-03' },
      { sNo: 4, doctorName: 'Dr. Emily Johnson', doctorDepartment: 'Pediatrics', timeAvailability: '2:00 PM - 4:00 PM', location: 'Room D4', date: '2025-01-04' },
      { sNo: 5, doctorName: 'Dr. Michael Williams', doctorDepartment: 'Dermatology', timeAvailability: '11:00 AM - 1:00 PM', location: 'Room E5', date: '2025-01-05' },
      { sNo: 6, doctorName: 'Dr. Olivia Martinez', doctorDepartment: 'ENT', timeAvailability: '3:00 PM - 5:00 PM', location: 'Room F6', date: '2025-01-06' },
      { sNo: 7, doctorName: 'Dr. William Garcia', doctorDepartment: 'Cardiology', timeAvailability: '9:00 AM - 11:00 AM', location: 'Room G7', date: '2025-01-07' },
      { sNo: 8, doctorName: 'Dr. Linda Robinson', doctorDepartment: 'Neurology', timeAvailability: '12:00 PM - 2:00 PM', location: 'Room H8', date: '2025-01-08' },
      { sNo: 9, doctorName: 'Dr. James Lee', doctorDepartment: 'Orthopedics', timeAvailability: '10:00 AM - 12:00 PM', location: 'Room I9', date: '2025-01-09' },
      { sNo: 10, doctorName: 'Dr. Patricia Taylor', doctorDepartment: 'Pediatrics', timeAvailability: '1:00 PM - 3:00 PM', location: 'Room J10', date: '2025-01-10' }
    ]);
    
  
    filter = {
      doctorName: '',
      doctorDepartment: ''
  
    };
  
    displayedColumns: string[] = ['sNo', 'doctorName', 'doctorDepartment', 'timeAvailability', 'location', 'date','action'];
    pageSize: number = 5;  
    pageSizeOptions: number[] = [5, 10, 20];  
  
    constructor(private fb: FormBuilder, private dialog: MatDialog) {
      this.dataSource.filterPredicate = (data, filter) => {
        const filterValues = JSON.parse(filter);
        return (
          (filterValues.doctorName ? data.doctorName.toLowerCase().includes(filterValues.doctorName.toLowerCase()) : true) &&
          (filterValues.doctorDepartment ? data.doctorDepartment.toLowerCase().includes(filterValues.doctorDepartment.toLowerCase()) : true) 
         
        );
      };
    }
  
    ngOnInit(): void {}
  
    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator; 
    }
  
    applyFilter(): void {
      this.dataSource.filter = JSON.stringify(this.filter);
    }
  

    bookAppointment(element: any): void {
      console.log('Booking appointment for:', element);
      alert(`Appointment booked for ${element.doctorName} on ${element.date}`);
    }
    
    
}
