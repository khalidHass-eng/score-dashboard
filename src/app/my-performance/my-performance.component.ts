import { BalancePieChartComponent } from './../balance-pie-chart/balance-pie-chart.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.css']
})
export class MyPerformanceComponent implements OnInit {

  public barChartLabels:string[]=[];
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public dates:string[]=[];
  public performance_force_array : any[]=[];
  public performance_endurance_array : any[]=[];
  public performance_balance_array : any[]=[];
  constructor(private  dataService:  DataService) { }
  public barChartData:any[] = [
    {data: [], label: ''},
    {data: [], label: ''},
    {data: [], label: ''}
  ];
  ngOnInit(): void {

    this. dataService.fetchData().subscribe(data =>{
    
      for (var i = 0; i < 10; i++){
        // retrieve the dates from the json file
        let temp_max = data[i];
        let date =temp_max["dateCreated"];
        this.dates.push(date);
        //retrieve the force attributes from the json file
         let _leg=temp_max["force"].legs;
         let _arm=temp_max["force"].arms;
         let _backs=temp_max["force"].back;
         let _abs=temp_max["force"].abs;
        // fil the array of force
         this.performance_force_array.push(_leg+_arm+_backs+_abs);  
        //retrieve the balance attributes from the json file
         let _arms=temp_max["balance"].arms;
         let _legs=temp_max["balance"].legs;
         // fil the array of balance
         this.performance_balance_array.push(_arms+_legs);
        //retrieve the endurance attributes from the json file
         let _running=temp_max["endurance"].running;
         let _swimming=temp_max["endurance"].swimming;
         // fil the array of Endurance
         this.performance_endurance_array.push(_swimming+_running);
        
  }
  
    
  // fill the properties with the calculated arrays
  this.barChartLabels=this.dates;
  this.barChartData=[
    {data: this.performance_force_array, label: 'Strength'},
    {data: this.performance_endurance_array, label: 'Endurance'},
    {data: this.performance_balance_array, label: 'Balance'}

  ]

  })
  }
}
