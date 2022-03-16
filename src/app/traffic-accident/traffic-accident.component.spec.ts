import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficAccidentComponent } from './traffic-accident.component';

describe('TrafficAccidentComponent', () => {
  let component: TrafficAccidentComponent;
  let fixture: ComponentFixture<TrafficAccidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficAccidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
