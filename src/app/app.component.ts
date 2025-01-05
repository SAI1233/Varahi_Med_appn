import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  isSmallScreen: boolean = false;

  title = 'Varahi_Med';
  Year: number;
  clientname: any;
  array = [
    '',
  ];

  constructor(    public router: Router ){
    this.Year = Date.now();
  }

  ngOnInit(): void {

    this.router.events.subscribe((event: any) => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        if (this.array.includes(event.url.split('/')[1])) {
          // if(event.url.substring(1) == 'wendys')
          // {
          //   this.clientname = 'Wendys'

          // }
          // else
          this.clientname = event.url.split('/')[1];
        }

        // alert(event.url.split('/')[0])
        // alert(event.url.split('/')[1])

        // console.log(this.clientname);
        // console.log(event.url);
      }
    });
  }

  


}
