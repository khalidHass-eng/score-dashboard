import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public _sum_force_array :any[]=[];
public _sum_endurance_array :any[]=[];
public _sum_balance_array :any[]=[];
  constructor(private http: HttpClient) { }

  set_sum_force_array( value) {      
    this._sum_force_array= value ; 
  }  
  set_sum_endurance_array( value) {      
    this._sum_endurance_array= value ; 
  }  
  set_sum_balance_array( value) {      
    this._sum_balance_array= value ; 
  }  
  get_sum_force_array() {  
    return this._sum_force_array;  
  }  
  get_sum_endurance_array() {  
    return this._sum_endurance_array;  
  } 
  get_sum_balance_array() {  
    return this._sum_balance_array;  
  } 
  fetchData(): Observable<Object> {
    return this.http.get("./assets/performance-data.json");
}
}
