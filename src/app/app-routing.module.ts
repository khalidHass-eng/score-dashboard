import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { EndurancePieChartComponent } from './endurance-pie-chart/endurance-pie-chart.component';
import { ForcePieChartComponent } from './force-pie-chart/force-pie-chart.component';
import { BalancePieChartComponent } from './balance-pie-chart/balance-pie-chart.component';
import { MyPerformanceComponent } from './my-performance/my-performance.component';
const routes: Routes = [
  {path: 'endurance-pie-chart', component:EndurancePieChartComponent},
  {path: 'force-pie-chart', component: ForcePieChartComponent},
  {path: 'balance-pie-chart', component: BalancePieChartComponent},
  {path: 'My-Performance', component: MyPerformanceComponent },
  {path: '**', component: MyPerformanceComponent }
];

@NgModule({
  imports: [ BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
