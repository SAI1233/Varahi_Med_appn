import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-bed-availability',
  standalone: true,
  imports: [ MatTableModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          FormsModule, MatPaginatorModule],
  templateUrl: './bed-availability.component.html',
  styleUrl: './bed-availability.component.css'
})
export class BedAvailabilityComponent {


   
        @ViewChild(MatPaginator) paginator!: MatPaginator; // Declare paginator
      
    
        dataSource = new MatTableDataSource([
          { sNo: 1, noOfBeds: 5, typeOfRoom: 'ICU', typeOfBed: 'Single', availabilityLocation: 'ICU Room A', costOfRoomPerDay: '$500' },
          { sNo: 2, noOfBeds: 3, typeOfRoom: 'General', typeOfBed: 'Double', availabilityLocation: 'Ward B', costOfRoomPerDay: '$200' },
          { sNo: 3, noOfBeds: 4, typeOfRoom: 'Private', typeOfBed: 'Single', availabilityLocation: 'Private Room C', costOfRoomPerDay: '$400' },
          { sNo: 4, noOfBeds: 6, typeOfRoom: 'Maternity', typeOfBed: 'Queen', availabilityLocation: 'Maternity Ward D', costOfRoomPerDay: '$350' },
          { sNo: 5, noOfBeds: 2, typeOfRoom: 'Surgical', typeOfBed: 'Single', availabilityLocation: 'Surgical Room E', costOfRoomPerDay: '$450' },
          { sNo: 6, noOfBeds: 3, typeOfRoom: 'General', typeOfBed: 'Double', availabilityLocation: 'Ward F', costOfRoomPerDay: '$180' },
          { sNo: 7, noOfBeds: 5, typeOfRoom: 'ICU', typeOfBed: 'King', availabilityLocation: 'ICU Room G', costOfRoomPerDay: '$550' },
          { sNo: 8, noOfBeds: 2, typeOfRoom: 'Private', typeOfBed: 'Double', availabilityLocation: 'Private Room H', costOfRoomPerDay: '$450' },
          { sNo: 9, noOfBeds: 4, typeOfRoom: 'Maternity', typeOfBed: 'Single', availabilityLocation: 'Maternity Ward I', costOfRoomPerDay: '$400' },
          { sNo: 10, noOfBeds: 7, typeOfRoom: 'Surgical', typeOfBed: 'Double', availabilityLocation: 'Surgical Room J', costOfRoomPerDay: '$470' }
        ]);
        
        
      
        filter = {
          availabilityLocation: '',
          typeOfRoom: ''
      
        };
      
        displayedColumns: string[] = ['sNo', 'noOfBeds', 'typeOfRoom', 'typeOfBed', 'availabilityLocation', 'costOfRoomPerDay','action'];
        pageSize: number = 5;  
        pageSizeOptions: number[] = [5, 10, 20];  
      
        constructor(private fb: FormBuilder, private dialog: MatDialog) {
          this.dataSource.filterPredicate = (data, filter) => {
            const filterValues = JSON.parse(filter);
            return (
              (filterValues.availabilityLocation ? data.availabilityLocation.toLowerCase().includes(filterValues.department.toLowerCase()) : true) &&
              (filterValues.typeOfRoom ? data.typeOfRoom.toLowerCase().includes(filterValues.typeOfRoom.toLowerCase()) : true) 
             
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
