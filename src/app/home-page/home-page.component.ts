import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatTableModule, FormsModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit{

  displayedColumns: string[] = ['emrNumber', 'dateOfRaise', 'department'];
  dataSource = new MatTableDataSource([
    { emrNumber: 'EMR12345', dateOfRaise: '12-12-2024', department: 'Ortho' },
    { emrNumber: 'EMR67890', dateOfRaise: '12-12-2024', department: 'Optha' },
    { emrNumber: 'EMR11223', dateOfRaise: '12-12-2024', department: 'Neuro' },
    { emrNumber: 'EMR44556', dateOfRaise: '12-12-2024', department: 'Cardio' }
  ]);

  ngAfterViewInit() {
  
  }



}
