import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-endurance-pie-chart',
  templateUrl: './endurance-pie-chart.component.html',
  styleUrls: ['./endurance-pie-chart.component.css']
})
export class EndurancePieChartComponent implements OnInit {

  public _Endurance_pieChartLabels:string[] =["running","swimming",];
  public _Endurance_pieChartData:number[];
  public _Endurance_pieChartType:string = 'pie';
  _Endurance_sum :any=0;
  _Endurance_sum_running :any=0;
  _Endurance_sum_swimming :any=0;
   
  constructor(private  dataService:  DataService) { }

  ngOnInit(): void {
    // *** retrieve the data of Endurance from json file 
    this. dataService.fetchData().subscribe(data =>{
      
      for (var i = 0; i < 10; i++){
        let temp_max = data[i];
        let _running=temp_max["endurance"].running;
        this._Endurance_sum_running=this._Endurance_sum_running+_running;
        let _swimming=temp_max["endurance"].swimming;
        this._Endurance_sum_swimming=this._Endurance_sum_swimming+_swimming;
        this._Endurance_sum=this._Endurance_sum+_swimming+_running;
        

        
  }
  // **************** calculate the Endurance chart data ******************
  this._Endurance_pieChartData=[((this._Endurance_sum_running/this._Endurance_sum)*360),((this._Endurance_sum_swimming/this._Endurance_sum)*360)];
})
  }
}