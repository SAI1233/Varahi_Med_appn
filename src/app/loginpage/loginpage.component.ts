import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent implements OnInit {

  Year : any;

  constructor( public router: Router){
    this.Year = Date.now();
  }
  ngOnInit(): void {
  }



}
