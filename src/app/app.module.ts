import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForcePieChartComponent } from './force-pie-chart/force-pie-chart.component';
import { BalancePieChartComponent } from './balance-pie-chart/balance-pie-chart.component';
import { EndurancePieChartComponent } from './endurance-pie-chart/endurance-pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MyPerformanceComponent } from './my-performance/my-performance.component';
@NgModule({
  declarations: [
    AppComponent,
    ForcePieChartComponent,
    BalancePieChartComponent,
    EndurancePieChartComponent,
    MyPerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
