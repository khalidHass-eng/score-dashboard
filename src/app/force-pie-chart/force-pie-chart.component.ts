import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-force-pie-chart',
  templateUrl: './force-pie-chart.component.html',
  styleUrls: ['./force-pie-chart.component.css']
})
export class ForcePieChartComponent implements OnInit {
  public _force_pieChartLabels:string[] =["legs","arms","back","abs"];
  public _force_pieChartData:number[];
  public _force_pieChartType:string = 'pie';
  _Force_sum :any=0;
  _Force_sum_leg :any=0;
  _Force_sum_arms :any=0;
  _Force_sum_back :any=0;
  _Force_sum_abs :any=0;
 constructor(private  dataService:  DataService) { }

  ngOnInit(): void {
    // *** retrieve the data of Force from json file 
    this. dataService.fetchData().subscribe(data =>{
      for (var i = 0; i < 10; i++){
        let temp_max = data[i];
        let _leg=temp_max["force"].legs;
        this._Force_sum_leg=this._Force_sum_leg+_leg;
        let _arm=temp_max["force"].arms;
        this._Force_sum_arms=this._Force_sum_arms+_arm;
        let _backs=temp_max["force"].back;
        this._Force_sum_back=this._Force_sum_back+_backs;
        let _abs=temp_max["force"].abs;
        this._Force_sum_abs=this._Force_sum_abs+_abs;
        this._Force_sum=this._Force_sum+_leg+_arm+_backs+_abs;
       

      }
   // **************** calculate the force chart data ******************
  this._force_pieChartData=[((this._Force_sum_leg/this._Force_sum)*360),((this._Force_sum_arms/this._Force_sum)*360),((this._Force_sum_back/this._Force_sum)*360),((this._Force_sum_abs/this._Force_sum)*360),];
})
  }

}
