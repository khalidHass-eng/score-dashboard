import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from './data.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //title = 'Angular Example';
 // chart: any = [];

  constructor(private  dataService:  DataService){}
  ngOnInit(){
   // this. dataService.fetchData().subscribe(data =>{
      
   //   this.chart =data;
   // })
  }
}
    
  

