import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndurancePieChartComponent } from './endurance-pie-chart.component';

describe('EndurancePieChartComponent', () => {
  let component: EndurancePieChartComponent;
  let fixture: ComponentFixture<EndurancePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndurancePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndurancePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
