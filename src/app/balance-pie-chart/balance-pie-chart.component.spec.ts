import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancePieChartComponent } from './balance-pie-chart.component';

describe('BalancePieChartComponent', () => {
  let component: BalancePieChartComponent;
  let fixture: ComponentFixture<BalancePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
