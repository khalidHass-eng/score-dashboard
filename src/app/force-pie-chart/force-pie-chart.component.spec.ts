import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcePieChartComponent } from './force-pie-chart.component';

describe('ForcePieChartComponent', () => {
  let component: ForcePieChartComponent;
  let fixture: ComponentFixture<ForcePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
