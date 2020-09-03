import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-balance-pie-chart',
  templateUrl: './balance-pie-chart.component.html',
  styleUrls: ['./balance-pie-chart.component.css']
})
export class BalancePieChartComponent implements OnInit {
  public _Balance_pieChartLabels:string[] =["arms","legs",];
  public _Balance_pieChartData:number[];
  public _Balance_pieChartType:string = 'pie';
  _Balance_sum :any=0;
  _Balance_sum_arms :any=0;
  _Balance_sum_legs :any=0;
  
  constructor(private  dataService:  DataService) { }

  ngOnInit(): void {
    // *** retrieve the data of balance from json file 
    this. dataService.fetchData().subscribe(data =>{
        for (var i = 0; i < 10; i++){
        let temp_max = data[i];
        let _arms=temp_max["balance"].arms;
        this._Balance_sum_arms=this._Balance_sum_arms+_arms;
        let _legs=temp_max["balance"].legs;
        this._Balance_sum_legs=this._Balance_sum_legs+_legs;
        this._Balance_sum=this._Balance_sum+_arms+_legs;
      
  }
 // **************** calculate the balance chart data ******************
  this._Balance_pieChartData=[((this._Balance_sum_arms/this._Balance_sum)*360),((this._Balance_sum_legs/this._Balance_sum)*360)];
})
  }
}
