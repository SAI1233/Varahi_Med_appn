import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-blood-bank',
  standalone: true,
  imports: [ MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule, MatPaginatorModule],
  templateUrl: './blood-bank.component.html',
  styleUrl: './blood-bank.component.css'
})
export class BloodBankComponent {

  
      @ViewChild(MatPaginator) paginator!: MatPaginator; // Declare paginator
    
  
      dataSource = new MatTableDataSource([
        { sNo: 1, bloodType: 'A+', bloodAvailability: 'Available', futureAvailability: '2025-01-15', location: 'Room A1', rateOfUnit: '$120' },
        { sNo: 2, bloodType: 'B+', bloodAvailability: 'Low', futureAvailability: '2025-01-16', location: 'Room B2', rateOfUnit: '$110' },
        { sNo: 3, bloodType: 'O-', bloodAvailability: 'Out of Stock', futureAvailability: '2025-01-17', location: 'Room C3', rateOfUnit: '$130' },
        { sNo: 4, bloodType: 'AB+', bloodAvailability: 'Available', futureAvailability: '2025-01-18', location: 'Room D4', rateOfUnit: '$140' },
        { sNo: 5, bloodType: 'A-', bloodAvailability: 'Available', futureAvailability: '2025-01-19', location: 'Room E5', rateOfUnit: '$125' },
        { sNo: 6, bloodType: 'B-', bloodAvailability: 'Low', futureAvailability: '2025-01-20', location: 'Room F6', rateOfUnit: '$115' },
        { sNo: 7, bloodType: 'O+', bloodAvailability: 'Available', futureAvailability: '2025-01-21', location: 'Room G7', rateOfUnit: '$135' },
        { sNo: 8, bloodType: 'AB-', bloodAvailability: 'Out of Stock', futureAvailability: '2025-01-22', location: 'Room H8', rateOfUnit: '$145' },
        { sNo: 9, bloodType: 'A+', bloodAvailability: 'Available', futureAvailability: '2025-01-23', location: 'Room I9', rateOfUnit: '$120' },
        { sNo: 10, bloodType: 'B+', bloodAvailability: 'Low', futureAvailability: '2025-01-24', location: 'Room J10', rateOfUnit: '$110' }
      ]);
      
      
    
      filter = {
        bloodType: '',
        location: ''
    
      };
    
      displayedColumns: string[] = ['sNo', 'bloodType', 'bloodAvailability', 'futureAvailability', 'location', 'rateOfUnit','action'];
      pageSize: number = 5;  
      pageSizeOptions: number[] = [5, 10, 20];  
    
      constructor(private fb: FormBuilder, private dialog: MatDialog) {
        this.dataSource.filterPredicate = (data, filter) => {
          const filterValues = JSON.parse(filter);
          return (
            (filterValues.bloodType ? data.bloodType.toLowerCase().includes(filterValues.bloodType.toLowerCase()) : true) &&
            (filterValues.location ? data.location.toLowerCase().includes(filterValues.location.toLowerCase()) : true) 
           
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
    
  
      bookBlood(element: any): void {
        console.log('Booking appointment for:', element);
        alert(`Appointment booked for ${element.doctorName} on ${element.date}`);
      }
      

}
